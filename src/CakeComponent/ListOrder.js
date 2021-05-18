import React, { useState, useEffect } from 'react';
import { axios } from '../component/axios'
import { Container } from 'reactstrap';
import './Style/ListOrder.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function List_Order(props) {

    const [listOrder, setListOrder] = useState([]);
    const [orderDetail, setOrderDetail] = useState([]);

    const timestamp = orderDetail.created_date;
    const convertTimeStampToNow = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp)


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
    }, [orderDetail]);

    const [id, setID] = useState({
        id: ""
    });

    const [dataEdit, setDataEdit] = useState({
        make_invoice: 1
    })

    const getOrderDetail = async () => {
        const response = await axios
            .get(`/api/v1/orders/` + id.id)
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setOrderDetail(response.data.data)
        }
    }
    useEffect(() => {
        getOrderDetail();
    }, [id.id]);

    // get by stt
    const [stt, setStt] = useState({
        name: ""
    });
    function handle(e) {
        const newdata = { ...stt };
        newdata[e.target.id] = e.target.value;
        setStt(newdata);
    }
    const getByStt = async () => {
        if (stt.name === "") {
            getArr()
        }
        else {
            const response = await axios
                .get(`api/v1/orders/stt/` + stt.name)
                .catch((err) => console.log("Error: ", err));

            if (response && response.data) {
                setListOrder(response.data.data)
            }
        }
    }
    useEffect(() => {
        getByStt();
    }, [stt.name]);

    // get by date
    const [date, setDate] = useState({
        start: "",
        finish: "",
        convertStartToStamp: "",
        convertFinishToStamp: ""
    });

    const getByDate = async () => {
        if (date.convertStartToStamp === "" || date.convertFinishToStamp === "") {
            getArr()
        }
        else {
            const response = await axios
                .get(`api/v1/orders/date?start=` + date.convertStartToStamp + `&end=` + date.convertFinishToStamp)
                .catch((err) => console.log("Error: ", err));

            if (response && response.data) {
                setListOrder(response.data.data)
            }
        }
    }
    useEffect(() => {
        getByDate();
    }, [date.start, date.finish]);

    function checkInvoice(status, id) {
        if (status === "completed" || status === "cancelled") {
            return (
                <div className="checked">
                    <button disabled="disabled" type="button" className="btnChecked">Make Invoice</button>
                    <button className="deleteChecked"
                        onClick={() => {
                            axios.delete(`api/v1/orders/?ids=` + id)
                                .then(res => {
                                    getArr();
                                })
                        }
                        }>
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            )
        }
        else {
            return (
                <div className="checking">
                    <button type="button" className="makeInvoice"
                        onClick={() => {
                            setID({
                                "id": id
                            })
                            toggleMakeInvoice();
                        }
                        }
                    >Make Invoice</button>
                    <button disabled="disabled">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            )
        }
    }
    const {
        modalDetail
    } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const {
        modalMake
    } = props;
    const [modalMakeInvoice, setModalMakeInvoice] = useState(false);
    const toggleMakeInvoice = () => setModalMakeInvoice(!modalMakeInvoice);

    return (
        <div className="list-order">
            <Container>
                <br />
                <div className="row">
                    <div className="col-md-3">
                        <select className="status" onChange={(e) => handle(e)} id="name" value={stt.name}>
                            <option value={""}>All</option>
                            <option value={"completed"}>Completed</option>
                            <option value={"pending"}>Pending</option>
                            <option value={"confirmed"}>Confirmed</option>
                            <option value={"cancelled"}>Cancelled</option>
                        </select>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <label for="fromdate">From date: </label>
                                    <input
                                        type="date"
                                        name="start"
                                        value={date.start}
                                        onChange={event => setDate({
                                            "start": event.target.value,
                                            "finish": date.finish,
                                            "convertStartToStamp": parseInt((new Date(event.target.value).getTime() / 1000).toFixed(0)),
                                            "convertFinishToStamp": date.convertFinishToStamp
                                        })}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label for="todate">To date: </label>
                                    <input
                                        type="date"
                                        name="finish"
                                        value={date.finish}
                                        onChange={event => setDate({
                                            "start": date.start,
                                            "finish": event.target.value,
                                            "convertStartToStamp": date.convertStartToStamp,
                                            "convertFinishToStamp": parseInt((new Date(event.target.value).getTime() / 1000).toFixed(0))
                                        })}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <br />
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th></th>
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
                                        <td className="id">
                                            <button className="btnID" onClick={() => {
                                                setID({
                                                    "id": item.id
                                                })
                                                toggle();
                                            }
                                            }>
                                                <i class="far fa-eye"></i>
                                            </button></td>
                                        <td>{item.id}</td>
                                        <td>$ {item.total}</td>
                                        <td>{item.user.phone_number}</td>
                                        <td>
                                            <select className="optionComfirm">
                                                <option>{item.status}</option>
                                            </select>
                                        </td>
                                        <td>{item.user.phone_number}</td>
                                        <td>{item.user.address}</td>
                                        <td>
                                            {
                                                checkInvoice(item.status, item.id)
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Container>

            <Modal isOpen={modal} toggle={toggle} className={modalDetail}>
                <ModalHeader toggle={toggle} charCode="X"></ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-12">
                            {
                                orderDetail.map((item) => {
                                    return (
                                        <div>
                                            <h5>Code: {item.id}</h5>
                                            <h5>Name: {item.user.username}</h5>
                                            <h5>Address: {item.user.address}</h5>
                                            <h5>Phone Number: {item.user.phone_number}</h5>
                                            <h5>Email: {item.user.email}</h5>
                                            <table>
                                                <tr>
                                                    <th>Description</th>
                                                    <th>Amount</th>
                                                    <th>Price</th>
                                                    <th>Total</th>
                                                </tr>
                                                {
                                                    item.items.map((icon) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td>{icon.description}</td>
                                                                    <td>{icon.amount}</td>
                                                                    <td>{icon.price}</td>
                                                                    <td>{icon.total}</td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })
                                                }

                                            </table>
                                            <br />
                                            <h5>Voucher: {item.voucher}</h5>
                                            <h5>Tax: {item.tax}</h5>
                                            <h5>Total: ${item.total}</h5>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <br />
                    <button type="button" onClick={toggle} className="btnAddSub1">Cancel</button>
                </ModalBody>
            </Modal>

            <Modal isOpen={modalMakeInvoice} toggle={toggleMakeInvoice} className={modalMake}>
                <ModalHeader toggle={toggleMakeInvoice} charCode="X"></ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-12">
                            {
                                orderDetail.map((item) => {
                                    return (
                                        <div>
                                            <h5>Code: {item.id}</h5>
                                            <h5>Name: {item.user.username}</h5>
                                            <h5>Address: {item.user.address}</h5>
                                            <h5>Phone Number: {item.user.phone_number}</h5>
                                            <h5>Email: {item.user.email}</h5>
                                            <h5>Date: {convertTimeStampToNow}</h5>
                                            <table>
                                                <tr>
                                                    <th>Description</th>
                                                    <th>Amount</th>
                                                    <th>Price</th>
                                                    <th>Total</th>
                                                </tr>
                                                {
                                                    item.items.map((icon) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td>{icon.description}</td>
                                                                    <td>{icon.amount}</td>
                                                                    <td>{icon.price}</td>
                                                                    <td>{icon.total}</td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })
                                                }

                                            </table>
                                            <br />
                                            <h5>Voucher: {item.voucher}</h5>
                                            <h5>Tax: {item.tax}</h5>
                                            <h5>Total: ${item.total}</h5>
                                            <br />
                                            <button type="button" onClick={toggleMakeInvoice} className="btnAddSub1">Cancel</button>
                                            <button className="btnAddSub1"
                                                onClick={() => {
                                                    axios.put(`api/v1/orders/make_invoice/` + item.id, dataEdit).then((res) => {
                                                        if (res.statusText === "OK") {
                                                            getOrderDetail()
                                                            toggleMakeInvoice()
                                                        }
                                                    })
                                                }
                                                }
                                            >Save</button>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </ModalBody>
            </Modal>

        </div>
    );
}

export default List_Order;