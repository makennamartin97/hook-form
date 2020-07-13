import React  from  'react';

const Results = (props) => {
    const {firstName, lastName, email, password, confirm } = props.data;
    return(
        <div className="row">
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-header">Current</div>
                    <div className="card-body">

                        <p>First Name: {firstName}</p>
                        <p>Last Name: {lastName}</p>
                        <p>Email: {email}</p>
                        <p>Password: {password}</p>
                        <p>Confirm Password: {confirm}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};











export default Results;