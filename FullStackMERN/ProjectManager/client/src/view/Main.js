import React, {useState} from "react";
import Create from "../component/Create"
import ShowAll from "../component/ShowAll";


const Main = (props) => {

    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState([]);


    return(
        <div>
            <Create newProduct={newProduct} setNewProduct={setNewProduct} products={products} setProducts={setProducts}/>
            <ShowAll newProduct={newProduct} setNewProduct={setNewProduct} products={products} setProducts={setProducts}/>
        </div>
    )
}


export default Main;
