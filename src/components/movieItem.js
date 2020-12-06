import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class MovieItem extends React.Component {
    //constructer helps to bind to the deleteMovie
    constructor(){
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    DeleteMovie(){
        console.log("Delete: "+this.props.movie._id);
        //the axios methord will call delete methord using localhost4000
        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    //the button to delete 
    //the button onclick finds the iterm selected and delete it from the database
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>

                    <Card.Body>
                        
                        <blockquote className="blockqoute mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockqoute-footer">
                                {this.props.movie.year}

                            </footer>
                        </blockquote>
                    
                    </Card.Body>
                    
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                    
                    <Link to={"/edit/"+ this.props.movie._id}className="btn btn-primary">Edit</Link>
                </Card>




            </div>
        );
    }

} 