import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';



const Delete = (props) => {

    const {id, deleteRefresh} = props;

    const deleteHandler = (e) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            if(deleteRefresh){
                deleteRefresh(id);
            } else {
                console.log(res.data);
                navigate("/")
            }
        })
        .catch((err) => console.log(err))
    }

    return(

        <button onClick={deleteHandler}>Delete</button>
    )

}

export default Delete