import React from 'react';

export const Todo = props => {
  console.log(">>>", props) 
  const handleToggle = () => {
    props.dispatch({type: "TOGGLE", payload: props.id})
  } 
  return (
    <div onClick={handleToggle}>
      {props.state.item}
    </div>
    );
  };
    