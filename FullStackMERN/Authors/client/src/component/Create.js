import React, { useState } from "react";
import axios from 'axios';
import { navigate } from '@reach/router';
import Form from "./Form";
import { Link } from '@reach/router';

const Create = (props) => {
    const { authors, setAuthors } = props;

    const [newAuthor, setNewAuthor] = useState({
        name: ""
    })

    const [errors, setErrors] = useState({});

    const newHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', newAuthor)
            .then((res) => {
                console.log(res);
                // setAuthors([...authors, res.data])
                navigate("/");

                // setNewAuthor({
                //     name: "",
                //     type: "",
                //     description: "",
                //     skillOne: "",
                //     skillTwo: "",
                //     skillThree: ""
                // })
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
            <h3>Put in the name of an Author</h3>
            <Link className="addLink" to={`/`}><p>back to list of authors</p></Link>
            <Form handleSubmit={newHandler} author={newAuthor} setAuthor={setNewAuthor} errors={errors} setErrors={setErrors} />
        </div>
    )
}


export default Create;