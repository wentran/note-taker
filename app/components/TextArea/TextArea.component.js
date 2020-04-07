import React, { Component, useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

class TextArea extends Component {
    state = {
        text : ''
    };
    render() {
        console.log(this.state.text)
        const {...extraProps} = this.props;
        return (
            <TextInput
                {...extraProps}
                style={[styles.textArea, extraProps.style]}
                multiline = {true}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
        );
    }
}

const styles = StyleSheet.create({
    textArea: {
        width: 200,
        height:100,
        borderColor: 'gray',
        borderWidth: 1
    }
});
export default TextArea;
