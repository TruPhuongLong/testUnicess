import React from 'react';
import imageBenefit from '../assets/pic_trulli.jpg'

class Benefit extends React.Component {

    container = {
        width: '200px',
        height: 'auto',

    }

    render() {
        return (
            <div style={this.container}>
                <figure>
                    <img src={this.props.url} alt="my image" style={{width: '100%'}}/>
                    <br />
                    <h5>{this.props.caption}</h5>
                    <p>{this.props.content}</p>
                </figure>
            </div>
        );
    }
}

Benefit.defaultProps = {
    url: imageBenefit
  }

export default Benefit;
