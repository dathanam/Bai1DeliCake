import React, { useEffect, useState } from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { axios } from '../component/axios';
import '../component/HeaderSale.css';
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";


function Children() {
    const [Arr, setArr] = useState([]);
    const [cart, setCart] = useState([]); // [{id: "ggg", name: "gggg", count: 1}]
    const [ArrDoKho, setArrDoKho] = useState([]);

    const [Arr2, setArr2] = useState([]);

    const getArr = async () => {
        const response = await axios
            .get("/congthuc.json")
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            let a = Object.keys(response.data);
            const newArr = a.map((key) => {
                return { id: key, ...response.data[key] };
            })
            setArr2(newArr);
            setArr(response.data); setArrDoKho([...new Set(newArr.map(item => item.doKho))])
        }
    };

    useEffect(() => {
        getArr();
    }, []);

    let mang = Object.keys(Arr);

    const newArr = mang.map((key) => {
        return { id: key, ...Arr[key] };
    })
    const history = useHistory();

    function EditFood(id) {
        history.push("/EditFood/" + id)
    }

    return (
        <div className="container">
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Số lượng</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item) => {
                                return (<tr>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
                                    <button
                                        onClick={() => {
                                            let index = cart.indexOf(item);
                                            let cartdelete = [...cart];
                                            if (cartdelete[index].count > 1) {
                                                cartdelete[index].count -= 1;
                                                setCart(cartdelete)
                                            }
                                            else {
                                                cartdelete.splice(index, 1)
                                                setCart(cartdelete)
                                            }
                                        }}>
                                        Xóa
                                    </button>
                                </tr>)
                            })
                        }

                    </tbody>
                </table>
                <select>
                    {
                        ArrDoKho.map((item) => (
                            <option>{item}</option>
                        ))}
                </select>
                <button>
                    <Link to='/newfood'>NewFood</Link>
                </button>
                <div className="row">
                    {
                        newArr.map((item) =>
                            <div className="col-md-3">
                                <Card>
                                    <CardImg top width="100%" src={item.urlHinhAnh} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h5">{item.ten}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                                            <i className="fas fa-stopwatch">{item.thoiGian}'</i>
                                            <i className="fas fa-utensils x">{item.doKho}</i>
                                        </CardSubtitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                                            <i className="far fa-eye">{item.luotXem / 1000}k</i>
                                        </CardSubtitle>
                                        <Button
                                            onClick={() => {
                                                let z = cart.findIndex((itemx) => itemx.id === item.id);
                                                if (z === -1) {
                                                    setCart([{ id: item.id, name: item.ten, count: 1 }, ...cart]);
                                                }
                                                else {
                                                    let newCart = [...cart]
                                                    newCart[z].count += 1
                                                    setCart(newCart)
                                                }
                                            }}>
                                            Add Cart</Button>
                                        <Button
                                            onClick={() => {
                                                axios.delete("https://rn-app-bc1e7.firebaseio.com/congthuc/" + item.id + ".json")
                                                    .then(res => {
                                                        getArr();
                                                    })
                                            }
                                            }>
                                            Delete</Button>
                                        <Button
                                            onClick={() => EditFood(item.id)
                                            }> <i className="fas fa-edit"></i>
                                        </Button>
                                    </CardBody>

                                </Card>

                            </div>
                        )
                    }
                </div>
            </div>
        </div >

    );
}

export default Children;