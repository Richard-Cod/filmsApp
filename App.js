import React from 'react';
import {StyleSheet,View,FlatList,Text} from 'react-native';
import Search from './components/Search';

import data from './helpers/filmsData'

export default function App() {

  return (
    <View>
      <Search />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*

*/
