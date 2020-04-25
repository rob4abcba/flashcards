import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class AddDeck extends React.Component {
    render(){
        return (
            <View style={styles.container} >
                <Text>AddDeck.js</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AddDeck;