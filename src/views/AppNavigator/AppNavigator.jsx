/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import Categories from '../Categories/Categories';
import { setConnectivity } from '../../redux/modules/network/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Stack = createStackNavigator();

class AppNavigator extends React.Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    NetInfo.addEventListener((state) => {
      this.onConnectivityChange(state.isConnected);
    });
  };

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener();
  }

  onConnectivityChange = (reach) => {
    this.props.dispatch(setConnectivity(reach));
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator style={styles.container}>
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default connect()(AppNavigator);
