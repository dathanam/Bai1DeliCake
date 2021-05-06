import React, { Component } from 'react';
import '../component/HeaderSale.css';

class Story extends Component {
    constructor() {
        super();
        this.listFace = [
            {
                "id": "1",
                "avatar": "https://i.imgur.com/8Nphyhc.png",
                "image": "https://i.imgur.com/FUiYyWG.jpeg",
                "name": "Chu Minh Quý"
            },
            {
                "id": "2",
                "avatar": "https://i.imgur.com/8Nphyhc.png",
                "image": "https://i.imgur.com/FUiYyWG.jpeg",
                "name": "Nguyễn Văn Trường"
            },
            {
                "id": "3",
                "avatar": "https://i.imgur.com/8Nphyhc.png",
                "image": "https://i.imgur.com/FUiYyWG.jpeg",
                "name": "Đạt"
            },
            {
                "id": "4",
                "avatar": "https://i.imgur.com/FUiYyWG.jpeg",
                "image": "https://i.imgur.com/FUiYyWG.jpeg",
                "name": "Sơn"
            },
            {
                "id": "5",
                "avatar": "https://i.imgur.com/vxKV8wF.jpg",
                "image": "https://i.imgur.com/FUiYyWG.jpeg",
                "name": "Lực"
            },
            {
                "id": "6",
                "avatar": "https://i.imgur.com/14bk3xg.jpg",
                "image": "https://i.imgur.com/FUiYyWG.jpeg",
                "name": "Chản"
            },
            {
                "id": "7",
                "avatar": "https://i.imgur.com/8Nphyhc.png",
                "image": "https://i.imgur.com/FUiYyWG.jpeg",
                "name": "Trang"
            }
        ]
    }
    render() {
        return (
            <div className="container">
                <div>
                    <div className="rowstory">
                        {
                            this.listFace.map((item) =>
                                <div className="col-md-2">
                                    <div>
                                        <div>
                                            <img src={item.avatar} alt='asda'></img>
                                        </div>
                                        <div>
                                            <h1 className="namenews">{item.name}</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Story;

