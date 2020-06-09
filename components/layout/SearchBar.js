import React, { useRef } from 'react';
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
  const field = useRef(null);
  return (
    <View style={styles.searchBar}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          field.current.focus();
        }}
      >
        <Feather name='search' size={24} color={constants.softBlackColor} />
      </TouchableOpacity>
      <View
        style={{
          marginLeft: constants.padding1,
          flex: 1,
          flexShrink: 1,
        }}
      >
        <TextInput
          ref={field}
          placeholder='Search Locations, etc...'
        ></TextInput>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          field.current.clear();
          field.current.blur();
        }}
      >
        <Feather name='x' size={24} color={constants.softBlackColor} />
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
