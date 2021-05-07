import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LogBox, StyleSheet, View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Provider, useSelector } from 'react-redux';
import { Loading } from './components';
import store from './redux/store';
import Router from './router';

const MainApp = () => {
  const globalState = useSelector((state) => state);
  LogBox.ignoreLogs(['Setting a timer']);
  return (
    <>
      <View style={styles.container}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </View>
      <FlashMessage position="top" />
      {globalState.loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
