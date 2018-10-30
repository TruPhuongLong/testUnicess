import React from 'react';
import Header from '../components/header';
import Benefit from '../components/benefit';
import Review from '../components/review';
import Footer from '../components/footer';
import imgUrl from '../assets/pic_trulli.jpg'
import List from '../components/list';
import Product from '../components/product';


export default class Home extends React.Component {

    data = [
        { url: imgUrl, caption: 'benefit 1', content: 'img 1' },
        { url: imgUrl, caption: 'benefit 2', content: 'img 2' },
        { url: imgUrl, caption: 'benefit 3', content: 'img 3' }
    ]
    dataReview = [
        { url: imgUrl, content: 'content 1' },
        { url: imgUrl, content: 'content 2' },
        { url: imgUrl, content: 'content 3' },
        { url: imgUrl, content: 'content 4' }
    ]

    render() {

        return (
            <div>
                <Header></Header>
                <br /><br />
                <Product onBuyNow={this.props.onBuyNow}/>
                <br /><br />
                <span style={{width: '200px', margin: 'auto', border: '1px solid #333', display: 'block'}} ></span>
                <br /><br />
                <List
                    itemSource={this.data}
                    renderRows={(e, index) => (
                        <Benefit key={index} url={e.url} caption={e.caption} content={e.content} />
                    )}
                    style={{ flexDirection: 'row' }}
                />

                <br />
                <span style={{width: '200px', margin: 'auto', border: '1px solid #333', display: 'block'}} ></span>
                <br />

                <h3>Review</h3>
                <List
                    itemSource={this.dataReview}
                    renderRows={(e, index, array) => (
                        index % 2 == 0 ?
                            <div key={index} >
                                <Review url={array[index].url} content={array[index].content} />
                                <Review url={array[index + 1].url} content={array[index + 1].content} />
                            </div>
                            : null
                    )}
                    style={{ flexDirection: 'row' }}
                />
                <Footer></Footer>
            </div>
        )
    }
}