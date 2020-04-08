import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import theme from '../../style/theme.style';
import PropTypes from 'prop-types';

class TextArea extends Component {
    static propTypes = {
        text: PropTypes.string,
        onTextChange: PropTypes.func
    };

    render() {
        const {text, onTextChange, ...extraProps} = this.props;
        return (
            <TextInput
                {...extraProps}
                style={[styles.textArea, extraProps.style]}
                multiline = {true}
                onChangeText={(text) => onTextChange(text)}
                value={text}
            />
        );
    }
}

const styles = StyleSheet.create({
    textArea: {
        width: 200,
        height:100,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_LIGHT
    }
});
export default TextArea;
