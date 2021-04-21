import React, { Component  } from 'react';
import TashanImage from '../Albums/images/Tashan.jpg';
import RockStarImage from '../Albums/images/Rockstar.jpg';


export default class AlbumsComponent extends Component {
    
    constructor(props){
        super(props)
        this.addReview = this.addReview.bind(this);
}
addReview(){
    this.props.history.push('/albums/review');
}

    render() {
        return (
<div>
<div class="card" style={{width: "20rem", position: 'absolute'}} >
                <div class="card-body">
                <img src={TashanImage} height="400" class="card-img-top"></img>
                <center><button className="btn btn-primary" onClick={this.addReview}> Add Review </button></center>
                </div>
  </div>
  <div class="card" style={{width: "20rem"}, {position: 'absolute', top:60,right:700}} >
                <div class="card-body">
                <img src={RockStarImage} height="400" class="card-img-top"></img>
                <center><button className="btn btn-primary" onClick={this.addReview}> Add Review </button></center>
                </div>
  </div>
</div>       
        );
    }
}


