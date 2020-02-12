import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './container/Home';
import User from './container/User';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
