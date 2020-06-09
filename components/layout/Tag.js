import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import constants from '../../helpers/constants';
import { TouchableOpacity } from 'react-native';

const Tag = ({ title }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 50,
        paddingHorizontal: 12,
        paddingVertical: 3,
      }}
    >
      <Text style={{ color: 'white' }}>{title}</Text>
    </TouchableOpacity>
  );
};

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Tag;
