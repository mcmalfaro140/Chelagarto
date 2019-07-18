import React, { Component } from "react";
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            startDate: 'Start Date:',
            endDate: 'End Date:'
            
        };
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
    //this shows the date picked on the console. have to be change to main screen
    handleDatePickedStart = date => {
        
        this.state.endDate = date.toDateString();
        this.hideDateTimePicker();
    };
    handleDatePickedEnds = date => {
        this.state.startDate = date.toDateString(),
        this.hideDateTimePicker();
    };

    _onPressButton() {
        Alert.alert("You press the buttton")
    }

    render() {
        
        return (
            <View style={styles.alternativeLayoutButtonContainer}>
               
                    <View style={styles.buttonContainer} >
                        <Button title={this.state.startDate} onPress={this.showDateTimePicker} />
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePickedStart}
                            onCancel={this.hideDateTimePicker}
                        />
                    </View>


                    <View style={styles.buttonContainer}>
                        <Button title={this.state.endDate} onPress={this.showDateTimePicker} />
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePickedEnds}
                            onCancel={this.hideDateTimePicker}
                        />

                    </View >

            </View>



        );
    }
}

export default Calendar


const styles = StyleSheet.create({
    container: {
        marginTop: '0%',
        backgroundColor: 'white'
    },
    buttonContainer: {
        margin: 5,
        
    },
    alternativeLayoutButtonContainer: {
        margin: '0%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});