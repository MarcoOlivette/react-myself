import React, { Component } from "react";
import Api from '../../services/api'

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
                    products.map(i => (
                        <div>
                            <h1>{i.title}</h1>
                        </div>
                    ))
                }
            </div>
        )
    }
}
