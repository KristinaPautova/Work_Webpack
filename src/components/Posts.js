import React, {useEffect, useState} from "react";
import axios from "axios";
import { DataGrid } from '@material-ui/data-grid';
import "../styles/Posts.css"



function Posts() {
    const [countries, setCountries] = useState(JSON.parse(localStorage.getItem("countries")));
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 130 },
    ];

    useEffect(() => {
        if (!countries) {
            axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
                setCountries(res.data)
                localStorage.setItem("countries", JSON.stringify(res.data));
            })
        }
    }, [countries])

    if (!countries) {
        return null
    }



    return (
            <div className="container__table">
                <DataGrid rows={countries} columns={columns} pageSize={5} checkboxSelection />
            </div>
    );
}

export default Posts;