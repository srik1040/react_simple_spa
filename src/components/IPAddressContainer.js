import React, { Component } from 'react'
import IPAddress from './IPAddress';

var xhr;

export default class IPAddressContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            ip_address: "..."
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json?token=2277ce4bac0347", true);
        xhr.send();

        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            this.setState({
                ip_address: response.ip
            });
        }
    }

    render() {
        return (
            <div><IPAddress ip={this.state.ip_address} /></div>
        );
    }
}