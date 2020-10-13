import React, {useState} from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';


function Quotes() {

    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");


  function getQuote() {
    axios.get("http://localhost:3000/",  { crossdomain: true }).then(response => {
      setText(response.data.text);
      setAuthor(response.data.author);
    });
  }

  return (
    <div>
    <Button variant="contained" color="primary" onClick={getQuote}>Generate Quote</Button>
      <h1>{text}</h1>
      <h3>{"-" + author}</h3>
    </div>
  )
}
export default Quotes;