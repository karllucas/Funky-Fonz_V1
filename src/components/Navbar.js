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
                <nav className="navbar navbar-expand-lg w-100 d-flex justify-content-between">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand col-6">
                        <img src={logo} alt="Funky Phones" className="brand-logo navbar-brand"/>
                        <img src={mobileLogo} alt="Funky Phones" className="mobile-brand-logo navbar-brand"/>
                    </Link>

                    <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-6" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link to="/cart" className="nav-link my-auto" >
                            <ButtonContainer>
                                <span className="mr-2">
                                <i className="fas fa-cart-plus" />
                                </span>
                                {' '}
                                my cart
                            </ButtonContainer>
                        </Link>
                        <Link to="/" className="nav-link active my-auto" aria-current="page">
                            Products
                        </Link>
                        <a className="nav-link my-auto" href="/">
                            Pricing
                        </a>
                        <a className="nav-link disabled my-auto">
                            Disabled
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