import React from 'react';

const List = (props) => {
  const { repos } = props; //
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>; //kalau repos empty
  return (
    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {repos.map((repo) => {  //iterate to display items in repos
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.name} </span>
            <span className='repo-description'>{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;