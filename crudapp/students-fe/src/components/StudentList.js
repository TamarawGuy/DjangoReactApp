import React, {Component} from "react";
import {Table} from 'reactstrap';
import NewStudentModal from "./NewStudentModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class StudentList extends Component {
    render() {
        const students = this.props.students;

        return (
            <Table dark>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Document</th>
                    <th>Phone</th>
                    <th>Registration</th>
                    <th>Buttons</th>
                </tr>
                </thead>
                <tbody>
                {!students || students.length <= 0 ? (
                    <tr>
                        <td colSpan="6" align="center">
                            <b>Ops, no one here!</b>
                        </td>
                    </tr>
                ) : (
                    students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.document}</td>
                            <td>{student.phone}</td>
                            <td>{student.registration_date}</td>
                            <td align="center">
                                <NewStudentModal create={false} student={student} resetState={this.props.resetState} />
                                &nbsp;&nbsp;
                                <ConfirmRemovalModal id={student.id} resetState={this.props.resetState} />
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </Table>
        )
    }
}

export default StudentList