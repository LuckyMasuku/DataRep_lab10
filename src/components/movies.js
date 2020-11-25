import React from 'react'
import { MovieItem } from './movieItem'

export class Movies extends React.Component{
    //using map fuction taking in movies and giving different collection
    //passing reloadData from read then movies passess it to its functions children acting as a parent
    render(){
           return this.props.movies.map((movie)=>{
               return <MovieItem movie={movie}ReloadData={this.props.ReloadData}></MovieItem>
           })
        
    }
} 