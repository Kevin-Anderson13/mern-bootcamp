import React, {useEffect} from "react";
import {Link} from '@reach/router';
import axios from 'axios';
import Delete from "./Delete";

const ShowAll = (props) => {

    const {products, setProducts} = props;


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((err) => console.log(err))
    },[])

    const deleteRefresh = (id) => {
        console.log("working?")
        let newList = products.filter((product) => product._id !== id)
        setProducts(newList);
    }


    return(
        <div>
            {
                products?
                    products.map((product, index) => (
                        <div key={index}>
                            <Link to={`/product/${product._id}`}><h2>{product.title}</h2></Link>
                            <Link to={`/product/${product._id}/edit`}><span>Edit</span></Link>
                            <Delete deleteRefresh={deleteRefresh} id={product._id}/>
                        </div>
                    ))
                :null
            }

        </div>
    )
}


export default ShowAll;