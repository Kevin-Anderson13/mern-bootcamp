import React, { useState, useEffect } from "react";

const Form = (props) => {

    const { submitHandler, product, setProduct } = props;
    const {errors, setErrors} = useState({});


    const inputHandler = (e) => {
        let newStateProduct = { ...product };
        newStateProduct[e.target.name] = e.target.value;
        setProduct(newStateProduct);
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <label>Enter a Product</label>
                <input onChange={inputHandler} name="title" value={product.title} name="title" type="text" />
                <br />

                <label>Price</label>
                <input onChange={inputHandler} name="price" value={product.price} name="price" type="number" />
                <br />

                <label>Description</label>
                <input onChange={inputHandler} name="description" value={product.description} name="description" type="text" />
                <br />

                <input type="submit" />
            </form>
        </div>
    )
}


export default Form;