import React, { Component, Fragment } from 'react';
const Header = () => {
    return (
        <div className="container-fluid" >
            <div id="header" className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <h1 className="d-flex align-items-center h-100">
                        Chirper&nbsp;<span role="img" aria-label="Bird">🐦</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}
export default Header;