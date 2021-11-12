import React from 'react';

export default function CartColumns() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
              <div className="col-10 mx-auto col-lg-2">
                  <p className="h6 text-uppercase">
                      products
                  </p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="h6 text-uppercase">
                      name of product
                  </p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="h6 text-uppercase">
                      price in $
                  </p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="h6 text-uppercase">
                      quantitiy
                  </p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="h6 text-uppercase">
                      remove
                  </p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="h6 text-uppercase">
                      total
                  </p>
              </div>
          </div>
      </div>
    );
}