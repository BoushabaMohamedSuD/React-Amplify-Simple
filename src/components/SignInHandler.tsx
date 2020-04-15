import React, { Component } from 'react';
import { ValidationTextFields } from '../items/item';
import { Auth } from 'aws-amplify';


export class SignInHandler extends Component {
    userLogin = {
        username: "",
        password: "",
        email: ""
    };
    inputChange = (event: any) => {
        if (event.target.name == "username") {
            // this.userLogin.username = event.target.value;
        } else if (event.target.name == "password") {
            this.userLogin.password = event.target.value;
        } else if (event.target.name = "email") {
            this.userLogin.username = event.target.value;
        }
        console.log(this.userLogin);
    };
    Submite = () => {
        console.log("submit the form");
        if (this.verification()) {
            console.log("----Submit valide-----");
            console.log(this.userLogin);
            Auth.signIn(this.userLogin)
                .then(user => {
                    console.log("getting response");
                    console.log(user)
                })
                .catch(err => console.log(err))

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
    getcurrentsession = () => {
        Auth.currentSession().then(user => console.log(user))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>hi mohamed boushaba</h1>
                <ValidationTextFields
                    change={this.inputChange}
                    submit={this.Submite}
                    session={this.getcurrentsession}
                />
            </div>

        );

    }




}