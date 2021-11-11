import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {
        const {
            id,
            title,
            img,
            price,
            inCart
        } = this.props.product;
        return (
            <ProductWrapper 
                id={id} 
                className="col-9 mx-auto my-3 col-md-6 col-lg-3"
            >
                {/* Product Card */}
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            // Image Container
                            <div 
                                className="img-container p-5" 
                                onClick={ () => {
                                    value.handleDetail(id)
                                }}
                            >
                                {/* Image Start */}
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top" />
                                </Link>
                                {/* Image End */}
                                {/* Add To Cart Button */}
                                <button 
                                    className="card-btn" 
                                    disabled={ inCart ? true:false } 
                                    onClick={ () => {
                                        value.handleAddToCart(id);
                                        value.openModal(id);
                                    }}
                                >
                                    { inCart ? ( 
                                        <p className="text-capitalize mb-0" disabled>
                                            in cart
                                        </p> 
                                    ) : ( 
                                        <i className="fas fa-cart-plus" /> 
                                    )}
                                </button>
                                {/* Add To Cart Button End */}
                            </div>
                            // Image Container End
                        )}
                    </ProductConsumer>
                    {/* Card Footer */}
                    <div className="card-body card-footer d-flex justfy-content-end font-weight-bold">
                        <p className="align-self-center card-text h6 m-0 text-capitalize">
                            <small>
                                {title}
                            </small>
                        </p>
                        <div className="card-body">
                            <h6 className="list-group list-group-flush letter-spacing mb-0 py-auto text-blue">
                                <strong>
                                    <span className="p-1 text-black">kes</span>
                                    {price}
                                </strong>
                            </h6> 
                        </div>
                    </div>
                    {/* Card Footer End */}
                </div>
                {/* Product Card End */} 
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
    }).isRequired
};

const ProductWrapper = styled.div`
.card {
    border-color: transparent;
    transition: all 0.4s linear;
}
.card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.2s linear;
}
&:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 8px 2px 8px 2px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
        background: var(--mainGreen);
    }
}
.img-container {
    position: relative;
    overflow: hidden;
}
.card-img-top {
    transition: all 0.8s linear;
}
.img-container:hover .card-img-top {
    transform: scale(1.2);
}
.card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.3rem 0.5rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 4px 18px;
    transform: translate(100%, 100%);
    transition: all 0.4s linear; 
}
.img-container:hover .card-btn {
    transform: translate(0, 0);
}
.card-btn:hover {
    color: var(--mainGreen);
    cursor: pointer;
}
`;