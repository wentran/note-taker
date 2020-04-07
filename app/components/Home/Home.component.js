import React, { Component } from 'react';
import { TextInput, View ,StyleSheet,Text} from 'react-native';
import TextArea from '../TextArea/TextArea.component';

class Home extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text> Please enter your note here</Text>
                <TextArea />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
        margin: 30,
        alignItems: 'center'
    }
})

export default Home;
