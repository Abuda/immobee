import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import constants from '../../helpers/constants';
import { Ionicons } from '@expo/vector-icons';
import Tag from '../layout/Tag';
import { localeAR } from '../../helpers/localeAR';

const ProductItem = ({ product }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        // height:150,
        // width:"80%",
        marginBottom: 25,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderRadius: 10,
        // padding: 10,
        // elevation: 1,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.5,
        // shadowRadius: 5,
      }}
    >
      {product.photos ? null : (
        <View
          style={{
            backgroundColor: '#E2E4EE',
            height: 160,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons name='md-images' size={72} color='#B4B5BF' />
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              top: constants.padding1,
              left: constants.padding1,
            }}
          >
            <Tag title={localeAR[product.property]} />
            <Text> </Text>
            {['apartment', 'house'].includes(product.property) && (
              <Tag title={localeAR[product.type]} />
            )}
          </View>
        </View>
      )}
      <View style={{ padding: constants.padding1 }}>
        <Text>{product.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
