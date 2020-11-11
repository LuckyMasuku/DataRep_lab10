import React from 'react';
import axios from 'axios';
export class Create extends React.Component {
//
    constructor() {
        super();
//when the movie is added its also added on the alert
// the bind helps to pass to the target
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: '',

        }
    }
    //called when the input value changes
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    //called when the input value changes
    //update the state 
    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });

    }
    //called when the input value changes
    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }
    //when submit is clicked i
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " " +this.state.Year + " " +this.state.Poster);
        // passes the value 
        //object with 3 values 
        const newMovie ={
            title:this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }
// allows the sycranese on the post
//make recall to the saver and make a promise
//call back function if its fullfilled
//use this url to dp a post request from this url
        axios.post('http://localhost:4000/api/movies', newMovie)
        .then((res)=>{
          console.log(res);

        })
        .catch((err)=>{
            console.log(err);
        });
        //form to add data 
    }
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year</label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Year}
                        onChange={this.onChangeYear}></input>
                     
                    </div>
                    <div className='form-group'>
                        <label>Movies Poster:</label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}>

                        </textarea>
                        </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>

                </form>
            </div>
        );
    }
} 