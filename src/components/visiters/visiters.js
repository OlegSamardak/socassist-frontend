import React, {Component} from 'react';
import {Col} from "react-bootstrap";
import axios from "axios";

class Visiters extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Col>

                </Col>
            </div>

        )
    }

    componentDidMount(){
        axios.get('http://localhost:3000/teachers').then(response =>{
            console.log(response);
        })
    }
}

export default Visiters;