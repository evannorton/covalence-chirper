import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "isomorphic-fetch";
import "es6-promise";

class SingleChirp extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        fetch(`/api/chirps/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(chirp => {
                console.log(chirp);
                this.setState(chirp);
            });
    }

    deleteChirp(id) {
        fetch(`/api/chirps/${this.props.match.params.id}`, {
            method: "DELETE",
        }).then(() => {
            console.log("sucess");
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="chirp-single d-flex justify-content-center col-12">
                <div className="card w-75">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-2 d-flex align-items-center">
                                <img className="w-100" src="https://raw.githubusercontent.com/Infernus101/ProfileUI/f51a728fa75305399f77c991ebdfe2d32cb433c3/icon.png" alt="" />
                            </div>
                            <div className="d-flex justify-content-center col-2">
                                <p className="d-flex single-text align-items-center h-100"><b>{this.state.name}</b></p>
                            </div>
                            <div className="col-6">
                                <p className="d-flex single-text align-items-center h-100">{this.state.text}</p>
                            </div>
                            <div className="col-2 d-flex justify-content-end align-items-start">
                                <Link
                                    to={"/"}>
                                    <img
                                        onClick={() => { this.deleteChirp(this.state.id) }}
                                        className="delete-img"
                                        src="https://image.flaticon.com/icons/png/128/61/61848.png"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default SingleChirp;