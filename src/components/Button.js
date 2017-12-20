import React from 'react';

export default function ({text, onHandleClick}) {
    return(
      <button onClick={onHandleClick}>{text}</button>
    );
}