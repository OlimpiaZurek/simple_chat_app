import React from 'react';
import PropTypes from 'prop-types';
import PeopleIcon from '../../assets/people.png';
import style from './style.scss';

const Users = ({ users }) => (
  <aside className={style.sidebar} >
    <ul className={style.usersContainer}>
      {users.map(user => (
        <li key={user.id} className={style.users}>
          <img 
            src={PeopleIcon} 
            alt="peopleIcon"
            className={style.peopleIcon}
          />        
          <span className={style.dot} />
          {user.name}
        </li>
      ))}
    </ul>
  </aside>
);

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  )
};

export default Users;
