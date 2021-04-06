import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    paddingVertical: 10,
  },
  textStyle: {
    fontSize: 20,
  },
});

export {Header};
