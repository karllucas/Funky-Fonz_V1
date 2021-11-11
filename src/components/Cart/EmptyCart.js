import React from 'react';

export default function EmptyCart() {
    return (
      <div className="container my-5">
          <div className="row">
              <div className="col-10 mx-auto small-padding text-center text-title">
                  <h1 className="larger-view">your cart is currently empty</h1>
              </div>
          </div>
      </div>
    );
}
