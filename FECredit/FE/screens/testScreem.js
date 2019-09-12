import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, DatePickerAndroid } from 'react-native';

export default class testScreem extends React.Component {
    constructor() {
        super();
        this.state = {
            dateee: new Date(),
            // dateText: 'Pick a date'
            date: 0,
            mouthh: 0,
            yearr: 0,
        }
        this.showDatePicker.bind(this);
    }
    showDatePicker = async (options) => {
        try {
          const {action, year, month, day} = await DatePickerAndroid.open(options);
          if (action !== DatePickerAndroid.dismissedAction) {
            // let date = new Date(year, month, day);
            // let newState = {};
            // newState['date'] = date;
            // newState['dateText'] = date.toLocaleDateString("ca-ES");
            // this.setState(newState);
            await this.setState({
                date: day,
                mouthh: month + 1,
                yearr: year,
            })
          }
        } catch ({code, message}) {
          console.warn('error ', code, message);
        }
        
    };
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.showDatePicker({dateee: this.state.dateee})}>
                    <Text>Clicl here</Text>
                </TouchableOpacity>
                <Text>{this.state.date}//{this.state.mouthh}//{this.state.yearr}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});