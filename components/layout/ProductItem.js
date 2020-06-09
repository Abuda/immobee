import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import constants from '../../helpers/constants';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Tag from '../layout/Tag';
import { localeAR } from '../../helpers/localeAR';

const ProductItem = ({ product }) => {
  return (
    // PARENT VIEW
    <View>
      {/* FAV BTN */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: constants.padding1,
          right: constants.padding1,
          zIndex: 2,
        }}
      >
        <View>
          <AntDesign name='star' size={29} color='white' />
        </View>
        <View style={{ position: 'absolute', right: 3, top: 3 }}>
          <AntDesign name='star' size={23} color={constants.grayColor1} />
        </View>
      </TouchableOpacity>
      {/* END FAV BTN */}
      {/* TAGS TOUCHABLEOPACITY  */}
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: constants.padding1,
          left: constants.padding1,
          zIndex: 2,
        }}
      >
        <Tag title={localeAR[product.property]} />
        <Text> </Text>
        {['apartment', 'house'].includes(product.property) && (
          <Tag title={localeAR[product.type]} />
        )}
      </View>
      {/* END TAGS */}

      {/* ITEM TOUCHABLEOPACITY */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
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
              height: 180,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Ionicons name='md-images' size={72} color='#B4B5BF' />
          </View>
        )}
        {/* CARD BOTTOM */}
        <View style={{ padding: constants.padding1 }}>
          {/* FIRST LINE */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, color: constants.softBlackColor }}>
              {constants.currency}
              {product.type == 'rent'
                ? constants.formatNumberWithCommas(product.rent)
                : constants.formatNumberWithCommas(product.price)}
            </Text>
            {product.type == 'rent' && (
              <Text
                style={{
                  fontSize: 16,
                  color: constants.grayColor1,
                  paddingStart: 5,
                }}
              >
                ({localeAR[product.rent_type]})
              </Text>
            )}
          </View>
          {/* END FIRST LINE */}
          {/* SECOND LINE */}
          <Text
            style={{
              fontSize: 16,
              color: constants.grayColor1,
              paddingBottom: (constants.padding1 * 2) / 3,
            }}
          >
            {product.street_and_house_no_visible &&
              product.house_no &&
              product.house_no + ' '}
            {product.street_and_house_no_visible &&
              product.street &&
              product.street + ', '}
            {product.division && product.division + ', '}
            {product.state && product.state + ', '}
            {product.country && product.country}
          </Text>
          {/* END SECOND LINE */}
          {/* THIRD LINE */}
          <View style={{ flexDirection: 'row' }}>
            {/* AREA DIV */}
            {['house', 'apartment', 'room'].includes(product.property) && (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginEnd: constants.padding1 * 2,
                }}
              >
                <Text style={{ fontSize: 16, color: constants.grayColor1 }}>
                  {localeAR['area']}
                </Text>
                <Text style={{ fontSize: 22 }}>
                  {constants.formatNumberWithCommas(product.area) +
                    constants.areaAbbr}
                </Text>
              </View>
            )}
            {/* END AREA DIV */}
            {/* ROOMS DIV */}
            {['house', 'apartment'].includes(product.property) && (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginEnd: constants.padding1 * 2,
                }}
              >
                <Text style={{ fontSize: 16, color: constants.grayColor1 }}>
                  {localeAR['rooms']}
                </Text>
                <Text style={{ fontSize: 22 }}>{product.rooms}</Text>
              </View>
            )}
            {/* END ROOMS DIV */}
            {/* DEPOSIT DIV */}
            {['room', 'bed'].includes(product.property) ||
              (['apartment', 'house'].includes(product.property) &&
                ['rent'].includes(product.type) && (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginEnd: constants.padding1 * 2,
                    }}
                  >
                    <Text style={{ fontSize: 16, color: constants.grayColor1 }}>
                      {localeAR['deposit']}
                    </Text>
                    <Text style={{ fontSize: 22 }}>
                      {constants.currency +
                        constants.formatNumberWithCommas(product.deposit)}
                    </Text>
                  </View>
                ))}
            {/* END DEPOSIT DIV */}
          </View>
          {/* END THIRD LINE */}
        </View>
        {/* END CARD BOTTOM */}
      </TouchableOpacity>
      {/* END ITEM TOUCHABLEOPACITY */}
    </View>
    // END PARENTVIEW
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
