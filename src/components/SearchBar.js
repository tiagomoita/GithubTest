import React, {useContext} from 'react';
import {Context} from '../context/GithubContext';
import {View, TextInput, StyleSheet, ActivityIndicator} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  const {
    state: {loading},
  } = useContext(Context);
  return (
    <View style={styles.backgroundStyle}>
      {loading === true ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="grey" />
        </View>
      ) : (
        <Feather name="search" style={styles.iconStyle} />
      )}
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  loadingContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
});

export {SearchBar};
