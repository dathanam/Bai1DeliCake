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
                        <div className="col-2 left">
                            {
                                listCategory.map((item) => {
                                    return (
                                        <>
                                            <h5
                                                onClick={() => setName({
                                                    idcate: item.id
                                                })}>
                                                {item.name}
                                            </h5>
                                            <div className="ListOrderSub">
                                                {
                                                    item.subcategory.map((icon) => {
                                                        return (
                                                            <p onClick={() => setName({
                                                                idsub: icon.id
                                                            })}>
                                                                {icon.name}
                                                            </p>
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