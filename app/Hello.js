import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';


class Chat extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to KLOC Technologies!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
         
          title="KLOC"
          subtitle="KLOC bot"
        />
      </div>
    );
  } 
}

export default Chat