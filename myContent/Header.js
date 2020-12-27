import React, {Component} from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import {adding,clear} from '../redux/Action';
import {styles} from '../styles';
class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.forInput}
                placeholder="name"
                onChangeText = {(text) => this.name1 = text}/>
                <TextInput style={styles.forInput}
                placeholder="surname"
                onChangeText = {(text) => this.surname1 = text}/>
                <TextInput style={styles.forInput}
                placeholder="number (optional)"
                onChangeText = {(text)=> this.number1 = text}/>
                <View style = {styles.buttonView}>
                    <TouchableOpacity style={styles.forButton}
                    onPress = {()=> this.props.add(this.name1,this.surname1,this.number1)}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.forButton}
                    onPress = {()=> this.props.clear()}>
                        <Text style={styles.buttonText}>Clear</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        add: (name,surname,number)=>dispatch(adding(name,surname,number)),
        clear: ()=>dispatch(clear()), dispatch
    }

}

export default connect(null,mapDispatchToProps)(Header);