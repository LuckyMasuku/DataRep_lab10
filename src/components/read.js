import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

//Class extends from react
export class Read extends React.Component {
    
    //used to store data in relevant component
    state = {
        movies: []

    };
    //this methord life cycle hooks its called when the component comes active in the view we get an event
    componentDidMount() {
//help to get the response 
        axios.get('http://localhost:4000/api/movies')

            //allows the fullfilled state methord when everything works
            .then(
                //function methord
                (response) => {
                    this.setState({ movies: response.data.movies})
                })
            //if nothing happens or things dont work what do we want on the output
            .catch(
                //function methord
                (error) => {
                    console.log(error)
                });


    }
    //render used to run the function
    render() {
        //the return will return and display the command
        return (
            //passing different components
            <div>
                <h1>This is my read Component.</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>

        );



    }

}