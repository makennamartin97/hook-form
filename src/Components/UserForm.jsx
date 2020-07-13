import React  from  'react';

const UserForm = (props) => {
    const {inputs, setInputs } = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    return(
        <div className="row">
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-header">Register</div>
                    <div className="card-body">
                    
                        <form>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input  onChange={ onChange} type="text" name="firstName" value={inputs.firstName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input onChange={ onChange } type="text" name="lastName" value={inputs.lastName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input onChange={ onChange } name="email" value={inputs.email}/>
                            </div>
                            <div className="form-group">

                                <label htmlFor="password">Password:</label>
                                <input onChange={ onChange } type="text" name="password" value={inputs.password}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input onChange={onChange } type="text" name="confirm" value={inputs.confirm}/>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
    );

};
export default UserForm;