import React,{useState} from 'react'

export default function TextForm(props) {
    var [text, setText]= useState("input your text");

    const handleonchange = (event) => {
      setText(event.target.value)
    }

    const handUpchange = () => {
      let newText = text.toUpperCase();
      setText(newText);
    }
  return (
    <div>
      <div className="mb-3 mx-5 my-5">
        <h1>{props.heading}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleonchange}></textarea>
  <button className='btn btn-outline-success my-3' onClick={handUpchange}>Convert to upper btn</button>
  </div>
</div>
    
  )
}
