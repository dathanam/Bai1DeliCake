import React, { useState, useEffect } from 'react';
import { axios } from '../component/axios'
import { Container } from 'reactstrap';
import './Style/ListOrder.css';

function List_Order() {

    const [listOrder, setListOrder] = useState([]);

    const getArr = async () => {
        const response = await axios
            .get("/api/v1/orders")
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setListOrder(response.data.data)
        }
    }
    useEffect(() => {
        getArr();
    }, []);

    return (
        <div className="list-order">
            <Container>
                <br />
                <div className="row">
                    <div className="col-md-3">
                        <select>
                            <option>Status</option>
                            <option>Completed</option>
                            <option>Pending</option>
                            <option>Confirmed</option>
                        </select>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <label for="fromdate">From date: </label>
                        <input type="date" id="fromdate" name="fromdate" />
                    </div>
                    <div className="col-md-3">
                        <label for="todate">To date: </label>
                        <input type="date" id="todate" name="todate" />
                    </div>
                </div>
                <br />
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listOrder.map((item) => {
                                return (
                                    <tr>
                                        <td className="id">{item.id}</td>
                                        <td>$ {item.total}</td>
                                        <td>
                                            <select>
                                                <option>Completed</option>
                                                <option>Pending</option>
                                                <option>Confirmed</option>
                                            </select>
                                        </td>
                                        <td>{item.status}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td className="abc">
                                            <button>Make Invoice</button>
                                            <i class="far fa-trash-alt"></i>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Container>
        </div>
    );
}

export default List_Order;