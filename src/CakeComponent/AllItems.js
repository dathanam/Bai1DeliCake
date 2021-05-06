import React, { useState, useEffect } from 'react';
import { axios } from '../component/axios'

function AllItems(props) {
    const [listCategoriesDetail, setlistCategoriesDetail] = useState([]);
    const [check, setCheck] = useState(true);
    const checkbutton = () => {
        setCheck(false)
    }
    let url = "";

    if (props.name.cate === "") {
        url = "api/v1/items/cate";
    }
    else {
        if (!props.name.sub) {
            url = `api/v1/items/cate/${props.name.cate}`;
        }
        else {
            url = `api/v1/items/sub?cate=${props.name.cate}&sub=${props.name.sub}`;
        }
    }
    const getArr = async () => {
        const response = await axios
            .get(url)
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setlistCategoriesDetail(response.data.data);
        }
    }
    useEffect(() => {
        getArr();
    }, [props.name.cate, props.name.sub]);

    let showbutton = () => {
        if (check) {
            return (
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" placeholder="ID/Name" />
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <button>Add New Catalogy</button>
                    </div>
                    <div className="col-md-3">
                        <button>Add New Cake</button>
                    </div>
                </div>
            )
        } else {
            return (
                <h1>hello</h1>
            )
        }
    }

    return (
        <div className="col-9">
            <br />
            {showbutton()}
            <br />
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>SubCategory</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listCategoriesDetail.map((item) => {
                            return (
                                <tr>
                                    <td><input id="gender_male_checkbox" type="checkbox" name={item.name}
                                    //    onClick={checkbutton()}
                                    /></td>

                                    <td className="id">
                                        <label for={item.name}> {item.id}</label>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>$ {item.price}</td>
                                    <td>{item.category}</td>
                                    <td>{item.subcategory}</td>
                                    <td className="abc">
                                        <i class="fas fa-pen"></i>
                                        <i class="far fa-trash-alt"></i>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AllItems;