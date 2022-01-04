import React from "react";

const Book = (props) => {
  //event handler
  const clickHander = (e) => {
    console.log(e);
    console.log(e.target);
    alert("HOW DARE YOU");
  };

  const clickHanderForAuther = (author) => {
    alert(author);
  };
  // destructed props note can destructed in definition
  const { img, title, author, children } = props;
  console.log(props);
  return (
    //event on mouse over with console logs
    <article className="book" onMouseOver={() => console.log(title)}>
      <img src={img} alt="" />
      {/* event handler using in line functions */}
      <h4 onClick={() => alert(title)}>{title}</h4>
      <h2>{author.toUpperCase()}</h2>
      {/* {props.children} */}
      {/* event handler using a button */}
      <button type="button" onClick={clickHander}>
        '*DON'T* click me'
      </button>
      <button type="button" onClick={() => clickHanderForAuther(author)}>
        'Click me for an Author Name Alert'
      </button>
    </article>
  );
};

export default Book;
