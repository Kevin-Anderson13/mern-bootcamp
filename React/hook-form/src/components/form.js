import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    // CHECK OUT THIS COMMENT
    // For Anyone looking at this on GitHub.  I know it's a mess.  It was originally just made to
    // show a front end form that would pop up validation messages real time with no submit button
    // or anything, but then me and another guy were working on it.  And we went down a few 
    // rabit holes testing out some other code.  So I know it's a mess.  But this is not how 
    // any react submit form with validations would look in the real world.  I should be working
    // more on that in later files.

    const changeHandler = (e) => {
        if (firstNameError === true && lastNameError === true && emailError === true && passwordError === true) {
            setHasBeenSubmitted(true);
        } else {
            setHasBeenSubmitted(false);
        }
    };
    const createUser = (e) => {
        e.preventDefault();
        if (firstNameError === true && lastNameError === true && emailError === true && passwordError === true) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

            // setHasBeenSubmitted(true);
        } else {
            setHasBeenSubmitted(false);
        }
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        changeHandler(e);
        if (e.target.value.length > 2) {
            setFirstNameError(true);
        } else {
            setFirstNameError(false);
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        changeHandler(e);
        if (e.target.value.length > 2) {
            setLastNameError(true);
        } else {
            setLastNameError(false);
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        changeHandler(e);
        if (e.target.value.length > 5) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        changeHandler(e);
        if (e.target.value.length > 8) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordError("Confirm Password must Match what you typed in the Password Field");
        } else {
            setConfirmPasswordError("");
        }
    }


    return (
        <div>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ?
                        <h3>Thanks for signing up!  Welcome to your page.</h3> :
                        <h3>Welcome, please sign up here.</h3>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={handleFirstName} />
                    {
                        firstNameError ?
                            <p>{firstNameError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={handleLastName} />
                    {
                        lastNameError ?
                            <p>{lastNameError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={handleEmail} />
                    {
                        emailError ?
                            <p>{emailError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={handlePassword} />
                    {
                        passwordError ?
                            <p>{passwordError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPassword} />
                    {
                        confirmPasswordError ?
                            <p>{confirmPasswordError}</p> :
                            ''
                    }
                </div>
                {
                    hasBeenSubmitted === false ?
                        <input type="submit" value="Create User" disabled /> :
                        <input type="submit" value="Create User" />
                }

            </form>

            <h3>Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>


    );
};

export default UserForm;