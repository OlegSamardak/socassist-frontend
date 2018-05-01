import React, { Component } from 'react';
import axios from 'axios'
import {Teacher} from "../../models/teacher";
import './log-in.css'
import {Redirect} from "react-router-dom";

class LogIn extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.signIn = this.signIn.bind(this);

    }

    render() {
        const { redirect } = this.state;

        if (!redirect)
        return (
            <div>
                <div className={'form'}>
                    <input
                        type={'text'}
                        name={'username'}
                           onChange={ this.handleChange}
                           placeholder={`Ім'я користувача`}
                           className={'form-control'}/>
                    <input
                        type={'password'}
                        name={'password'}
                        placeholder={`Пароль`}
                        onChange= {this.handleChange}
                        className={'form-control'}/>
                    <button onClick={this.signIn} className={'btn btn-success'}>Увійти</button>
                </div>
            </div>
        );
        else
            return (
                <Redirect to='/'/>
            )
    }

    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    componentDidMount(){
        axios.get('http://localhost:3000/teachers').then(res => {
            console.log(res.data)
        });
    }

    signIn (){
        axios.post('http://localhost:3000/auth/sign_in', this.state).then(response =>{
            this.setState({
                redirect: true,
            });
            console.dir(response);
        })
    }
}

export default LogIn;