import React, { useState, useEffect } from "react";
import { navigate} from '@reach/router';
import axios from 'axios';
import Form from "../component/Form";

const Update = (props) => {

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setChangedProduct(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    const [changedProduct, setChangedProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    const { id } = props;



    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`,
            changedProduct
        )
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => console.log(err))
    }


    return (
        <div>
            <Form submitHandler={updateHandler} product={changedProduct} setProduct={setChangedProduct} />
        </div>
    )
}


export default Update;