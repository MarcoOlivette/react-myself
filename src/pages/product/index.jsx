import React, { Component } from "react";
import Api from '../../services/api'
import {Link}  from 'react-router-dom'

export default class Main extends Component{
    state = {
        products : []
    }

    componentDidMount(){
        this.listProducts();
    }

    listProducts = async () => {
        const response = await Api.get(`/products`);
        this.setState({
            products: response.data.docs
        })
    }

    render () {
        const {products} = this.state;
        return (
            <div className="product-list">
                {
                    products.map(product => (
                        <div key={product._id}>
                            <h1>{product.title}</h1>
                            <Link to={`/products/${product._id}`}> Acessar</Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}
