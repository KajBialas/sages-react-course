import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/context';

function UserLogin() {
  const [userNameForm, setUserNameForm] = useState('');
  const [userName, setUserName] = useContext(UserContext);

  return (
    <div>
      <h2>Logowanie</h2>
      { userName ? <div>Użytkownik zalogowany</div> : <form onSubmit={() => setUserName(userNameForm)}>
        <input type="text" value={userNameForm} onChange={(e) => setUserNameForm(e.target.value)} />
      </form> }
    </div>
  )
}

export default UserLogin;