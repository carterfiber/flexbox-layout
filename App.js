import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.topSectionText}>
            God Bless America
          </Text>
        </View>
        <View style={styles.middleSection}>
          <Text style={styles.middleSectionText}>
            AND
          </Text>
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.bottomSectionText}>
            All the Diverse People In It.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flexGrow: 2,
    backgroundColor: '#5bc2c1',
    alignItems: 'center',
    justifyContent: 'center',

  },
  middleSection: {
    flexGrow: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',

  },
  bottomSection: {
    flexGrow: 3,
    backgroundColor: '#fd909e',
    alignItems: 'center',
    justifyContent: 'center',

  },
  topSectionText: {
    fontWeight: 'bold',
    // marginTop: 50,
    // justifyContent: 'center',
  },
  middleSectionText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  bottomSectionText: {
    fontWeight: 'bold',
    // marginBottom: 30,
  },
});
