import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import AppNavigator from './navigation/AppNavigator';


//A very simple reducer

function setName(state = '', action) {
  switch ( action.type ){
    case 'setName': 
      return  state = action.value;
    default: return state;
  }
}
function setGioiTinh(state = '', action) {
  switch ( action.type ){
    case 'setGioiTinh': 
      return  state = action.value;
    default: return state;
  }
}
function setCMND(state = '', action) {
  switch ( action.type ){
    case 'setCMND': 
      return  state = action.value;
    default: return state;
  }
}
function setNgaySinh(state = '', action) {
  switch ( action.type ){
    case 'setNgaySinh': 
      return  state = action.value;
    default: return state;
  }
}
function setMoney(state = '', action) {
  switch ( action.type ){
    case 'setMoney': 
      return  state = action.value;
    default: return state;
  }
}
function setMounth(state = '', action) {
  switch ( action.type ){
    case 'setMounth': 
      return  state = action.value;
    default: return state;
  }
}

// A very simple store
let store = createStore(combineReducers({ 
  name: setName,
  GioiTinh: setGioiTinh,
  CMND: setCMND,
  NgaySinh: setNgaySinh,
  Money: setMoney,
  Mounth: setMounth,
}));

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
