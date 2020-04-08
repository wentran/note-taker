import React, { Component } from 'react';
import { TextInput, Keyboard, SafeAreaView,View ,StyleSheet,Button, Text} from 'react-native';
import TextArea from '../TextArea/TextArea.component';
import theme from '../../style/theme.style';
import {headingText, textInput} from "../../style/common.style";

class Home extends Component {
    state = {
        text : '',
        title: '' // adding the state here temporarily for illustration purposes
    };

    setTitle = (title) => this.setState({title});

    setText = (text) => this.setState({text});

    render() {

        const {navigation} = this.props;
        return(
            <SafeAreaView style={styles.container}>

                <Text style={styles.textAreaTitle}> Note Title</Text>
                <TextInput style={styles.titleTextInput}
                           onChangText={this.setTitle}
                           defaultValue={this.state.title}/>
                <Button
                    title="Go to About Screen"
                    onPress={() => navigation.navigate('About')}
                />
                <Text style={styles.textAreaTitle}> Please enter your note here</Text>
                    <TextArea style={styles.textArea}
                              ext={this.state.text}
                              onTextChange={this.setText}
                                onBlur={Keyboard.dismiss}/>

                <View style={styles.bottomBarWrapper}>
                    <Text style={styles.saveBtn}> Save </Text>
                    <Text style={styles.characterCount}> {this.state.text.length} characters </Text>

                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: theme.CONTAINER_PADDING,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    titleHeading: {
        ...headingText
    },
    textAreaTitle: {
        ...headingText,
        fontWeight: theme.FONT_WEIGHT_LIGHT,
        fontStyle: 'italic'
    },
    textArea: {
        flex: 1,
        padding: theme.CONTAINER_PADDING,
        alignSelf: 'stretch',
        overflow: 'scroll',
        backgroundColor: theme.BACKGROUND_COLOR_LIGHT
    },
    titleTextInput: {
        ...textInput,
        flex: 1
    },
    bottomBarWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    saveBtn: {
        padding: 10,
        fontSize: theme.FONT_SIZE_SMALL
    },
    characterCount: {
        padding: 10,
        fontSize: theme.FONT_SIZE_SMALL
    }
});

export default Home;
