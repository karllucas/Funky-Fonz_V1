import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                { (value) => {
                    const {modalOpen, closeModal} = value;
                    const {
                        img,
                        title,
                        price
                    } = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div 
                                        id ="modal" 
                                        className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5>Item added to the cart</h5>
                                            <img src={img} alt="product" className="img-fluid" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : KES {price}</h5>
                                            <div className="card-header">
                                            <Link to="/">
                                                <ButtonContainer className="m-1 col-12" onClick={ () => closeModal() }>
                                                <span className="hide-view-small">Shop</span>
                                                    <span className="px-1">
                                                    <i className="fas fa-cart-plus" />
                                                    </span>
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer className="m-1 col-12 overflow-hide" onClick={ () => closeModal() }>
                                                    <span className="hide-view-small">Cart</span> 
                                                    <span className="px-2">
                                                    <i className="fa fa-arrow-right" />
                                                    </span>
                                                </ButtonContainer>
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>  
                        );
                    };
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
#modal {
    background: var(--mainWhite);
}
`