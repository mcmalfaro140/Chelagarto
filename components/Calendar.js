import React, { Component } from "react";
import { Button, View } from "react-native";
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

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
    };

    render() {
        return (
            <>
                <Button title="Start date:" onPress={this.showDateTimePicker} />
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
            </>

        );
    }
}

export default Calendar