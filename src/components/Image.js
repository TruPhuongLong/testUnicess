import React from 'react';

export const Image = ({ src, index, remove = f => f }) => {
    return (
        <div style={ column }>
            <img src={src} alt={index} style={{ objectFit: 'cover', width: '200px', height: "200px" }} />
            <button onClick={() => remove(index)} >Remove</button>
        </div>
    )
}

const column = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '5px',
  }