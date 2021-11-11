import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    console.log(value.detailProduct);
                    const { 
                        id,
                        company, 
                        img, 
                        info, 
                        price, 
                        title, 
                        inCart, 
                    } = value.detailProduct;
                    return (
                        <div className="container col-12 bg-white spacing-details">
                            {/* title */}
                            <div className="row p-lg-5">
                                <div className="col-10 mx-auto text-center text-slantd text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                {/* product image */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="product" className="img-fluid" />
                                </div>
                                {/* product image end */}
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <div className="col-12">
                                        <h2>model : {title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            <small>made by : 
                                                <span className="text-uppercase">
                                                    <strong>{company}</strong>
                                                </span>
                                            </small>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                                <small>
                                                price : <span className="px-1">kes</span>
                                                {price}
                                                </small>
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize text-dark-green font-weight-bold mt-3 mb-0">
                                            Product Details : 
                                        </p>
                                        <p className="text-muted lead">
                                            {info}
                                        </p>
                                    </div>
                                    {/* buttons */}
                                    <div className="row flex-small mx-auto mx-lg-5 justify-content-center">
                                    <Link to="/" className="p-2 mx-auto p-lg-0 col-lg-5 col-lg-6">
                                        <ButtonContainer>Back To Shop</ButtonContainer>
                                    </Link>
                                    <span className="p-2 p-lg-0 mx-auto button-padding col-lg-5">
                                        <ButtonContainer 
                                        cart
                                        disabled={ inCart ? true : false }
                                        onClick={()=> {
                                            value.handleAddToCart(id);
                                            value.openModal(id);
                                        }}
                                        >
                                            { inCart ? "In Cart" : "Add To Cart" }
                                        </ButtonContainer>
                                    </span>
                                    </div>
                                </div>
                                {/* product text */}
                            </div>
                            {/* product info end */}
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}
