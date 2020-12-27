/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import myStore from './redux/Store'


const StartApp = () =>(
    <Provider store = {myStore}>
        <App/>
    </Provider>
)



AppRegistry.registerComponent(appName, () => StartApp);
