
import React, { useState, Form } from 'react';

const UserForm = (props) => {
    const {inputs, setInputs } = props;

    const [fnameError, setfnameError] = useState(false);
    const [lnameError, setlnameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [pwError, setpwError] = useState("");
    const [confirmError, setconfirmError] = useState(false);



    

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    //const createUser = e => {
    //    e.preventDefault();
    //    const newUser = { firstName, lastName, email, password, confirm };

    //};
    


    return(
 
                <div className="card">
                    <div className="card-header">Register</div>
                    <div className="card-body">
                    
                        <form>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input  onChange={ onChange} onFocus={e => setfnameError(true)}  type="text" name="firstName" value={inputs.firstName} />
                                <p className="text-danger">{inputs.firstName.length < 2 && fnameError ? "Must be at least 2 char" : ""}</p>
                               
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input onChange={ onChange } onFocus={e => setlnameError(true)} type="text" name="lastName" value={inputs.lastName}/>
                                <p className="text-danger">{inputs.lastName.length < 2 && lnameError ? "Must be at least 2 char" : ""}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input onChange={ onChange} onFocus={e => setemailError(true)} name="email" value={inputs.email}/>
                                <p className="text-danger">{inputs.email.length < 5 && setemailError ? "Must be at least 5 char" : ""}</p>
                            </div>
                            <div className="form-group">

                                <label htmlFor="password">Password:</label>
                                <input onChange={ onChange} onFocus={e => setpwError(true)} type="text" name="password" value={inputs.password}/>
                                <p className="text-danger">{inputs.password.length < 8 && setpwError ? "Must be at least 8 char" : ""}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm:</label>
                                <input onChange={onChange } onFocus={e => setconfirmError(true)} type="text" name="confirm" value={inputs.confirm}/>
                                <p className="text-danger">{inputs.password !== inputs.confirm ? "Passwords must match" : ""}</p>
                            </div>
                        
                        </form>
                    </div>
                </div>

    
    );

};
export default UserForm;