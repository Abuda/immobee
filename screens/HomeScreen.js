import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import ProductItem from '../components/layout/ProductItem';
import { useSafeArea } from 'react-native-safe-area-context';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import { connect } from 'react-redux';
import { getProducts } from '../actions/productActions';
import PropTypes from 'prop-types';
import { SearchBar } from '../components/layout/SearchBar';
import constants from '../helpers/constants';
import { RoundBtn } from '../components/layout/RoundBtn';

const HomeScreen = ({ productsSlice, getProducts }) => {
  React.useEffect(() => {
    getProducts();
  }, []);

  const insets = useSafeArea();

  if (productsSlice.products?.length === 0) {
    return (
      <View>
        <Text>No items</Text>
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: constants.padding1,
        paddingRight: constants.padding1,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <SearchBar />
        <RoundBtn />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={productsSlice.products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(product) => product.id}
      />
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFF',
  },
});

HomeScreen.propTypes = {
  productsSlice: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  productsSlice: state.productsSlice,
});

export default connect(mapStateToProps, { getProducts })(HomeScreen);
