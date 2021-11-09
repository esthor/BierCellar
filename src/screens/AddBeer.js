import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  brandColor,
  gray,
  lightPink,
  screenBackgroundColor,
} from '../style/colors';
import {bigBigText, inputTextSize} from '../style/typography';

import BCText from '../components/BCText';
import BCButton from '../components/BCButton';

const AddBeerForm = () => {
  const [breweryName, setBreweryName] = useState('Brewery Name');
  const [beerName, setBeerName] = useState('Beer Name');
  const {height, width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <BCText textStyle="header" value="Please add a beer" />
      <ScrollView style={[styles.inputFieldsContainer, {width: width}]}>
        <TextInput
          onChangeText={setBreweryName}
          style={styles.input}
          value={breweryName}
        />
        <TextInput
          onChangeText={setBeerName}
          style={styles.input}
          value={beerName}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <BCButton
          buttonStyle="submit"
          onPress={() =>
            console.log(
              `You have successfully logged a ${breweryName} ${beerName} `,
            )
          }>
          <BCText textStyle="buttonText" value="Add Beer" />
        </BCButton>
      </View>
    </View>
  );
};

const AddBeerScreen = () => {
  return (
    <View style={styles.container}>
      <AddBeerForm />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
  },
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
  inputFieldsContainer: {
    flex: 1,
    width: 100,
  },
  input: {
    color: gray,
    height: 40, // TODO: make this a constant, not a literal
    margin: 12, // TODO: make this a constant, not a literal
    borderWidth: 1, // TODO: make this a constant, not a literal
    borderColor: gray,
    borderRadius: 12, // TODO: make this a constant, not a literal
    padding: 10, // TODO: make this a constant, not a literal
    fontSize: inputTextSize,
  },
});

export default AddBeerScreen;
