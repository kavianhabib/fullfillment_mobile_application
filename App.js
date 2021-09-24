import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import StaffPage from './pages/StaffPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage';
import PurchaseConfirmationPage from './pages/PurchaseConfirmationPage';
import StowerPage from './pages/StowerPage';
import StowConfirmationPage from './pages/StowConfirmationPage';
import ManagerPage from './pages/ManagerPage';
import InventoryPage from './pages/InventoryPage';
import OrdersPage from './pages/OrdersPage';
import LoginPage from './library/screens/LoginPage'
import CartPage from './customerPages/CartPage';
import PickerPage from './StaffPages/PickerPage';
import PickerScannerPage from './StaffPages/PickerScannerPage';
import PickConfirmationPage from './StaffPages/PickConfirmationPage';
import PackerPage from './StaffPages/PackerPage';
import PackerScannerPage from './StaffPages/PackerScannerPage';
import PackerOptionsPage from './StaffPages/PackerOptionsPage';
import PackConfirmationPage from './StaffPages/PackConfirmationPage';

const Stack = createStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName = 'MainPage'>
        <Stack.Screen name = 'MainPage' component = {MainPage}/>
        <Stack.Screen name = 'UserPage' component = {UserPage}/>
        <Stack.Screen name = 'StaffPage' component = {StaffPage}/>
        <Stack.Screen name = 'CheckoutPage' component = {CheckoutPage}/>
        <Stack.Screen name = 'PaymentPage' component = {PaymentPage}/>
        <Stack.Screen name = 'PurchaseConfirmationPage' component = {PurchaseConfirmationPage}/>
        <Stack.Screen name = 'StowerPage' component = {StowerPage}/>
        <Stack.Screen name = 'StowConfirmationPage' component = {StowConfirmationPage}/>
        <Stack.Screen name = 'ManagerPage' component={ManagerPage}/>
        <Stack.Screen name = 'InventoryPage' component = {InventoryPage}/>
        <Stack.Screen name = 'OrdersPage' component={OrdersPage}/>
        <Stack.Screen name = 'LoginPage' component={LoginPage}/>
        <Stack.Screen name = 'CartPage' component={CartPage}/>
        <Stack.Screen name = 'PickerPage' component={PickerPage}/>
        <Stack.Screen name = 'PickerScannerPage' component={PickerScannerPage}/>
        <Stack.Screen name = 'PickConfirmationPage' component={PickConfirmationPage}/>
        <Stack.Screen name = 'PackerPage' component={PackerPage}/>
        <Stack.Screen name = 'PackerScannerPage' component={PackerScannerPage}/>
        <Stack.Screen name = 'PackerOptionsPage' component={PackerOptionsPage}/>
        <Stack.Screen name = 'PackConfirmationPage' component={PackConfirmationPage}/>

      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <MainPage/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
