import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Todo from '../Components/Todo';
import { useSelector } from 'react-redux';

const InCompletedTodos = () => {
    const [doneTodos, setDoneTodos] = useState([]);
    const { todos } = useSelector((state) => state.todo);

    useEffect(() => {
        if (todos) {
          const isDone = todos.filter((res) => !res.done);
          setDoneTodos(isDone);
        }
      }, [todos]);


  return (
    
    <View style={{ flex: 1,padding:10 }}>
      {doneTodos.length ? (
        <>
          {doneTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </>
      ) : (
        <Text>No Completed Todos yet</Text>
      )}
    </View>
  )
}

export default InCompletedTodos