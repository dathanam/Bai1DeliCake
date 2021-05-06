import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import './Style/Items.css'
import { BrowserRouter as Link } from "react-router-dom";
import { axios } from '../component/axios'
import AllItem from '../CakeComponent/AllItems'

function Item() {

    const [listCatarogy, setlistCatarogy] = useState([]);

    const getArr = async () => {
        const response = await axios
            .get("api/v1/categories")
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setlistCatarogy(response.data.data)
        }
    }
    useEffect(() => {
        getArr();
    }, []);

    const [name, setName] = useState({
        cate: "",
        sub: ""
    });

    return (
        <>
            <div className="itemss">
                <Container>
                    <div className="row">
                        <div className="col-3">
                            {
                                listCatarogy.map((item) => {
                                    return (
                                        <ul className="danhmuc">
                                            <li className="li1">
                                                <div className="abc">
                                                    <button
                                                        onClick={() => setName({
                                                            cate: item.name
                                                        })}>
                                                        {item.name}
                                                    </button>
                                                </div>
                                                <ul className="xyz">
                                                    {
                                                        item.subcategory.map((icon) => {
                                                            return (
                                                                <button
                                                                    onClick={() => setName({
                                                                        cate: item.name,
                                                                        sub: icon.sub_name
                                                                    })
                                                                    }
                                                                >{icon.sub_name}</button>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </li>
                                        </ul>
                                    )
                                })
                            }
                        </div>

                        <AllItem name={name} />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Item;