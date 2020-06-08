import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import constants from '../../helpers/constants';
import { Feather } from '@expo/vector-icons';

export const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Feather name='search' size={24} color='black' />
      <View
        style={{
          marginLeft: constants.padding1,
          flex: 1,
          flexShrink: 1,
        }}
      >
        <TextInput placeholder='Search Locations, etc...'></TextInput>
      </View>
      <TouchableOpacity activeOpacity={0.5}>
        <Feather name='x' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: (constants.padding1 / 3) * 2,
    paddingLeft: constants.padding1,
    backgroundColor: 'white',
    marginVertical: constants.padding1,
    marginEnd: constants.padding1,
    borderRadius: 50,
    overflow: 'hidden',
  },
});
