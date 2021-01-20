import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};
const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/41OiCBwqgsL.jpg'
    alt=''
  />
);
const Title = () => <h1>Software Engineering</h1>;
const Author = () => (
  <h1 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Ian Sommerville
  </h1>
);
ReactDom.render(<BookList />, document.getElementById("root"));
