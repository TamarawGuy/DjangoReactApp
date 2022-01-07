import React, {Component, Fragment} from "react";
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import NewStudentForm from "./NewStudentForm";

class NewStudentModal extends Component {
    state = {modal: false};

    toggle = () => this.setState({modal: !this.state.modal});

    render() {
        const create = this.props.create;
        let title = 'Edit Student';
        let button = <Button onClick={this.toggle}>Edit</Button>

        if (create) {
            title = 'Create New Student'
            button = <Button color="primary" className="float-right" style={{minWidth: "200px"}} onClick={this.toggle}>Create</Button>
        }

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                    <ModalBody>
                        <NewStudentForm resetState={this.props.resetState} toggle={this.toggle} student={this.props.student} />
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewStudentModal;