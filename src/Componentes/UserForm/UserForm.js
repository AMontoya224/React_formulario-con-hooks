import React, { useState } from  'react';
import './UserForm.css'



const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [firstNameForm, setFirstNameForm] = useState("");
    const [lastNameForm, setLastNameForm] = useState("");
    const [emailForm, setEmailForm] = useState("");
    const [passwordForm, setPasswordForm] = useState("");
    const [confirmForm, setConfirmForm] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstNameForm, lastNameForm, emailForm, passwordForm, confirmForm };

        setFirstName( () => newUser["firstNameForm"] );
        setLastName( () => newUser["lastNameForm"] );
        setEmail( () => newUser["emailForm"] );
        setPassword( () => newUser["passwordForm"] );
        setConfirm( () => newUser["confirmForm"] );

        setFirstNameForm("");
        setLastNameForm("");
        setEmailForm("");
        setPasswordForm("");
        setConfirmForm("");
    };
    
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => setPasswordShown(!passwordShown);

    const [confirmShown, setConfirmShown] = useState(false);
    const toggleConfirm = () => setConfirmShown(!confirmShown);

    return(
        <div className='form'>
            <form onSubmit={ createUser }>
                <div className='inp-container'>
                    <label htmlFor='firstNameForm' className='inp'>
                        <input type='text' id='firstNameForm' className='inp-input' placeholder=' ' value={firstNameForm} onChange={(event) => setFirstNameForm(event.target.value)} />
                        <span className='inp-label'>First Name</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>Bug test</p>
                    </label>
                </div>
                <div className='inp-container'>
                    <label htmlFor='lastNameForm' className='inp'>
                        <input type="text" id="lastNameForm" className='inp-input' placeholder=' ' value={lastNameForm} onChange={(event) => setLastNameForm(event.target.value)} />
                        <span className='inp-label'>Last Name</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'></p>
                    </label>
                </div>
                <div className='inp-container'>
                    <label htmlFor='emailForm' className='inp'>
                        <input type="email" id="emailForm" className='inp-input' placeholder=' ' value={emailForm} onChange={(event) => setEmailForm(event.target.value)} />
                        <span className='inp-label'>Email</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'></p>
                    </label> 
                </div>
                <div className='inp-container'>
                    <label htmlFor='passwordForm' className='inp'>
                        <div className="row">
                            <input type={passwordShown ? "text" : "password"} id="passwordForm" className='inp-input' placeholder=' ' value={passwordForm} onChange={(event) => setPasswordForm(event.target.value)} />
                            <span className='inp-label inp-label-P'>Password</span>
                            <span className='inp-focus'></span>
                            <span className="material-icons-outlined inp-icons" onClick={togglePassword}>{passwordShown ? "visibility" : "visibility_off"}</span>
                        </div>
                        <p className='inp-error'>Bug test</p>
                    </label> 
                </div>
                <div className='inp-container'>
                    <label htmlFor='confirmForm' className='inp'>
                        <div className="row">
                            <input type={confirmShown ? "text" : "password"} id="confirmForm" className='inp-input' placeholder=' ' value={confirmForm} onChange={(event) => setConfirmForm(event.target.value)} />
                            <span className='inp-label inp-label-P'>Password<b>_</b>Confirm</span>
                            <span className='inp-focus'></span>
                            <span className="material-icons-outlined inp-icons" onClick={toggleConfirm}>{confirmShown ? "visibility" : "visibility_off"}</span>
                        </div>
                        <p className='inp-error'></p>
                    </label> 
                </div>
                <button type="submit" className='submit'>
                    Add
                </button>
            </form>
            <div className='infoData'>
                <div>
                    <h1>
                        Your Form Data
                    </h1>
                    <p>
                        <b>First Name:</b> {firstNameForm}
                    </p>
                    <p>
                        <b>Last Name:</b> {lastNameForm}
                    </p>
                    <p>
                        <b>Email:</b> {emailForm}
                    </p>
                    <p>
                        <b>Password</b>: {passwordForm}
                    </p>
                    <p>
                        <b>Password Confirm:</b> {confirmForm}
                    </p>
                </div>
                <div>
                    <h1>
                        Your Data Add
                    </h1>
                    <p>
                        <b>First Name:</b> {firstName}
                    </p>
                    <p>
                        <b>Last Name:</b> {lastName}
                    </p>
                    <p>
                        <b>Email:</b> {email}
                    </p>
                    <p>
                        <b>Password:</b> {password}
                    </p>
                    <p>
                        <b>Password Confirm:</b> {confirm}
                    </p>
                </div>
            </div>
        </div>
    );
};
    
export default UserForm;