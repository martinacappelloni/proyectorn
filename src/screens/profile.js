import React, {Component} from 'react'
import {Text, TouchableOpacity, View, StyleSheet, Image, ActivityIndicator, FlatList, TextInput} from 'react-native'

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            // userData: this.props.userData,
        }
    }

    render(){
        console.log(this.props.userData)
        return(
            <View>
                <View>
                    <Text>Email registrado: {this.props.userData.email}</Text>
                    {/* <Text>User registrado: {this.props.userData.user}</Text> */}
                    {/* <Text>Usuario creado: {this.props.userData.metadata.creationTime}</Text> */}
                    <Text>Ultimo login: {this.props.userData.metadata.lastSignInTime}</Text>
                    <TouchableOpacity style={styles.touchable} onPress={() => this.props.logout(this.state.email, this.state.password)} > 
                        <Text style={styles.text}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 10,
        marginTop: 10,
    },
    field: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#ccc',
        borderRadius: 6,
        marginVertical: 10,
    },
    touchable: {
        backgroundColor: '#28a745',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#28a745',
    },
    text: {
        color: '#fff'
    }
})

export default Profile