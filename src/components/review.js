import React from 'react';
import url from '../assets/review.jpg'

const Header = (props) => {

    const image = {
        float: 'left',
        width: '200px',
        height: 'auto',
        marginRight: '10px'
    }

    const container = {
        width: '400px',
        height: 'auto',
        margin: '20px',
        textAlign: 'right'
    }

    return (
        <div style={container}>
            <img src={url} alt="my review" style={image}/>
            <p>{props.content}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be</p>
        </div>
    )
}
export default Header;