import React, { Component, Fragment } from 'react';
import Title from './Title';
import Product from './Product'
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />

                        <div className="row">
                        <ProductConsumer>
                            {(value) => {
                                console.log(value);
                                return value.products.map( product => {
                                    return <Product
                                    key={product.id} 
                                    product={product}
                                    />
                                })
                            }}
                        </ProductConsumer>
                        </div>
                    </div>
                </div>
                <blockquote className="blockquote text-center my-5 pb-3 mx-3">
                    <p className="mb-4">Funky Phones has landed with the best smartphones on the planet</p>
                    <footer className="blockquote-footer mb-5">And there was nothing left but flipping phones<span className="blockquote-footer"></span></footer>
                </blockquote>
            </Fragment>
                // <Product />
        );
    }
}
