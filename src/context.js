import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();

//Provider
class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    }

    handleGetItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = id => {
        const product = this.handleGetItem(id);
        this.setState(() => {
            return { detailProduct : product }
        })
    };
    handleAddToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.handleGetItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState( () => {
                return { 
                    products:tempProducts, 
                    cart: [...this.state.cart, product]  
                };
            }, 
            () => {
                this.addTotals();
            }
        );
    };

    handleOpenModal = id => {
        const product = this.handleGetItem(id);
        this.setState( () => {
            return {modalProduct : product, modalOpen : true}
        })
    }

    handleCloseModal = () => {
        this.setState( () => {
            return {modalOpen : false}
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.14;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    handleIncrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(
            () => { 
                return { cart: [...tempCart] };
            },
            () => {
                this.addTotals();
            }
        );
    }

    handleDecrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if (product.count === 0) {
            this.handleRemoveItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(
                () => { 
                    return { cart:[...tempCart] };
                },
                () => {
                    this.addTotals();
                }
            );
        }
    }

    handleRemoveItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter( item => item.id !== id);
        
        const index = tempProducts.indexOf(this.handleGetItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, 
        () => {
            this.addTotals();
        });
    }

    handleClearCart = () => {
        this.setState( () => {
            return {cart: []}
        }, () => {
           this.setProducts();
           this.addTotals();
        });
    }

    render() {
        return (
            <ProductContext.Provider value={{  
                ...this.state,
                handleDetail: this.handleDetail,
                handleAddToCart: this.handleAddToCart,
                openModal: this.handleOpenModal,
                closeModal: this.handleCloseModal,
                increment: this.handleIncrement,
                decrement: this.handleDecrement,
                removeItem: this.handleRemoveItem,
                clearCart: this.handleClearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

//Consumer
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};