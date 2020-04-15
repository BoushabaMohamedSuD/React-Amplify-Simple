import React, { Component } from 'react';
import { ValidationTextFields } from '../items/test';


export class SignInHandler extends Component {
    userLogin = {
        username: "",
        password: "",
        email: ""
    };
    inputChange = (event: any) => {
        if (event.target.name == "username") {
            this.userLogin.username = event.target.value;
        } else if (event.target.name == "password") {
            this.userLogin.password = event.target.value;
        } else if (event.target.email = "email") {
            this.userLogin.email = event.target.value;
        }
        // console.log(this.userLogin);
    };
    Submite = () => {
        console.log("submit the form");
        if (this.verification()) {
            console.log("----Submit valide-----");
            console.log(this.userLogin);
        } else {
            console.log("----Submit not valide----");
        }

    }
    verification = () => {
        if (this.userLogin.username != "" && this.userLogin.password != "") {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div>
                <h1>hi mohamed boushaba</h1>
                <ValidationTextFields
                    change={this.inputChange}
                    submit={this.Submite}
                />
            </div>

        );

    }




}