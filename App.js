import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Header from './myContent/Header';
import MainView from './myContent/MainView';
import {styles} from './styles';

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
      <Header/>
      <MainView/>
      </>
    )
  }
}

export default App;