import React, {Component} from 'react';
import {  ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import myStore from '../redux/Store';
import {styles} from '../styles';

console.log(myStore.getState())

class MainView extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style = {styles.listView}>
                <ScrollView>
                {this.props.list.map(object=>(
                    <View>
                    <Text style={styles.listText} key = {object.mykey}>Name - {object.name} , surname -{object.surname} , number -{object.number} </Text>
                    </View>
                ))}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.list)
    return{
        list : state.list
    }
}

export default connect(mapStateToProps)(MainView);