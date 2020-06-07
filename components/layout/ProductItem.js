import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
  return (
    <View>
      <Text>{product.id}</Text>
      <Text>{product.title}</Text>
    </View>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
