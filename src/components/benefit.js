import React from 'react';
import imageBenefit from '../assets/pic_trulli.jpg'

class Benefit extends React.Component {

    image = {
        width: '200px',
        height: 'auto',
    }

    container = {
        width: '300px',
        textAlign: 'center',
        backgroundColor: '#cccccc',
        padding: '15px 5px'
    }

    render() {
        return (
            <div style={this.container}>
                <figure>
                    <img src={this.props.url} alt="my image" style={this.image}/>
                    <br /><br />
                    <h5>{this.props.caption}</h5>
                    <br />
                    <p>{this.props.content}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d</p>
                </figure>
            </div>
        );
    }
}

Benefit.defaultProps = {
    url: imageBenefit
  }

export default Benefit;
