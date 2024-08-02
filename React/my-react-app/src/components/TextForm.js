import React, { useState } from "react";

export default function TextForm(props) {
  //Handling onchange event
  const handleOnchange = (event) => {
    console.log("Handling on change.");
    setText(event.target.value);
  };

  //Sentencecase Letter converter Function
  function firstLetterUpper(theString) {
    var newString = theString
      .toLowerCase()
      .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
        return c.toUpperCase();
      });
    return newString;
  }
  const handlingSentenceClick = () => {
    // console.log("Button Clicked.");
    let inputText = firstLetterUpper(text);
    setText(inputText);
  };

  //Uppercase Letter converter Function
  const handlingUpClick = () => {
    // console.log("Button Clicked.");
    let inputText = text.toUpperCase();
    setText(inputText);
  };

  //Lowercase letter converter Function
  const handlingLowerClick = () => {
    let inputText = text.toLowerCase();
    setText(inputText);
  };

  //Function for capitalize
  const capitalizeWordsAlt = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const handlingCapClick = () => {
    let inputText = capitalizeWordsAlt(text);
    setText(inputText);
  };

  //Function for title case conversion
  function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }

  const handlingTitleCaseClick = () => {
    let inputText = titleCase(text);
    setText(inputText);
  };

  //Clear the text area function
  const handlingClearClick = () => {
    let inputText = "";
    setText(inputText);
  };

  const [text, setText] = useState("");
  // myText("Ruhul Amin");
  return (
    <>
      <div className="container">
        <h2 className="my-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnchange}
          ></textarea>
          <button
            className="btn btn-primary my-2"
            onClick={handlingSentenceClick}
          >
            Sentencecase
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handlingUpClick}
          >
            Uppercase
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handlingLowerClick}
          >
            Lowercase
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handlingCapClick}
          >
            Capitalize
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handlingTitleCaseClick}
          >
            Title Case
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handlingClearClick}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="container">
        <h2>Your text Summary</h2>
        <p>
          Your text contains: <b>{text.split(" ").length - 1}</b> Words |{" "}
          <b>{text.length}</b> characters | <b>{text.split(".").length - 1}</b>{" "}
          Sentences <br /> And You need{" "}
          <b>{(0.008 * (text.split(" ").length - 1)).toFixed(3)}</b> minutes to
          read your text.
        </p>
        <p></p>
        <h2>Your text</h2>
        <p className="text-right">{text}</p>
      </div>
    </>
  );
}
