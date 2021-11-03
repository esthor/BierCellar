import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {brandColor, screenBackgroundColor} from '../style/colors';
import {bigBigText} from '../style/typography';

const MyBeerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>All My Beers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: screenBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    color: brandColor,
    fontSize: bigBigText,
  },
});

export default MyBeerScreen;
