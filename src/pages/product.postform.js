import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Image } from '../components/Image';

class ProductPostForm extends React.Component {

    state = {
        content: '',
        files: [],
        imagePreviewUrls: []
    }

    _onChange = (event) => {
        const content = event.target.value;
        this.setState({
            content
        })
    }

    onFileChange = (event) => {
        const file = event.target.files[0];
        this.previewImage(file);
        this.setState({
            files: [...this.state.files, file]
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const { files, content } = this.state;
        const { user, postPosts } = this.props;
        postPosts(user, { content }, files)
            .then(_ => {
                this.setState({
                    content: '',
                    files: [],
                    imagePreviewUrls: []
                })
            })
    }

    previewImage(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                imagePreviewUrls: [...this.state.imagePreviewUrls, reader.result]
            });
        }
        reader.readAsDataURL(file)
    }

    _remove = (index) => {
        console.log(index);
        const files = this.state.files.filter((_, _index) => _index != index);
        const imagePreviewUrls = this.state.imagePreviewUrls.filter((_, _index) => _index != index);
        this.setState({
            files,
            imagePreviewUrls,
        })
    }

    render() {
        const { listImage } = this.state;
        return (
            <div className="container">
                <form className="form-horizontal">

                    <div className="form-group">
                        <label htmlFor="product-name" className="col-sm-2">Name</label>
                        <div className="col-sm-10">
                            <input id="product-name" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="product-price" className="col-sm-2">Price</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="product-price" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="product-unit-price" className="col-sm-2">Unit Price</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="product-unit-price" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="product-content" className="col-sm-2">Content</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="product-content" rows="10" />
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
                        <div style={inline}>
                            {
                                this.state.imagePreviewUrls.map((url, index) => {
                                    return <Image src={url} index={index} key={index} remove={this._remove} />
                                })
                            }
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
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'red'
}

export default ProductPostForm;