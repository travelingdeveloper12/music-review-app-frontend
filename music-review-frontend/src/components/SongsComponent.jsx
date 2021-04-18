import React, { Component } from 'react';
import SongsService from '../services/SongsService';

class SongsComponent extends Component {

    constructor(props){
            super(props)
            this.state={
                songs: []
            }
            this.addSong = this.addSong.bind(this);
    }

    componentDidMount(){
        SongsService.getSongs().then((res)=>{
                this.setState({songs: res.data});
        });
    }

    addSong(){
            this.props.history.push('/songs/add');
    }

    render() {
        return (
            <div>
            <h2 className="text-center"> Songs List </h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addSong}> Add Song </button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th><center>Song Name</center></th>
                            <th><center>Artist Name</center></th>
                            <th><center>Country Area</center></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.songs.map(song => 
                                <tr key={song.id} >
                                <td> <center>{song.name}</center> </td>
                                <td> <center>{song.artistName}</center> </td>
                                <td> <center>{song.countryArea}</center> </td>    
                                </tr>)}
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default SongsComponent;