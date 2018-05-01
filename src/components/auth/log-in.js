import React, { Component } from 'react';
import axios from 'axios'
import {Teacher} from "../../models/teacher";
import './log-in.css'
import {Redirect} from "react-router-dom";
import {Alert} from "react-bootstrap";

class LogIn extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            redirect: false,
            success: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.signIn = this.signIn.bind(this);

    }

    render() {
        const state = this.state;

        if (!state.redirect)
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
                    {!state.success &&
                        <Alert bsStyle="danger" className={'alert'}>
                            Неправильний пароль або ім'я користувача.
                        </Alert>
                    }
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
    }

    signIn (){
        const state = this.state;
        state.success = true;
        this.setState(state);
        axios.post('http://localhost:3000/auth/sign_in', {username: state.username, password: state.password}).then(response =>{
            this.setState({
                redirect: true,
                success: true
            });
            axios.defaults.headers.common['Authorization'] = response.data.token;
            localStorage.setItem('auth', response.data.token);
            console.dir(response);
        }).catch(e =>{
            this.setState({
                redirect: false,
                success: false
            });
        })
    }
}

export default LogIn;