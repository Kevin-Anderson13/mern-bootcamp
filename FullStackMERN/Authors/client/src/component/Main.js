import React, { useState } from "react";
import Create from "./Create"
import ShowAll from "./ShowAll";
import { Link } from '@reach/router';


const Main = (props) => {

    const [authors, setAuthors] = useState([]);
    const [newAuthor, setNewAuthor] = useState([]);


    return (
        <div>
            <h1>Welcome to the Author Shelter</h1>
            <h3>These authors are looking for a good home</h3>
            <Link className="addLink" to={`/new`}><p>add an Author</p></Link>
            <ShowAll newAuthor={newAuthor} setNewAuthor={setNewAuthor} authors={authors} setAuthors={setAuthors} />
        </div>
    )
}


export default Main;