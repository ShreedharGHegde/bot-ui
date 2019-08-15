import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './Hello'

class App extends React.Component{
    render(){
        return(
            <div>Hello World
                <Chat/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))