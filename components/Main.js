import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './main/Feed'
import ProfileScreen from './main/Profile'

const EmptyScreen = () => {
    return null;
}

const Tab = createBottomTabNavigator();


export class Main extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {

        return (
            <Tab.Navigator initialRouteName="Feed">
                <Tab.Screen name="Feed" component={FeedScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26}>

                            </MaterialCommunityIcons>
                        )
                    }} />
                <Tab.Screen name="AddContainer" component={EmptyScreen}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Add")

                        }
                    })}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="camera" color={color} size={26}>

                            </MaterialCommunityIcons>
                        )
                    }} />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-circle" color={color} size={26}>

                            </MaterialCommunityIcons>
                        )
                    }} />
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({
    fetchUser
}, dispatch)
export default connect(mapStateToProps, mapDispatchProps)(Main);
