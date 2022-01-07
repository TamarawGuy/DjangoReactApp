import React, {Component, Fragment} from "react";
import {Modal, ModalHeader, Button, ModalFooter} from 'reactstrap';
import axios from 'axios';
import {API_URL} from '../constants/index';

class ConfirmRemovalModal extends Component {
    state = {modal: false};

    toggle = () => this.setState({modal: !this.state.modal});

    deleteStudent = (id) => {
        axios.delete(API_URL + id)
            .then(() => {
                this.props.resetState();
                this.toggle();
            });
    };

    render() {
        return (
            <Fragment>
                <Button color="danger" onClick={() => this.toggle()}>Remove</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Do you want to delete?
                    </ModalHeader>

                    <ModalFooter>
                        <Button type="button" onClick={() => this.toggle()}>Cancel</Button>
                        <Button type="button" color="primary" onClick={() => this.deleteStudent(this.props.id)}>Yes</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

export default ConfirmRemovalModal;