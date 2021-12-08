import React from 'react';

export default function EmptyCart() {
    return (
      <div className="container mt-5 min-vh-100">
          <div className="row m-0">
              <div className="col-10 m-0 mx-auto text-center text-title pt-5">
                  <h1 className="larger-view m-0 pt-5">your cart is currently empty</h1>
              </div>
          </div>
      </div>
    );
}
