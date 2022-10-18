import React, { Component } from 'react'
import {TextInput, View, Button} from 'react-native'
import firebase from 'firebase';
export class Login extends Component {

    constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',

        }
        this.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(){
        const {email, password,name} = this.state;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((result) => {
            console.log(result)
        })
        .catch((e) => {
            console.log(e)
        })
    }

    render() {
        return (
            <View>
                <TextInput placeholder="email"
                onChangeText={(email)=> this.setState({email})}></TextInput>
            
                <TextInput placeholder="password"
                secureTextEntry={true}
                onChangeText={(password)=> this.setState({password})}></TextInput>

                <Button onPress={() => this.onSignIn()}
                title="Sign In"/>
            </View>
        )
    }
}

export default Login
