import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';
import constants from '../helpers/constants';
import { View } from 'react-native';

export default function TabBarIcon(props) {
  return (
    <Feather
      name={props.name}
      size={30}
      // style={{ marginBottom: 12, marginTop: 12 }}
      color={props.focused ? constants.primaryColor : constants.grayColor2}
    />
  );
}
