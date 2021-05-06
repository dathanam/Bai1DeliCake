import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import '../component/HeaderSale.css';
import { axios } from '../component/axios';
import { useHistory } from "react-router-dom";
import Axios from 'axios';




function EditFood(props) {
    const history = useHistory();
    console.log(props)
    const url = "https://rn-app-bc1e7.firebaseio.com/congthuc/"
    const [data, setData] = useState({
        doKho: "",
        idLoaiCongThuc: "",
        luotXem: "",
        moTa: "",
        ngayRa: "",
        ten: "",
        thoiGian: "",
        urlHinhAnh: ""
    })

    // const getArr = async () => {
    //     const id = props.match.params.id
    //     const response = await axios
    //         .get("/congthuc/" + id + ".json")
    //         .catch((err) => console.log("Error: ", err));

    //     if (response && response.data) setData(response.data);
    // };



    useEffect(() => {
        const id = props.match.params.id
        axios.get("/congthuc/" + id + ".json")
            .then(res => { setData(res.data) })
            .catch((err) => console.log("Error: ", err));
    }, []);

    function submit(e) {
        e.preventDefault();
        const id = props.match.params.id
        Axios.put(url + id + ".json", data).then((res) => {
            if (res.statusText === "OK") {
                history.push("/");
            }
        })
    }

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }


    return (
        <Container>
            <div className="newfood">
                <form onSubmit={(e) => submit(e)}>
                    <div class="form-group">
                        <label for="ten">Tên:</label>
                        <input onChange={(e) => handle(e)} id="ten" value={data.ten} type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="moTa">Mô tả:</label>
                        <input onChange={(e) => handle(e)} id="moTa" value={data.moTa} type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="doKho">Độ khó:</label>
                        <input onChange={(e) => handle(e)} id="doKho" value={data.doKho} type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="luotXem">Lượt xem:</label>
                        <input onChange={(e) => handle(e)} id="luotXem" value={data.luotXem} type="number" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="ngayRa">Ngày ra:</label>
                        <input onChange={(e) => handle(e)} id="ngayRa" value={data.ngayRa} type="date" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="thoiGian">Thời gian:</label>
                        <input onChange={(e) => handle(e)} id="thoiGian" value={data.thoiGian} type="number" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="idLoaiCongThuc">id loại công thức:</label>
                        <input onChange={(e) => handle(e)} id="idLoaiCongThuc" value={data.idLoaiCongThuc} type="number" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="urlHinhAnh">URL Ảnh:</label>
                        <input onChange={(e) => handle(e)} id="urlHinhAnh" value={data.urlHinhAnh} type="text" class="form-control" />
                    </div>
                    <button class="btn btn-primary">Submit</button>
                </form>
            </div>
        </Container>
    );
}

export default EditFood;