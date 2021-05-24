import React, { useState, useEffect } from 'react';
import { axios } from '../component/axios'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Axios from 'axios';
import { useHistory } from "react-router-dom";

function AllItems(props) {
    const listcategory = props.listCategory
    const [listCategoriesDetail, setlistCategoriesDetail] = useState([]);
    const [inputName, setInputName] = useState({
        nameSearch: ""
    })
    const history = useHistory();

    // Delete Many
    const [arrCheckBoxes, setArrCheckBoxes] = useState([])
    let urlDelete = "api/v1/items/"
    arrCheckBoxes.map((item) => {
        urlDelete = urlDelete + "&ids=" + item
    })
    let urlDeleteMany = urlDelete.replace("&", "?");

    // get item by Sub
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

    //Get List Items
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

    // Show Button Delete
    let showbutton = () => {
        if (arrCheckBoxes[0] !== undefined) {
            return (
                <th>
                    <i
                        onClick={() => {
                            axios.delete(urlDeleteMany)
                                .then(res => {
                                    getArr();
                                    setArrCheckBoxes([])
                                })
                        }}
                        class="far fa-trash-alt"></i>
                </th>
            )
        } else {
            return (
                <th></th>
            )
        }
    }

    // Create SubCategories
    const urlCreateSubCategories = "http://192.168.1.250:5012/api/v1/subcategories/"
    const [dataCreateSubCategories, setDataCreateSubCategories] = useState({
        name: "",
        category_id: ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(urlCreateSubCategories, {
            name: dataCreateSubCategories.name,
            category_id: dataCreateSubCategories.category_id
        }).then((res) => {
            if (res.statusText === "OK") {
                getCategories();
                toggle();
            }
        })
    }

    function handle(e) {
        const newdata = { ...dataCreateSubCategories };
        newdata[e.target.id] = e.target.value;
        setDataCreateSubCategories(newdata);
    }

    // Search By Name 
    const getSearch = async () => {
        const response = await axios
            .get(`api/v1/items/` + inputName.nameSearch)
            .catch((err) => console.log("Error: ", err));
        if (response && response.data) {
            setlistCategoriesDetail(response.data.data);
        }
    }
    useEffect(() => {
        getSearch();
    }, [inputName.nameSearch])

    function Search(e) {
        const newdata = { ...inputName };
        newdata[e.target.id] = e.target.value;
        setInputName(newdata);
    }

    function submitSearchName() {
        getSearch();
    }

    //Edit Item
    const [dataEdit, setDataEdit] = useState({
        id: "",
        name: "",
        price: "",
        subcategory_id: "",
        categoryName: ""
    })
    const {
        classNameEdit, getCategories
    } = props;

    const [editItem, setEditItem] = useState(false);

    const toggleEditItem = () => setEditItem(!editItem);

    function submitItem(e) {
        e.preventDefault();
        Axios.put("http://192.168.1.250:5012/api/v1/items/" + dataEdit.id, dataEdit).then((res) => {
            if (res.statusText === "OK") {
                toggleEditItem();
                getArr();
            }
        })
    }
    function handlee(e) {
        const newdata = { ...dataEdit };
        newdata[e.target.id] = e.target.value;
        setDataEdit(newdata);
    }

    const [objectURL, setObjectURL] = useState({
        url: "",
        post: ""
    });
    useEffect(() => {
        if (!objectURL.url) return;
    }, [objectURL.post])

    //showSub
    function showSub() {
        if (dataEdit.categoryName === "") {
            return
        }
        else {
            let ArrCategory = listcategory.filter((category) => category.name === dataEdit.categoryName)
            return ArrCategory.map((item) => {
                return (
                    <select onChange={(e) => handlee(e)} id="subcategory_id" value={dataEdit.subcategory_id}>
                        {
                            item.subcategory.map((icon) => {
                                return (
                                    <option value={icon.id}>{icon.name}</option>
                                )
                            })
                        }
                    </select>
                )
            })

        }
    }
    return (
        <div className="col-10">
            <br />
            <div className="row">
                <div className="col-md-3">
                    <form onSubmit={(e) => submitSearchName(e)}>
                        <input onChange={(e) => Search(e)} id="nameSearch" type="text" placeholder="ID/Name" />
                    </form>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <button className="btnAddSub"
                        onClick={toggle}
                    >Add New SubCategory</button>
                </div>
                <div className="col-md-4">
                    <button className="btnAddSub"
                        onClick={() => {
                            history.push("/admin/newcake")
                        }}
                    >Add New Cake</button>
                </div>
            </div>
            <br />
            <table class="table table-bordered">
                <thead>
                    <tr>
                        {showbutton()}
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
                                <tr key={item.id}>
                                    <td>
                                        <input type="checkbox"
                                            onChange={() => {
                                                let z = arrCheckBoxes.findIndex((icon) => icon === item.id);
                                                if (z === -1) {
                                                    return setArrCheckBoxes([item.id, ...arrCheckBoxes]);
                                                } else {
                                                    let newArr = [...arrCheckBoxes]
                                                    let Arr = []
                                                    newArr.map((icon) => {
                                                        if (icon === item.id) {
                                                        } else {
                                                            Arr = [...Arr, icon]
                                                        }
                                                    })
                                                    setArrCheckBoxes(Arr)
                                                }
                                            }}
                                        />
                                    </td>
                                    {/* <td className="id">
                                        <label for={item.name}> {item.id}</label>
                                    </td> */}
                                    <td>{item.name}</td>
                                    <td>$ {item.price}</td>
                                    <td>{item.category}</td>
                                    <td>{item.subcategory}</td>
                                    <td className="abc">
                                        {/* <button
                                            onClick={() => {
                                                setDataEdit({
                                                    "id": item.id,
                                                    "name": item.name,
                                                    "price": item.price,
                                                    "categoryName": item.category
                                                })
                                                toggleEditItem();
                                            }
                                            }> <i className="fas fa-edit"></i>
                                        </button> */}
                                        <button
                                            onClick={() => {
                                                history.push("/admin/editcake/" + item.id)
                                            }
                                            }> <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            onClick={() => {
                                                axios.delete(`api/v1/items/?ids=` + item.id)
                                                    .then(res => {
                                                        getArr();
                                                    })
                                            }
                                            }>
                                            <i class="far fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            {/* New SubCategory */}
            <Modal isOpen={modal} toggle={toggle} className={modalAdd}>
                <ModalHeader toggle={toggle} charCode="X"></ModalHeader>
                <ModalBody>
                    <form onSubmit={(e) => submit(e)}>
                        <div>
                            <h3>New SubCategory</h3>
                            <br />
                            <input onChange={(e) => handle(e)} id="name" value={dataCreateSubCategories.name} type="text" className="inputNewName" placeholder="Name SubCategory" />
                            <br />
                            <select onChange={(e) => handle(e)} id="category_id" value={dataCreateSubCategories.category_id}>
                                <option>Category</option>
                                <option value={1}>BirthDay Cake</option>
                                <option value={2}>Cheese Cake</option>
                                <option value={3}>Dessert Cake</option>
                                <option value={4}>Bread</option>
                            </select>
                        </div>
                        <br />
                        <button type="submit" className="btnAddSub">Save</button>
                        <button type="button" onClick={toggle} className="btnAddSub1">Cancel</button>
                    </form>
                </ModalBody>
            </Modal>

            {/* EditItems */}
            <Modal isOpen={editItem} toggle={toggleEditItem} className={classNameEdit}>
                <ModalHeader toggle={toggleEditItem} charCode="X"></ModalHeader>
                <ModalBody>
                    <form onSubmit={(e) => submitItem(e)}>
                        <div>
                            <h3>Edit Item</h3>
                            <br />
                            <input onChange={(e) => handlee(e)} id="name" value={dataEdit.name} type="text" className="inputName" placeholder="Cake Name" />
                            <input onChange={(e) => handlee(e)} id="price" value={dataEdit.price} type="text" className="inputName" placeholder="price" />
                            <br />
                            {
                                showSub()
                            }
                            <br />
                            <br />
                        </div>
                        <button className="btnAddSub">Save</button>
                        <button type="button" onClick={toggleEditItem} className="btnAddSub1">Cancel</button>
                    </form>
                </ModalBody>
            </Modal>


        </div >
    );
}

export default AllItems;