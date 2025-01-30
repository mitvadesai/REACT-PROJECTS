import { useState } from 'react';
import './comments.css';

const Comment = () => {
    const [input, setInput] = useState({
        username: "",
        comment: "",
        review: 0,
    });
     const [reviews, setReviews] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    };

    const handleStarClick = (rating) => {
        setInput({
            ...input,
            review: rating
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            input.username === "" ||
            input.comment === "" ||
            input.review === 0
        ) {
            alert("Please fill out all fields and select a review rating.");
            return;
        }

        setReviews([...reviews, input]);
        setInput({ username: "", comment: "", review: 0 });
    };

    return (
        <>
            <h3>Comment & Review</h3>
            <div className="form">
                <div className="img"></div>
                <form onSubmit={handleSubmit}>
                    <label>USERNAME :</label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="username"
                        value={input.username}
                        onChange={handleChange}
                    />
                    <br />
                    <label>COMMENTS :</label>
                    <textarea
                        name="comment"
                        placeholder="Enter Your Comment"
                        value={input.comment}
                        onChange={handleChange}
                    ></textarea>
                    <br />
                    <label>REVIEW :</label>
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={star <= input.review ? "star selected" : "star"}
                                onClick={() => handleStarClick(star)}
                            >
                                ★
                            </span>
                        ))}
                    </div>

                    <button type="submit">SUBMIT</button>
                </form>
            </div>



            <h3>User Reviews</h3>
            <div className="review_box">
                {reviews.length > 0 ? (
                    <div className="review-grid">
                        {reviews.map((review, index) => (
                            <div className="review" key={index}>
                                <h4>{review.username}</h4>
                                <p>{review.comment}</p>
                                <div className="star-rating">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={star <= review.review ? "star selected" : "star"}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No reviews yet. Be the first to leave one!</p>
                )}
            </div>
        </>
    );
};

export default Comment;

