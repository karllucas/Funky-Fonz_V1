import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid">
                <div className="row bg-light">
                    <div className="mx-auto text-center py-5 text-bright-blue">&copy;Funky Phones All Rights Reserved</div>
                </div>
            </footer>
        );
    }
}