import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle'
import {Link} from 'react-router-dom';
import logo from '../new-default-logo.png';
import mobileLogo from '../default-mobile-logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-custom navbar-expand-sm navbar-dark px-sm-5">
                <nav className="navbar navbar-expand-lg w-100">
                <div className="container medium-view">
                    <Link to='/' className="navbar-brand col-md-auto col-8">
                        <img src={logo} alt="Funky Phones" className="brand-logo navbar-brand "/>
                        <img src={mobileLogo} alt="Funky Phones" className="col-md-auto mobile-brand-logo navbar-brand mobile-link-margin"/>
                    </Link>

                    <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/cart" className="nav-link my-auto col-md-auto" >
                            <ButtonContainer>
                                <span className="mr-2">
                                <i className="fas fa-cart-plus" />
                                </span>
                                {' '}
                                my cart
                            </ButtonContainer>
                        </Link>
                        <Link to="/" className="nav-link active my-auto mobile-link-margin" aria-current="page">
                            Products
                        </Link>
                        <a className="nav-link my-auto mobile-link-margin" href="/">
                            About
                        </a>
                        <a className="nav-link disabled my-auto mobile-link-margin" href="/">
                            Contact
                        </a>
                    </div>
                    </div>
                </div>
                </nav>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link {
    color: var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize;
}
`