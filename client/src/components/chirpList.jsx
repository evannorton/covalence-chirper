import React, { Component } from "react";
import Chirp from "./chirp";

class ChirpList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.props.chirps.map((chirp) => {
                        return (
                            <Chirp key={chirp.id} id={chirp.id} name={chirp.name} text={chirp.text} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ChirpList;