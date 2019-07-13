import React, { Component } from "react";
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false
        };
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
    //this shows the date picked on the console. have to be change to main screen
    handleDatePicked = date => {
        console.log("A date has been picked:  ", date);
        this.hideDateTimePicker();
    };

    _onPressButton() {
        Alert.alert("You press the buttton")
    }

    render() {
        return (
            <View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <View style={styles.buttonContainer}>
                        <Button title="Start date:" onPress={this.showDateTimePicker} />
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDateTimePicker}
                        />
                    </View>


                    <View style={styles.buttonContainer}>
                        <Button title="End date:" onPress={this.showDateTimePicker} />
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDateTimePicker}
                        />

                    </View >

                </View>
                <View style={styles.buttonContainer}>
                    <Button title="search" onPress={this._onPressButton} />
                </View>

            </View>



        );
    }
}

export default Calendar


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 10
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});