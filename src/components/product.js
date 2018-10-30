import React from 'react';
import ProductDescription from './product-description';
import ProductImage from './product-image';
import ProductDetail from './product-detail';


class Product extends React.Component {

    state = {
        showDetail: false
    }

    onDetail = () => {
        this.setState({
            showDetail: true
        })
    }

    onShrink = () => {
        this.setState({
            showDetail: false
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <ProductDescription {...this.props} onDetail={this.onDetail} showDetail={this.state.showDetail}/>
                    </div>
                    <div className="col-sm-6">
                        <ProductImage />
                    </div>
                </div>
                {
                    this.state.showDetail ? <ProductDetail {...this.props} onShrink={this.onShrink}/> : null
                }
                
            </div>
        )
    }

}
export default Product;