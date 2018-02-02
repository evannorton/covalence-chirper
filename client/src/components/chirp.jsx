import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Chirp extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center col-12">
                <div className="card chirp">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-2 d-flex align-items-center">
                                <img className="w-100" src="https://raw.githubusercontent.com/Infernus101/ProfileUI/f51a728fa75305399f77c991ebdfe2d32cb433c3/icon.png" alt="" />
                            </div>
                            <div className="d-flex justify-content-center col-2">
                                <p className="chirp-text d-flex align-items-center h-100"><b>{this.props.name}</b></p>
                            </div>
                            <div className="col-6">
                                <p className="chirp-text d-flex align-items-center h-100">{this.props.text}</p>
                            </div>
                            <div className="col-2 d-flex align-items-end">
                                <Link to={"chirps/" + this.props.id}><p className="details-text">See details</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Chirp;