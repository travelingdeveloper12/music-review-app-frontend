import axios from 'axios';

const ALBUMBS_ADD_REVIEW_ENDPOINT = "http://localhost:8082/albums/update/{id}";


class ReviewService{
addReview(review){
return axios.post(ALBUMBS_ADD_REVIEW_ENDPOINT, review);
}
}

export default new ReviewService();