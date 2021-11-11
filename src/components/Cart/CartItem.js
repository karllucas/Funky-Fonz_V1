import React from 'react';

export default function CartItem({item,value}) {
    const {
        id,
        title,
        img,
        price,
        total,
        count
    } = item;

    const {
        increment,
        decrement,
        removeItem
    } = value;

    return (
      <div className="row my-4 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
            <img 
                src={img} 
                alt="product" 
                style={{width: '5rem', height: '5rem'}} 
                className="img-fluid"
            /> 
        </div>
        <div className="col-10 mx-auto col-lg-2 my-auto">
            <span className="d-lg-none">product : </span>
            {title}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-auto">
            <span className="d-lg-none">price : </span>
            {price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-auto py-3">
            <div className="d-flex justify-content-center">
                <div>
                    <span 
                        className="btn btn-black mx-1" 
                        onClick={() => decrement(id)}
                    > 
                    - 
                    </span>
                    <span className="btn btn-black mx-1">
                        {count}
                    </span>
                    <span 
                        className="btn btn-black mx-1" 
                        onClick={() => increment(id)}
                    > 
                    + 
                    </span>
                </div>
            </div>
        </div>
        {/*  */}
        <div className="col-10 mx-auto col-lg-2 my-lg-1 py-3">
            <div className="cart-icon" onClick={() => removeItem(id)}>
                <i className="fas fa-trash"></i>
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-lg-1 mb-sm-5 py-3">
            <strong>item total: KES {total}</strong>
        </div>
      </div>
    );
}
