import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './screens/SearchScreen';
import UserRepositories from './screens/UserRepositories';

const Router = createStackNavigator(
  {
    search: SearchScreen,
    repositories: UserRepositories,
  },
  {
    initialRouteName: 'search',
  },
);

export default createAppContainer(Router);
