import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import BCText from '../components/BCText';
import {brandColor, screenBackgroundColor} from '../style/colors';
import {headerSize} from '../style/typography';

// const dummyBeer = {breweryName: 'Upland', beerName: 'Wheat'};

// TODO: needs unique key
// const dummyData = [dummyBeer, dummyBeer, dummyBeer];

const MyBeerScreen = ({breweryName, beerName}) => {
  const {height, width} = useWindowDimensions();

  const mySpecialComputerStyleVariable = width * 1;

  const BeerItem = ({item}) => {
    return (
      <View
        style={[styles.itemContainer, {width: mySpecialComputerStyleVariable}]}>
        <BCText textStyle="buttonText" value={breweryName} />
        {/* <BCText textStyle="buttonText" value={item.breweryName} /> */}
        <BCText textStyle="buttonText" value={beerName} />
        {/* <BCText textStyle="buttonText" value={item.beerName} /> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={dummyData}
        renderItem={({item}) => <BeerItem item={item} />}
        // keyExtractor
      /> */}
      <BeerItem />
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
    fontSize: headerSize,
  },
  itemContainer: {
    // backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    height: 60, // TODO: DON'T USE STYLE LITERALS
    padding: 5, // TODO: DON'T USE STYLE LITERALS
  },
});

export default MyBeerScreen;
