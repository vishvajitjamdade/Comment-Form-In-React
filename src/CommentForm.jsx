import { useState } from "react";
import "./CommentForm.css";

export default function CommentForm() {
    let [formData, setFormData] = useState({
        name: "",
        remark: "",
        rating: ""
    });

    const [comments, setComments] = useState([]);

    let handleInputChange = (event) => {
        let feildName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData) => {
            return { ...currData, [feildName]: newValue };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setComments((prevComments) => [...prevComments, formData]);
        setFormData({
            name: "",
            remark: "",
            rating: ""
        });
    }

    return (
        <div className="comment-container">
            <form onSubmit={handleSubmit} className="comment-form">
                <label htmlFor="name">Name :</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                />

                <label htmlFor="remark">Remark/Comments :</label>
                <textarea
                    type="text"
                    name="remark"
                    id="remark"
                    placeholder="Leave your comments here..."
                    cols={30}
                    rows={4}
                    value={formData.remark}
                    onChange={handleInputChange}
                    className="form-textarea"
                />

                <label htmlFor="rating">Ratings :</label>
                <select
                    name="rating"
                    id="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="form-select"
                >
                    <option value="">Select rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <button className="form-button">Submit</button>
            </form>

            <div className="comment-list">
                <h3>Submitted Data</h3>
                {
                    comments.length === 0 ? (
                        <p className="no-comments">No comments yet.</p>
                    ) : (
                        comments.map((comment, index) => {
                            return (
                                <div key={index} className="comment-card">
                                    <p><strong>{comment.name}</strong></p> rated it <strong>{comment.rating}/5</strong>
                                    <p>{comment.remark}</p>
                                </div>
                            );
                        })
                    )
                }
            </div>
        </div>
    );
}