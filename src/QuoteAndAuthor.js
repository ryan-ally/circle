import React from "react";
import './App.css';

class QuoteAndAuthor extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <p id="quote">"{this.props.quote}"</p>
          <p id="author">
            -{this.props.author ? this.props.author : "Unknown"}-
          </p>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="newquote"
          onClick={this.props.handleClick}
        >
          New quote
        </button>
      </div>
    );
  }
}

export default QuoteAndAuthor;