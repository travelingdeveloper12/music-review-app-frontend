import React, { Component } from 'react';
import ReviewService from '../../services/ReviewService'

class AddReviewComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            review:{reviewedBy: '',
            review:''}
        }
        this.changeReviewedByHandler = this.changeReviewedByHandler.bind(this);
        this.changeReviewHandler = this.changeReviewHandler.bind(this);
        this.addReview = this.addReview.bind(this);
}

addReview(e){
    e.preventDefault();
    let review = {reviewedBy: this.state.name, artistName: this.state.artistName, countryArea: this.state.countryArea};
}
cancel(){
    this.props.history.push('/albums/');
}

changeReviewedByHandler = (event) => {
    this.setState({ name: event.target.value });
}

changeReviewHandler = (event) => {
this.setState({artistName: event.target.value});
}

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Add Album Review</h3>
                            <div className="card-body">
                                <form id="reviewForm">
                                    <div className="form-group">
                                        <label> Reviewd By: </label>
                                        <input placeholder="Reviewed By" name="reviewedBy" className="form-control" value={this.state.review.reviewedBy} onChange= {this.changeReviewedByHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label> Review: </label>
                                        <textarea placeholder="Review" rows="8" cols="50" name="review" className="form-control" value={this.state.review.review} onChange= {this.changeReviewHandler}> Add a Review for the Album...</textarea>
                                    </div>
                                    <button className="btn btn-success" onClick={this.addReview}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{margin: "10px"}}>Cancel</button>
                                </form>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddReviewComponent;