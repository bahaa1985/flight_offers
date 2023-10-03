import React, { Fragment, useEffect, useRef, useState } from "react";
import { getUsers, newUser, updateUser } from "../fetching/user";
import { username_isvalid, email_isvalid } from "./validation";
import RegForm from "./reg_form";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Modal } from "bootstrap/dist/js/bootstrap.bundle";

export default function User() {

    const [users, setUsers] = useState([])
    const [formState, setFormState] = useState('')
    const [modalHidden, setModalHidden] = useState(true)
    const [userId, setuserId] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('')
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [userType, setUsertype] = useState('')
    const [disableBut, setDisableBut] = useState(true)
    const username_error_ref = useRef()

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data)
        })
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate form fields
        let isValid = true;

        if (name.trim() === '') {
            setNameError('Name is required');
            isValid = false;
        } else {
            setNameError('');
        }

        if (email.trim() === '') {
            setEmailError('Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (password.trim() === '') {
            setPasswordError('Password is required');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (confirmPassword.trim() === '') {
            setConfirmPasswordError('Confirm Password is required');
            isValid = false;
        } else if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match');
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }

        // Submit the form if valid
        if (isValid) {
            // Perform form submission logic here
            console.log('Form submitted successfully');
        }
    };

    const isValidEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    return (
        <div className="container" dir="rtl">
            <h1>تسجيل مستخدم جديد</h1>
            <button type="button"
                className="btn btn-primary"
                data-bs-toggle='modal' data-bs-target='#myRegModal'
                onClick={() => [setFormState('new'), setName(''), setEmail(''), setMobile('')]}>
                مستخدم جديد<i className="bi bi-plus-lg"></i>
            </button>

            <table id="usersTable" className='table table-hover' >
                <thead>

                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.user_type}</td>
                                    <td>
                                        <button type='submit' className='btn btn-success'
                                            onClick={() => [setFormState('update'),
                                            setName(user.name), setEmail(user.email),
                                            setMobile(user.mobile), setUsertype(user.user_type), setuserId(user._id)]}
                                            data-bs-toggle='modal' data-bs-target='#myRegModal'
                                        >
                                            تعديل
                                        </button>
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-danger'
                                            onClick={() => [setFormState('delete'), setName(user.name), setuserId(user._id)]}
                                            data-bs-toggle='modal' data-bs-target='#myRegModal'>
                                            حذف
                                        </button>
                                    </td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>

            {/* bootstrap form within modal shown only when click new,update,delete buttons */}
            <div className="modal fade" id="myRegModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} className="form">
                                <div className='form-group text-start'>                                   
                                    <label htmlFor="name">Name:</label>
                                    <input className="form-control text-start"
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />                                                                     
                                    {nameError && <span className="error">{nameError}</span>}
                                </div>
                                <div className='form-group text-start'>
                                    <label  htmlFor="email">Email:</label>
                                    <input className="form-control"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                    {emailError && <span className="error">{emailError}</span>}
                                </div>
                                <div className='form-group text-start'>
                                    <label  htmlFor="email">موبايل</label>
                                    <input className="form-control"
                                        type="text"
                                        id="mobile"
                                        value={mobile}
                                        onChange={(event) => setMobile(event.target.value)}
                                    />
                                    {emailError && <span className="error">{emailError}</span>}
                                </div>
                                <div className='form-group text-start'>
                                    <label  htmlFor="password">Password:</label>
                                    <input className="form-control"
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    {passwordError && <span className="error">{passwordError}</span>}
                                </div>
                                <div className='form-group text-start'>
                                    <label  htmlFor="confirmPassword">Confirm Password:</label>
                                    <input className="form-control"
                                        type="password"
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(event) => setConfirmPassword(event.target.value)}
                                    />
                                    {confirmPasswordError && (
                                        <span className="error">{confirmPasswordError}</span>
                                    )}
                                </div>
                                <button className="btn form-btn btn-primary" type="submit">تسجيل</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}