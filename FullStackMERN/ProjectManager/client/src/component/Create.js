import React, { useState} from "react";
import axios from 'axios';
import Form from "./Form";

const Create = (props) => {

    const { products, setProducts } = props;

    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    const newHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products',
            newProduct
        )
            .then((res) => {
                console.log(res);
                setProducts([...products, res.data])

                setNewProduct({
                    title: "",
                    price: "",
                    description: ""
                })
            })
            .catch((err) => console.log(err))
    }


    return (
        <div>
            <Form submitHandler={newHandler} product={newProduct} setProduct={setNewProduct} />
        </div>
    )
}


export default Create;