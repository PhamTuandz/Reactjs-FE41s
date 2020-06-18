import React, { Component } from 'react'

export default class DataBinding extends Component {
    // Phương thức renderImg do mình tạo ra
    // renderImg = () =>{

    // }
    hocVien  = {
        ma:1,
        hoTen:'Tuan',
        hinhAnh: 'https://picsum.photos/200/300'
    }
    renderImg(){
       return <img src="https://picsum.photos/200/300" alt=""/>
    }

    //Phương thức render của React Component
    render() {
        let title = 'Tuan Pham';
        return (
            <div>
                <div classname="container">
                    <div className="card text-left">
                        <img className="card-img-top" src={this.hocVien.hinhAnh} width='auto' height='auto' />
                        <div className="card-body">
                        <h4 className="card-title">{this.hocVien.hoTen}</h4>
                        </div>
                    </div>
                </div>
                {/* Binding biến */}
                <h1>{title}</h1>
                <input value={title}></input>
                {/* Binding phương thức  */}
                {this.renderImg()}
            </div>
        )
    }
}
