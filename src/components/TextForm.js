import React , {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Button was Clicked");
        var newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    
    const handleLowClick = () => {
        // console.log("Button was Clicked");
        var newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    
    const handleClearClick = () => {
        // console.log("Button was Clicked");
        var newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    
    const handleOnChange = (event) => {
        // console.log("Change was Observed");
        setText(event.target.value);
    }
    
    const handleExtraSpaces = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
        props.showAlert("Extra Space Cleared", "success");
    }

    const [text, setText] = useState("");
    // setText("new text")
    return (
        <div style={props.mode}>
            <div className='mt-3'>
                <div className='d-flex justify-content-between'>
                <h5>Enter Text Below to Analyze</h5>
                
                </div>
                
                <textarea style={props.mode} className="form-control mb-3" value={text} onChange={handleOnChange} id="myForm" placeholder="Enter Text..." id="floatingTextarea"></textarea>
                <button className='btn btn-primary btn-sm mx-2' onClick={handleUpClick}>Convert To UPPERCASE</button>
                <button className='btn btn-primary btn-sm mx-2' onClick={handleLowClick}>Convert To lowercase</button>
                <button className='btn btn-primary btn-sm mx-2' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary btn-sm mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container">
                <h4 className='mt-4'>Text Summary</h4>
                <p><b>Words:</b> {text.split(" ").length}  <b>Characters:</b> {text.length} </p>
                <h4 className='mt-4'>Time Required to Read Text</h4>
                <p>{0.008* text.split(" ").length} <b>Minutes</b></p> 
                <h4 className='mt-4'>Text Preview</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}
