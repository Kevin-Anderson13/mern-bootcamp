import React, { useState, useEffect } from "react";

const Form = (props) => {

    const { handleSubmit, author, setAuthor, errors, setErrors } = props;


    const handleInput = (e) => {
        let newStateAuthor = { ...author };
        newStateAuthor[e.target.name] = e.target.value;
        setAuthor(newStateAuthor);
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="formContent">
                    <div className="oneHalfForm">
                        <label>Enter an Authors Name</label>
                        {
                            errors.name ?
                                <span className="errorMessage">{errors.name.message}</span>
                                : null
                        }
                        <input onChange={handleInput} name="name" value={author.name} name="name" type="text" />
                        <br />
                    </div>
                </div>
                <input type="submit" value="Submit Author" />
            </form>
        </div>
    )
}


export default Form;