import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {brandColor} from '../style/colors';
import {bigBigText, headerSize} from '../style/typography';

const BCTextInput = ({textStyle, value}) => {
  return <TextInput style={styles[textStyle]}>{value}</TextInput>;
};

const styles = StyleSheet.create({
  header: {
    color: brandColor,
    fontSize: headerSize,
  },
});

export default BCTextInput;
