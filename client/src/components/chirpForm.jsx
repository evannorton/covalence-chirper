import React, { Component } from "react";

class ChirpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            text: ""
        };
    }

    handleNameChange(name) {
        this.setState({ name })
    }

    handleTextChange(text) {
        this.setState({ text });
    }

    render() {
        return (
            <div id="chirp-form" className="container-fluid">
                <div className="row justify-content-center">
                    <div id="chirp-form-card" className="card">
                        <form className="form-group">
                            <label
                                htmlFor="chirp-textarea"
                            >
                                <b>Create a Chirp:</b>
                            </label>
                            <br />
                            <input
                                value={this.state.name}
                                onChange={(event) => this.handleNameChange(event.target.value)}
                                id="chirp-name"
                                className="form-control"
                                placeholder="Username"
                            />
                            <input
                                value={this.state.text}
                                onChange={(event) => this.handleTextChange(event.target.value)}
                                id="chirp-textarea"
                                className="form-control"
                                placeholder="What's on your mind?"
                            />
                            <button
                                onClick={() => { this.props.postChirp(this.state.name, this.state.text) }}
                                type="button"
                                id="chirp-button"
                                className="btn btn-primary btn-lg btn-block"
                            >
                                Post
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChirpForm;