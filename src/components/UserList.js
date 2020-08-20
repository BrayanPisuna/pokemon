
import React from 'react';

const UserList = () => {

  const initialUsers = () => {
    console.log( 'inicializando estado' );
    return [
      {
        name: 'Juan',
        lastname: 'García'
      },
      {
        name: 'Pedro',
        lastname: 'Garcia'
      },
      {
        name: 'Marco',
        lastname: 'García'
      }
    ];
  }

  const [ users, setUsers ] = React.useState( initialUsers );

  const handleAddUser = () => {
    const name = document.querySelector( '#name' ).value;
    const lastname = document.querySelector( '#lastname' ).value;
    const newUser = {
      name,
      lastname
    };
    setUsers( ( prevState ) => [
      ...prevState,
      newUser
    ] );
  };


  return (
    <div>
      <div>
        <h1>USUARIOS</h1>
        <label htmlFor='name'> Nombre </label>
        <input type='text' id='name' />
        <br/>
        <label htmlFor='lastname'> Apellido </label>
        <input type='text' id='lastname' />
        <br/><br/>
        <button onClick={ handleAddUser }>Agregar usuario</button>
      </div>
      <h2>Lista de usuarios</h2>
      <ul>
        {
          users.map( ( user, index ) => (
              <li key={ index }>{ user.name } { user.lastname }</li>
            )
          )
        }
      </ul>
      <br/>
    </div>
  );
};

export default UserList;
