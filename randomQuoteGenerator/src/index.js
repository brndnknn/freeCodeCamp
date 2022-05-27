import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // add state 
            text: 'text',
            author: 'author'
        }
    }

    render() {
        return(
            <div id="quote-box">
                <div id="text">{this.state.text}</div>
                <div id="author">{this.state.author}</div>
                <br />
                <a id="tweet-quote">tweetquote</a>
                <button id="new-quote">newquote</button>
            </div>
             
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
