import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import './Style/Items.css'
import { axios } from '../component/axios'
import AllItem from '../CakeComponent/AllItems'

function Item() {

    const [listCategory, setListCategory] = useState([]);

    const getArr = async () => {
        const response = await axios
            .get("api/v1/categories")
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setListCategory(response.data.data)
        }
    }
    useEffect(() => {
        getArr();
    }, []);

    const [name, setName] = useState({
        idcate: "",
        idsub: ""
    });

    return (
        <>
            <div className="itemss">
                <Container>
                    <div className="row">
                        <div className="col-3">
                            {
                                listCategory.map((item) => {
                                    return (
                                        <ul className="danhmuc">
                                            <li className="li1">
                                                <div className="abc">
                                                    <button
                                                        onClick={() => setName({
                                                            idcate: item.id
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
                                                                        idsub: icon.id
                                                                    })
                                                                    }
                                                                >{icon.name}</button>
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

                        <AllItem name={name} listCategory={listCategory} />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Item;