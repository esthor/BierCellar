import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import {brandColor, lightPink, screenBackgroundColor} from '../style/colors';
import {bigBigText} from '../style/typography';

import BCText from '../components/BCText';
import BCButton from '../components/BCButton';

const AddBeerScreen = () => {
  const [breweryName, setBreweryName] = useState('Brewery Name');
  const [beerName, setBeerName] = useState('Beer Name');
  const [year, setYear] = useState('Year');
  const [price, setPrice] = useState('Price');
  const [notes, setNotes] = useState('Notes');
  return (
    <View style={styles.container}>
      <BCText textStyle="header" value="Please add a beer" />
      <TextInput onChangeText={setBreweryName} value={breweryName} />
      <TextInput onChangeText={setBeerName} value={beerName} />
      <TextInput onChangeText={setYear} value={year} keyboardType="numeric" />
      <TextInput
        onChangeText={setPrice}
        value={price}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <TextInput onChangeText={setNotes} value={notes} />
      <BCButton
        buttonStyle="submit"
        onPress={() =>
          console.log(
            `You have successfully logged a ${year} ${breweryName} ${beerName} `,
          )
        }>
        <BCText textStyle="buttonText" value="Add Beer" />
      </BCButton>
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

export default AddBeerScreen;
