import React, {Component} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";

import {API_URL} from '../constants/index';

class NewStudentForm extends Component {
    state = {id: 0, name: '', email: '', document: '', phone: ''};

    componentDidMount() {
        if (this.props.student) {
            const {id, name, document, email, phone} = this.props.student;
            this.setState({id, name, document, email, phone});
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    createStudent = (e) => {
        e.preventDefault()
        axios.post(API_URL, this.state)
            .then(() => {
                this.props.resetState();
                this.props.toggle();
            });
    };

    editStudent = (e) => {
        e.preventDefault()
        axios.put(API_URL + this.state.id + '/', this.state)
            .then(() => {
                this.props.resetState();
                this.props.toggle();
            });
    };

    ifEmpty = (value) => {
        return value === '' ? '' : value;
    };

    render() {
        return (
            <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input type="text" name="name" onChange={this.onChange} value={this.ifEmpty(this.state.name)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="text" name="email" onChange={this.onChange} value={this.ifEmpty(this.state.email)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="document">Document:</Label>
                    <Input type="text" name="document" onChange={this.onChange}
                           value={this.ifEmpty(this.state.document)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone:</Label>
                    <Input type="text" name="phone" onChange={this.onChange} value={this.ifEmpty(this.state.phone)}/>
                </FormGroup>
                <Button>Send</Button>
            </Form>
        );
    }
}

export default NewStudentForm;