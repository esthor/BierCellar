import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {brandColor, screenBackgroundColor} from '../style/colors';
import {bigBigText} from '../style/typography';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>🍺 Cellar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: screenBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'pink',
  },
  helloText: {
    color: brandColor,
    fontSize: bigBigText,
  },
});

export default HomeScreen;
