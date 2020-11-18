import React from 'react'
import Card from 'react-bootstrap/Card';
export class MovieItem extends React.Component {

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
                </Card>




            </div>
        );
    }

} 