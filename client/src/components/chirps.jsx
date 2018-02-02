import React, { Component } from 'react';
import ChirpForm from './chirpForm';
import ChirpList from './chirpList';

class Chirps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: []
        };
    }

    componentDidMount() {
        this.getChirps();
    }

    getChirps() {
        fetch('/api/chirps/')
            .then((response) => {
                return response.json();
            }).then((chirps) => {
                let keys = Object.keys(chirps);
                let chirpsArray = [];

                for (let key of keys) {
                    if (key !== 'nextid') {
                        chirpsArray.unshift({
                            name: chirps[key].name,
                            text: chirps[key].text,
                            id: key
                        });
                    }
                }

                this.setState({
                    chirps: chirpsArray
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    addChirp(name, text) {
        fetch('/api/chirps/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                text
            })
        }).then(() => {
            this.getChirps();
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <ChirpForm postChirp={(name, text) => { this.addChirp(name, text); }} />
                <ChirpList chirps={this.state.chirps} />
            </div>
        );
    }
}

export default Chirps;
