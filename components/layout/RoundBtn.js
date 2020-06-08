import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import constants from '../../helpers/constants';

export const RoundBtn = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        backgroundColor: constants.primaryColor,
        borderRadius: 100,
        padding: (constants.padding1 / 3) * 2,
      }}
    >
      <Octicons name='settings' size={24} color='white' />
    </TouchableOpacity>
  );
};
