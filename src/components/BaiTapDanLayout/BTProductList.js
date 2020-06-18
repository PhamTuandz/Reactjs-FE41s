import React, { Component } from 'react'
import BTProductDienThoai from './BTProductDienThoai'
import BTProductLapTop from './BTProductLapTop'
import BTProductItem from './BTProductItem'

export default class BTProductList extends Component {
    render() {
        return (
            <div className="container-fluid">
                 <BTProductDienThoai />
                 <BTProductLapTop />
            </div>
        )
    }
}
