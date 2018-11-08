import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Image } from '../components/Image';
import { postProduct } from '../../services/product.service';

class ProductPostForm extends React.Component {

    state = {
        files: [],
        imageUrls: []
    }

    resetState = () => {
        this.setState({
            files: [],
            imageUrls: []
        })
        this.name.value = '';
        this.price.value = '';
        this.unitPrice.value = '';
        this.content.value = '';
    }

    onFileChange = (event) => {
        const file = event.target.files[0];
        this.previewImage(file);
        this.setState({
            files: [...this.state.files, file]
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('submit')
        const model = { name: this.name.value, price: this.price.value, unitPrice: this.unitPrice.value, content: this.content.value }
        // const { user, postPosts } = this.props;
        postProduct(model, this.state.files)
            .then(_ => {
                this.resetState();
            })
    }

    previewImage(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                imageUrls: [...this.state.imageUrls, reader.result]
            });
        }
        reader.readAsDataURL(file)
    }

    _remove = (index) => {
        console.log(index);
        const files = this.state.files.filter((_, _index) => _index !== index);
        const imageUrls = this.state.imageUrls.filter((_, _index) => _index !== index);
        this.setState({
            files,
            imageUrls,
        })
    }

    render() {
        const { listImage } = this.state;
        return (
            <div className="container">
                <form className="form-horizontal" onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label htmlFor="product-name" className="col-sm-2">Name</label>
                        <div className="col-sm-10">
                            <input
                                id="product-name"
                                className="form-control"
                                ref={input => this.name = input}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="product-price" className="col-sm-2">Price</label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                id="product-price"
                                ref={input => this.price = input}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="product-unit-price" className="col-sm-2">Unit Price</label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                id="product-unit-price"
                                ref={input => this.unitPrice = input}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="product-content" className="col-sm-2">Content</label>
                        <div className="col-sm-10">
                            <textarea
                                className="form-control"
                                id="product-content"
                                rows="10"
                                ref={input => this.content = input}
                            />
                        </div>
                    </div>

                    <div className="form-group" style={{ textAlign: 'end' }}>
                        <div className="col-sm-10 col-sm-offset-2" style={{ textAlign: 'start' }}>
                            <div style={{ position: 'relative' }}>
                                <button className="btn btn-success">get image from computer...</button>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="product-main-image"
                                    style={{ position: 'absolute', top: '0px', opacity: '0' }}
                                    onChange={this.onFileChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group" style={{ textAlign: 'end' }}>

                        <div className="col-sm-offset-2 col-sm-10" style={{ textAlign: 'start' }}>
                            <div style={inline}>
                                {
                                    this.state.imageUrls.map((url, index) => {
                                        return <Image src={url} index={index} key={index} remove={this._remove} />
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="form-group" style={{ textAlign: 'end' }}>
                        <div className="col-sm-offset-2 col-sm-10" style={{ textAlign: 'start' }}>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

const inline = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    flexWrap: 'wrap',
}

export default ProductPostForm;