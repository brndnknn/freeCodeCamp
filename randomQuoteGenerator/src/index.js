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
        // load quotes into app
        const Quotes = require('./quotes');

        this.handleNewQuote = this.handleNewQuote.bind(this);

    }

    componentDidMount(){
        this.randomQuote();

    }

    randomQuote(){
        let quoteNum = Math.floor((Math.random() * Quotes.length));
        this.setState({
            text: Quotes[quoteNum]['quote'],
            author: Quotes[quoteNum]['author'],
        });

    }

    handleNewQuote(){
        this.randomQuote();
    }


   

    render() {
        return(
            <div id="quote-box">
                <div id="text">{this.state.text}</div>
                <div id="author">{this.state.author}</div>
                <br />
                <a id="tweet-quote">tweetquote</a>
                <button id="new-quote" onClick={this.handleNewQuote}>New Quote</button>
            </div>
             
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
