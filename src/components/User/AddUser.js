import React, { useState } from 'react';
import UserDataService from '../../service/user.service';

const AddUser = () => {
    const userState = {
        username: "",
        fullname: "",
        email: "",
        password: "",
        id: null
    }
    const [users, setUser] = useState(userState);
    const [submitted, setSubmitted] = useState(false);

    

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...users, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        var data = {
            username: users.username,
            fullname: users.fullname,
            email: users.email,
            password: users.password,
        };
        UserDataService.create(data)
            .then(response => {
                setUser({
                    username: response.data.username,
                    fullname: response.data.fullname,
                    email: response.data.email,
                    password: response.data.password,
                    id: response.data.id
                })
            })
            .catch(e => {
                console.log(e);
            })
    }

    const newUser = () => {
        setUser(userState);
        setSubmitted(false);
    };
    return (
        <div className='container '>
            <div className='row justify-content-center align-items-center mt-4'>
                {submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={newUser}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div className='col-sm-4 '>
                        <form >
                            <div className="form-group">
                                <label htmlFor="username">username</label>
                                <input type="text"
                                    className="form-control"
                                    value={users.username} name="username"
                                    onChange={handleChange}
                                    placeholder='username' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fullname">Full Name</label>
                                <input type="text"
                                    className="form-control"
                                    value={users.fullname} name="fullname"
                                    onChange={handleChange}
                                    placeholder='fullname' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">email</label>
                                <input type="email"
                                    className="form-control"
                                    value={users.email} name="email"
                                    onChange={handleChange}
                                    placeholder='email' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    value={users.password} name="password"
                                    onChange={handleChange}
                                    placeholder='Password' />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                )}


            </div>
        </div>
    );
};

export default AddUser;