import React, { useState, useEffect } from "react";
import { navigate } from '@reach/router';
import axios from 'axios';
import Form from "./Form";
import { Link } from '@reach/router';

const Update = (props) => {

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setChangedAuthor(res.data);
            })
            .catch((err) => {
                console.log(err.response.data.errors);
            })
    }, [])

    const [changedAuthor, setChangedAuthor] = useState({
        name: ""
    })

    const [errors, setErrors] = useState({});

    const { id } = props;



    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, changedAuthor)
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                if (err.response.data.errors) {
                    setErrors(err.response.data.errors);
                }
            })
    }


    return (
        <div>
            <h1>Authors</h1>
            <h3>Edit: {changedAuthor.name}</h3>
            <Link className="addLink" to={`/`}><p>back to list of authors</p></Link>
            <Form handleSubmit={handleUpdate} author={changedAuthor} setAuthor={setChangedAuthor} errors={errors} setErrors={setErrors} />
        </div>
    )
}


export default Update;