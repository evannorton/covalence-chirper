import React, { Component, Fragment } from "react";
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
                this.setState({
                    id: this.props.match.params.id,
                    name: chirp.name,
                    text: chirp.text
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    handleNameChange(event) {
        this.setState({ newName: event.target.value });
    }

    handleTextChange(event) {
        this.setState({ newText: event.target.value });
    }

    editChirp() {
        $('#myModal').modal();
        this.setState({ newName: this.state.name })
        this.setState({ newText: this.state.text })
    }

    updateChirp(name, text) {
        fetch(`/api/chirps/${this.state.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                text
            })
        }).then(() => {
            window.location.reload()
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteChirp(id) {
        fetch(`/api/chirps/${this.state.id}`, {
            method: "DELETE",
        }).then(() => {
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <Fragment>
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit your Chirp:</h5>
                                <Link
                                    to={`/chirps/${this.state.id}`}>
                                    <button type="button" className="close" onClick={() => { window.location.reload() }} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="modal-body">
                                <input type="text" value={this.state.newName} onChange={(value) => { this.handleNameChange(value) }} name="newName" id="newName" cols="60" rows="1" />
                            </div>
                            <div className="modal-body">
                                <textarea value={this.state.newText} onChange={(value) => { this.handleTextChange(value) }} name="newText" id="newText" cols="60" rows="10"></textarea>
                            </div>
                            <div className="modal-footer">
                                <Link
                                    to={`/chirps/${this.state.id}`}>
                                    <button type="button" className="btn btn-secondary" onClick={() => { window.location.reload() }}>Close</button>
                                </Link>
                                <Link
                                    to={`/chirps/${this.state.id}`}>
                                    <button
                                        onClick={() => { this.updateChirp($("#newName").val(), $("#newText").val()) }}
                                        id="submitChanges"
                                        type="button"
                                        className="btn btn-primary"
                                    >
                                        Update Chirp
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

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
                                        to={`/chirps/${this.state.id}/edit`}>
                                        <img
                                            onClick={() => { this.editChirp(this.state.id) }}
                                            className="icon-img"
                                            src="https://image.flaticon.com/icons/svg/61/61456.svg"
                                        />
                                    </Link>
                                    <Link
                                        to={"/"}>
                                        <img
                                            onClick={() => { this.deleteChirp(this.state.id) }}
                                            className="icon-img"
                                            src="https://image.flaticon.com/icons/png/128/61/61848.png"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }

}

export default SingleChirp;