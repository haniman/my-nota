import {React, useState, useEffect} from 'react';
import axios from 'axios';
import List from './List';
import WithListLoading from './WithListLoading';

const TestApi = () => {

const ListLoading = WithListLoading(List);
const [AppState, setAppState] = useState({
loading: false,
repos: null,
});

useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

return (
    <div className='App'>
      <div className='container'>
        <h2>Tutorial Repositories</h2>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={AppState.loading} repos={AppState.repos} />
      </div>
    </div>
  );

};

export default TestApi;