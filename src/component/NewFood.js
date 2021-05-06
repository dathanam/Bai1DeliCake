import React, { useState } from 'react';
import { Container } from 'reactstrap';
import '../component/HeaderSale.css';
import Axios from 'axios';
import { useHistory } from "react-router-dom";

function NewFood() {
    const url = " https://rn-app-bc1e7.firebaseio.com/congthuc.json"
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
    const history = useHistory();
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            doKho: data.doKho,
            idLoaiCongThuc: data.idLoaiCongThuc,
            luotXem: data.luotXem,
            moTa: data.moTa,
            ngayRa: data.ngayRa,
            ten: data.ten,
            thoiGian: data.thoiGian,
            urlHinhAnh: data.urlHinhAnh
        }).then((res) => {
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
                        <label for="usr">Tên:</label>
                        <input onChange={(e) => handle(e)} id="ten" value={data.name} type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="usr">Mô tả:</label>
                        <input onChange={(e) => handle(e)} id="moTa" value={data.name} type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="usr">Độ khó:</label>
                        <input onChange={(e) => handle(e)} id="doKho" value={data.name} type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="usr">Lượt xem:</label>
                        <input onChange={(e) => handle(e)} id="luotXem" value={data.name} type="number" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="usr">Ngày ra:</label>
                        <input onChange={(e) => handle(e)} id="ngayRa" value={data.name} type="date" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="usr">Thời gian:</label>
                        <input onChange={(e) => handle(e)} id="thoiGian" value={data.name} type="number" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="usr">id loại công thức:</label>
                        <input onChange={(e) => handle(e)} id="idLoaiCongThuc" value={data.name} type="number" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="usr">URL Ảnh:</label>
                        <input onChange={(e) => handle(e)} id="urlHinhAnh" value={data.name} type="text" class="form-control" />
                    </div>
                    <button class="btn btn-primary">Submit</button>
                </form>
            </div>
        </Container>
    );
}

export default NewFood;