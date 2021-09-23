import React, { useEffect } from "react";
import { Link } from '@reach/router';
import axios from 'axios';
import Delete from "./Delete";

const ShowAll = (props) => {

    const { authors, setAuthors } = props;


    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    // const deleteRefresh = (id) => {
    //     console.log("working?")
    //     let newList = authors.filter((author) => author._id !== id)
    //     setAuthors(newList);
    // }


    return (
        <div className="allAuthors">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author, index) => (
                                <tr>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link to={`/authors/edit/${author._id}`}>|  Edit</Link>
                                        <Delete />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default ShowAll;