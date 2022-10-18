import React, { Component } from 'react'
import { TextInput, View, Button } from 'react-native'
import firebase from 'firebase';
export class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
                console.log(result)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    render() {
        return (
            <View>
                <TextInput placeholder="name"
                    onChangeText={(name) => this.setState({ name })}></TextInput>

                <TextInput placeholder="email"
                    onChangeText={(email) => this.setState({ email })}></TextInput>

                <TextInput placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}></TextInput>

                <Button onPress={() => this.onSignUp()}
                    title="Sign Up" />
            </View>
        )
    }
}

export default Register
