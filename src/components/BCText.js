import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {brandColor, lightPink, white} from '../style/colors';
import {
  bigBigText,
  buttonTextSize,
  fontWeights,
  headerSize,
} from '../style/typography';

const BCText = ({textStyle, value}) => {
  return <Text style={styles[textStyle]}>{value}</Text>;
};

const styles = StyleSheet.create({
  buttonText: {
    color: white,
    fontWeight: fontWeights.heavy,
    fontSize: buttonTextSize,
  },
  header: {
    color: brandColor,
    fontSize: headerSize,
  },
});

export default BCText;
