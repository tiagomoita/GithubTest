import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from './context/GithubContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './Router';

const App = () => {
  return (
    <Provider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Router />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
