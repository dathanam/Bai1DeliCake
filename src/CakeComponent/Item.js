import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import './Style/Items.css'
import { axios } from '../axios'
import AllItem from '../CakeComponent/AllItems'
import { useHistory } from "react-router-dom";

function Item() {

    const history = useHistory();
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
                        <div className="col-2 left">
                            {
                                listCategory.map((item) => {
                                    return (
                                        <>
                                            <h5 className="pointer"
                                                onClick={() => setName({
                                                    idcate: item.id
                                                })}>
                                                {item.name}
                                            </h5>
                                            <div className="ListOrderSub">
                                                {
                                                    item.subcategory.map((icon) => {
                                                        return (
                                                            <div className="row">
                                                                <div className="dropdown dropright">
                                                                    <p className="subCategory" data-toggle="dropdown">
                                                                        {icon.name}
                                                                    </p>
                                                                    <div className="dropdown-menu">
                                                                        <p onClick={() => setName({
                                                                            idsub: icon.id
                                                                        })}>
                                                                            <i className="fas fa-eye"></i>
                                                                        </p>
                                                                        <p onClick={() => {
                                                                            axios.delete(`api/v1/subcategories/?_id=` + icon.id)
                                                                                .then(res => {
                                                                                    getArr();
                                                                                })
                                                                        }}>
                                                                            <i className="far fa-trash-alt"></i>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        )
                                                    })
                                                }
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <AllItem name={name} listCategory={listCategory} getCategories={getArr} />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Item;