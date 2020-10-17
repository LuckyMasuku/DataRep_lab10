import React from 'react';

//Class extends from react
export class Content extends React.Component {
//render used to run the function

    render() {
//the return will return and display the command
        return (

            <div>
                <h1>Hello World</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>

        );



    }

}