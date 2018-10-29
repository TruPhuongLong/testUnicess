import React from 'react';
import imageBenefit from '../assets/pic_trulli.jpg'

const Header = (props) => {

    const image = {
        float: 'left',
        width: '200px',
        height: 'auto'
    }

    const container = {
        width: '400px',
        height: 'auto',
        margin: '20px'
    }

    return (
        <div style={container}>
            <img src={props.url} alt="my review" style={image}/>
            <p>{props.content}</p>
        </div>
    )
}
export default Header;