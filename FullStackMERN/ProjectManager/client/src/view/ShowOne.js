import React, { useState, useEffect } from "react";
import { Link } from '@reach/router';
import axios from 'axios';
import Delete from "../component/Delete";

const ShowOne = (props) => {

    const { id } = props;
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setSingleProduct(res.data)
            })
            .catch((err) => console.log(err))
    }, [])



    return (
        <div className="singleProduct">
            <h1>{singleProduct.title}</h1>
            <p>{singleProduct.description}</p>
            <h3>${singleProduct.price}.00</h3>
            <Link to={`/product/${singleProduct._id}/edit`}><p>Edit</p></Link>
            <Delete id={id}/>
        </div>
    )
}


export default ShowOne;