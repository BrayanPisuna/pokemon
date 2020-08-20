import React from 'react';

const TodoList = () => {

  const [ homework, setHomework ] = React.useState( [] );
  const [ completed, setCompleted ] = React.useState( [] );


  const handleAddTask = () => {
    const task = document.querySelector( '#task' ).value;
    setHomework( prevState => [ ...prevState, task ] );
    document.querySelector( '#task' ).value = '';
  };

  const handleDeleteTask = ( index ) => {
    setHomework( ( prevState ) => {
      return prevState.filter( ( task, i ) => i !== index );
    } );
  };

  const handleCompleteTask = ( index ) => {
    setCompleted( ( prevState ) => [
      ...prevState,
      homework[ index ]
    ] );

    handleDeleteTask( index );
  };


  return (
    <div>
      <div>
          <h1>TAREAS</h1>
        <input type='text' id='task' />
        <br/><br/>


        <button onClick={ handleAddTask } > Agregar</button>
      </div>
      <h2>Pendientes </h2>
      <table>
        <thead>
        <tr>
          <th>Nombre</th>
        </tr>
        </thead>
        <tbody>
        {
          homework.map( ( task, index ) => (
              <tr key={ index }>
                <td>{ task }</td>
                <td>
                  <button onClick={ () => handleDeleteTask( index ) }>Eliminar</button>
                </td>
                <td>
                  <button onClick={ () => handleCompleteTask( index ) }>Completada</button>
                </td>
              </tr>
            )
          )
        }
        </tbody>
      </table>

      <h2>Completadas </h2>
      <table>
        <thead>
        <tr>
          <th>Nombre</th>
        </tr>
        </thead>
        <tbody>
        {
          completed.map( ( task, index ) => (
              <tr key={ index }>
                <td>{ task }</td>
              </tr>
            )
          )
        }
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
