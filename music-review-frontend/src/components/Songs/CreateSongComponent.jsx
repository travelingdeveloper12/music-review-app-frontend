import React, { Component } from 'react';
import SongsService from '../../services/SongsService';

class CreateSongComponent extends Component {
    constructor(props){
            super(props)
            this.state = {
                name: '',
                artistName:'',
                countryArea:''
            }

        this.changeSongNameHandler = this.changeSongNameHandler.bind(this);
        this.changeArtistNameHandler = this.changeArtistNameHandler.bind(this);
        this.changeCountryAreaHandler = this.changeCountryAreaHandler.bind(this);
        this.saveSong = this.saveSong.bind(this);
    }

    saveSong = (e) =>{
        e.preventDefault();
        let song = {name: this.state.name, artistName: this.state.artistName, countryArea: this.state.countryArea};
        console.log('Songs => ' + JSON.stringify(song)); 
        SongsService.createSong(song).then(res =>{
            this.props.history.push('/songs/'); 
        });
    }

    cancel(){
        this.props.history.push('/songs/');
    }

    changeSongNameHandler = (event) => {
            this.setState({ name: event.target.value });
    }

    changeArtistNameHandler = (event) => {
        this.setState({artistName: event.target.value});
    }
    changeCountryAreaHandler =  (event) => {
        this.setState({countryArea: event.target.value});
    }


    render() {
        return (
            <div>
                <h1>Add Song Form</h1>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Add Song</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Song Name: </label>
                                        <input placeholder="Song Name" name="name" 
                                        className="form-control" value={this.state.name} onChange= {this.changeSongNameHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label> Artist Name: </label>
                                        <input placeholder="Artist Name" name="artistName" 
                                        className="form-control" value={this.state.artistName} onChange= {this.changeArtistNameHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label> Country Area: </label>
                                        <input placeholder="Country Area" name="countryArea" 
                                        className="form-control" value={this.state.countryArea} onChange= {this.changeCountryAreaHandler}></input>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveSong}>Save</button>
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

export default CreateSongComponent;