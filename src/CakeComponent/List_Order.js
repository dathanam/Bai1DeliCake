import React from 'react';
import { Container } from 'reactstrap';
import './Style/ListOrder.css';

let ListOrder = [
    {
        "id": "123456",
        "total": "504",
        "status": "Completed",
        "phoneNumber": "0123456789",
        "address": "52 le Dai Hanh St, Hai Ba Trung Dist"
    },
    {
        "id": "123456",
        "total": "504",
        "status": "Completed",
        "phoneNumber": "0123456789",
        "address": "210 Hoang Quoc Viet Ha Noi"
    },
    {
        "id": "123456",
        "total": "504",
        "status": "Completed",
        "phoneNumber": "0123456789",
        "address": "112 Trung Kinh Tu Liem"
    },
    {
        "id": "123456",
        "total": "504",
        "status": "Completed",
        "phoneNumber": "0123456789",
        "address": "22 Hoang Hoa Tham Cau Giay"
    }
]

function List_Order() {
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
                            ListOrder.map((item) => {
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