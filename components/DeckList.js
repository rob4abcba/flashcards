import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getData} from '../utils/api';

// DeckList = the primary view, seen when the app loads, is a list of created decks
// which includes the name of each deck and the number of cards.

class DeckList extends React.Component {
  // decks = getData();
  render() {
    const decks = getData();
    return (
      <View style={styles.container}>
        {Object.keys(decks).map(deck => {
          const {title, questions} = decks[deck];
          return (
          <View styles={styles.container} key={deck}>
            <Text style={styles.text}>{deck}</Text>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{questions.length}</Text>
          </View>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'red',
  },
});

export default DeckList;
