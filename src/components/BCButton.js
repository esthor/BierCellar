import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {brandColor, lightPink, screenBackgroundColor} from '../style/colors';

const BCButton = ({buttonStyle, children}) => {
  return (
    <TouchableOpacity style={styles[buttonStyle]}>{children}</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submit: {
    width: 100,
    height: 40,
    backgroundColor: lightPink,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BCButton;
