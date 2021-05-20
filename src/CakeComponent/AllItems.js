import React, { useState, useEffect } from 'react';
import { axios } from '../component/axios'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import NewCake from '../CakeComponent/NewCake'

function AllItems(props) {
    const listcategory = props.listCategory
    const [listCategoriesDetail, setlistCategoriesDetail] = useState([]);
    const [check, setCheck] = useState(false);
    const [inputName, setInputName] = useState({
        nameSearch: ""
    })
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
                    <h1>hello</h1>
                </div>
            )
        } else {
            return (
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
            )
        }
    }

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
    // function saveCake() {
    //     if (objectURL.url === "") {
    //         return (
    //             <button disabled="disabled" type="button" className="btnAddSub"
    //                 onClick={() => {
    //                     saveCake()
    //                 }}
    //             >Save</button>
    //         )
    //     } else {
    //         return (
    //             <button type="button" className="btnAddSub"
    //                 onClick={() => {
    //                     saveCake()
    //                     history.push("/admin/newcake", { src: objectURL.url })
    //                 }}
    //             >Save
    //             </button>
    //         )

    //     }
    // }
    return (
        <div className="col-10">
            <br />
            {showbutton()}
            <br />
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        {/* <th>ID</th> */}
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
                                    <td>
                                        <input id="checkbox" type="checkbox" name={item.name} />
                                    </td>
                                    {/* <td className="id">
                                        <label for={item.name}> {item.id}</label>
                                    </td> */}
                                    <td>{item.name}</td>
                                    <td>$ {item.price}</td>
                                    <td>{item.category}</td>
                                    <td>{item.subcategory}</td>
                                    <td className="abc">
                                        <button
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

            {/* Add Cake */}
            {/* <Modal isOpen={modalCake} toggle={toggleAddCake} className={modalAddCake}>
                <ModalHeader toggle={toggleAddCake} charCode="X"></ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={(e) => submit(e)}>
                                <div>
                                    <h3>Select photo</h3>
                                    <img className="imageCakeRecipes" src={objectURL.url} alt="Cake" width="150" height="150" />
                                    <br />
                                    <input type="file" className="custom" onChange={(e) => setObjectURL({
                                        post: e.target.files[0],
                                        url: URL.createObjectURL(e.target.files[0])
                                    })}></input>
                                </div>
                                <br />
                                {
                                    saveCake()
                                }
                                <button type="button" onClick={toggleAddCake} className="btnAddSub">Cancel</button>
                            </form>
                        </div>
                    </div>

                </ModalBody>
            </Modal> */}

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