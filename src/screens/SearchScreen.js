import React, {useState, useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Context} from '../context/GithubContext';
import {Header, Card, SearchBar} from '../components';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const {
    state: {users, error},
    searchApi,
  } = useContext(Context);

  return (
    <View style={styles.container1}>
      <Header name="Search for GitHub Users" />
      <SearchBar
        data-testid="input-field"
        term={term}
        onTermChange={newTerm => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      {users === undefined ? (
        <View style={styles.container2}>
          {error ? (
            <Text style={styles.textError}>{error}</Text>
          ) : (
            <Text style={styles.text}>
              Search for a GitHub name or a company you are looking for.
            </Text>
          )}
        </View>
      ) : (
        <Card>
          <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('repositories', {
                      id: item.id,
                      name: item.login,
                    });
                  }}>
                  <ListItem bottomDivider>
                    <ListItem.Content>
                      <ListItem.Title>{item.login}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                </TouchableOpacity>
              );
            }}
          />
        </Card>
      )}
    </View>
  );
};

SearchScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container2: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    marginVertical: 200,
    fontSize: 20,
    marginHorizontal: 15,
  },
  textError: {
    textAlign: 'center',
    marginTop: 200,
    fontSize: 20,
    marginHorizontal: 15,
    color: 'red',
  },
});

export default SearchScreen;
