import React from 'react';

const Review = ({ urlCustomer, content, urlVote }) => {
    return (
        <div className="review-left">
            <div className="review-element">
                <div className="avt-client">
                    <img src={urlCustomer} alt="" />
                </div>
                <div className="content-review">
                    <p>{content}</p>
                    <span><img src={urlVote} alt="" /></span>
                </div>
            </div>
        </div>
    )
}

const ReviewRow = (props) => {
    return (
        <div className="review-loop">
            {
                props.data.map(item => (
                    <Review urlCustomer={item.urlCustomer} content={item.content} urlVote={item.urlVote} />
                ))
            }
        </div>
    )
}
export default ReviewRow;