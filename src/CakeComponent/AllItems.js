import React, { useState, useEffect } from 'react';
import { axios } from '../component/axios'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Axios from 'axios';
import { useHistory } from "react-router-dom";

function AllItems(props) {
    const [listCategoriesDetail, setlistCategoriesDetail] = useState([]);
    const [check, setCheck] = useState(true);
    const checkbutton = () => {
        setCheck(false)
    }
    let url = "";
    if (!props.name.idcate && !props.name.idsub) {
        url = "api/v1/items";
    }
    else {
        if (!props.name.idsub) {
            url = `api/v1/items/cate/${props.name.idcate}`;
        }
        else {
            url = `api/v1/items/sub/${props.name.idsub}`;
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
    }, [props.name.idcate, props.name.idsub]);

    const {
        modalAdd
    } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    const {
        modalAddCake
    } = props;
    const [modalCake, setModalCake] = useState(false);
    const toggleAddCake = () => setModalCake(!modalCake);

    const history = useHistory();
    function EditItem(id) {
        history.push("/edititem/" + id)
    }

    let showbutton = () => {
        if (check) {
            return (
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" placeholder="ID/Name" />
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <button className="btnAddSub"
                            onClick={toggle}
                        >Add New Category</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btnAddSub"
                            onClick={toggleAddCake}
                        >Add New Cake</button>
                    </div>
                </div>
            )
        } else {
            return (
                <h1>hello</h1>
            )
        }
    }

    const urlCreateSubCategories = "http://192.168.1.250:5012/api/v1/subcategories/"
    const [data, setData] = useState({
        id: "",
        name: "",
        category_name: ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(urlCreateSubCategories, {
            id: data.id,
            name: data.name,
            category_name: data.category_name
        }).then((res) => {
            if (res.statusText === "OK") {
                history.push("/");
                toggle();
            }
        })
    }

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }

    const [dataEdit, setDataEdit] = useState({
        name: "",
        price: "",
        category: "",
        subCategory: ""
    })
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
                                    <td>$ {item.category.name}</td>
                                    <td>$ {item.subcategory.name}</td>
                                    <td className="abc">
                                        {/* <button
                                            onClick={() => EditItem(item.id)
                                            }> <i className="fas fa-edit"></i>
                                        </button> */}
                                        <button
                                            onClick={() => {
                                                const res = Axios
                                                    .get(`http://192.168.1.250:5012/api/v1/items/` + item.id)
                                                    .catch((err) => console.log("Error: ", err));
                                                if (res && res.data) {
                                                    console.log("ggg", res.data)
                                                    //   setDataEdit(response.data.data);
                                                }
                                                console.log("fff")
                                            }
                                            }> <i className="fas fa-edit"></i>
                                        </button>
                                        <i class="far fa-trash-alt"></i>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Modal isOpen={modal} toggle={toggle} className={modalAdd}>
                <ModalHeader toggle={toggle} charCode="X"></ModalHeader>
                <ModalBody>
                    <form onSubmit={(e) => submit(e)}>
                        <div>
                            <h3>New Sub Category</h3>
                            <br />
                            <input onChange={(e) => handle(e)} id="id" value={data.id} class="w3-input w3-animate-input" type="text" placeholder="ID"></input>
                            <input onChange={(e) => handle(e)} id="name" value={data.name} class="w3-input w3-animate-input" type="text" placeholder="Name Category"></input>
                            <select onChange={(e) => handle(e)} id="category_name" value={data.category_name}>
                                <option>BirthDay Cake</option>
                                <option>Cheese Cake</option>
                                <option>Dessert Cake</option>
                                <option>Bread</option>
                            </select>
                        </div>
                        <br />
                        <button type="submit" className="btnAddSub">Save</button>
                        <button type="button" onClick={toggle} className="btnAddSub1">Cancel</button>
                    </form>
                </ModalBody>
            </Modal>

            <Modal isOpen={modalCake} toggle={toggleAddCake} className={modalAddCake}>
                <ModalHeader toggle={toggleAddCake} charCode="X"></ModalHeader>
                <ModalBody>
                    <form onSubmit={(e) => submit(e)}>
                        <div>
                            <h3>Select photo</h3>
                            <br />
                            <button type="button" className="btnModalCake">Select photo From Your Computer</button>
                        </div>
                        <button type="button" onClick={toggleAddCake} className="btnAddSub">Cancel</button>
                    </form>
                </ModalBody>
            </Modal>


        </div >
    );
}

export default AllItems;