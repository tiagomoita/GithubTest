import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'save_users':
      return {
        ...state,
        users: action.payload.users,
        loading: false,
        errorMessage: '',
      };
    case 'loading':
      return {...state, loading: true, errorMessage: ''};
    case 'save_repositories':
      return {...state, repositories: action.payload.data, errorMessage: ''};
    case 'error_message':
      return {...state, error: action.payload.errorMessage, loading: false};
    default:
      return state;
  }
};

const searchApi = dispatch => {
  return async searchTerm => {
    dispatch({type: 'loading'});
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q="${searchTerm}"+in:user&per_page=100`,
      );
      response.json().then(data => {
        console.log(data.items);
        //saveUsers(data.items);
        dispatch({type: 'save_users', payload: {users: data.items}});
      });
    } catch (err) {
      dispatch({
        type: 'error_message',
        payload: {errorMessage: 'Something went wrong ! Try Again !'},
      });
    }
  };
};

const searchRepositories = dispatch => {
  return async name => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${name}/repos`,
      );
      response.json().then(data => {
        //setUsers(data.items);
        //console.log(data);
        dispatch({type: 'save_repositories', payload: {data}});
      });
    } catch (err) {
      dispatch({
        type: 'error_message',
        payload: {errorMessage: 'Something went wrong'},
      });
    }
  };
};

export const {Context, Provider} = createDataContext(
  reducer,
  {
    searchApi,
    searchRepositories,
  },
  [],
);
