import React, { Component } from 'react';
import SongsService from '../services/SongsService';

class SongsComponent extends Component {

    constructor(props){
            super(props)
            this.state={
                songs: []
            }
    }

    componentDidMount(){
        SongsService.getSongs().then((res)=>{
                this.setState({songs: res.data});
        });
    }

    render() {
        return (
            <div>
            <h2 className="text-center"> Songs List </h2>
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
                                <tr key={song.id}>
                                <td> {song.name} </td>
                                <td> {song.artistName} </td>
                                <td> {song.countryArea} </td>    
                                </tr>)}
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default SongsComponent;