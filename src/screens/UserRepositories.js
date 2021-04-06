import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Context} from '../context/GithubContext';
import {Card} from '../components';

const UserRepositories = ({navigation}) => {
  // eslint-disable-next-line prettier/prettier
  const { state: { repositories }, searchRepositories} = useContext(Context);
  const name = navigation.getParam('name');

  useEffect(() => {
    searchRepositories(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Card>
        <FlatList
          data={repositories}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            );
          }}
        />
      </Card>
    </View>
  );
};

UserRepositories.navigationOptions = {
  title: 'Repositories',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserRepositories;
