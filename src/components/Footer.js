import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer  className="d-flex flex-column min-vh-100">
                <div className="row bg-light mt-auto">
                    <div className="mx-auto text-center py-5 m-0 text-bright-blue">&copy;Funky Phones All Rights Reserved</div>
                </div>
            </footer>
        );
    }
}