import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleOnChnage = (event)=> {
        setText(event.target.value);
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleClClick = ()=> {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success")
    }
    const handleScClick = ()=> {
        let newText = text.toLowerCase().replace(/\.\s*([a-z])|^[a-z]/gm, s => s.toUpperCase());
        setText(newText);
        props.showAlert("Senetence Case enabled!", "success")
    }
    const handleSpClick = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text speaking!", "success")
    }
    const handleCapClick = ()=> {
        let newText = text.toLowerCase().split(' ').map(function (word){
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
        setText(newText);
        props.showAlert("Text Capitalized!", "success")
    }
     const handleAltClick = ()=> {
        let newText = text.split('').map((c,i) => 
            i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()
        ).join('');
        setText(newText);   
        props.showAlert("Active Alternating Case!", "success")
     }
     const handleTogClick = ()=>{
        let newText = text.toUpperCase().split(' ').map(function (word){
            return (word.charAt(0).toLowerCase() + word.slice(1));
        }).join(' ');
        setText(newText);
        props.showAlert("Converted to Toggle Case", "success")
     }
     const handleDtClick = (event)=> {
        const element = document.createElement("a");
        const file = new Blob([text], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert("Please save Text.", "success")
     }
     const handleCtcClick = ()=> {
        navigator.clipboard.writeText(text).then(() => {
            props.showAlert("Copied To Clipboard!", "success")
        });
    }
    const handleRemExtSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!", "success")
    }
    const countWords = ()=> {
        let wc = text.split(" ").length;
        text.split(" ").forEach((word) => {
            if(!word.length){
              wc -= 1;  
            }
        });
        return wc;
    } 

  return (
    <>
        <h1 style={{color: props.textColor}}>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="textbox" className="form-label" style={{color: props.textColor}}>Enter your text to get your desired changes </label>
            <textarea className="form-control" value={text} id="textbox" rows="8" onChange={handleOnChnage} style={{backgroundColor: props.mode === 'dark' ? '#212529' : '#fff', color: props.mode === 'dark' ? '#fff' : '#1a1a1a', borderColor: props.mode === 'dark' ? '#353739' : '#ccc'}}></textarea>
        </div>
        <button style={{backgroundColor: props.themeColor, borderColor: props.themeColor }} className="btn btn-primary m-1" onClick={handleUpClick}>UPPERCASE</button>
        <button style={{backgroundColor: props.themeColor, borderColor: props.themeColor }} className="btn btn-primary m-1" onClick={handleLoClick}>lowercase</button>
        <button style={{backgroundColor: props.themeColor, borderColor: props.themeColor }} className="btn btn-primary m-1" onClick={handleScClick}>Sentence case</button>
        <button style={{backgroundColor: props.themeColor, borderColor: props.themeColor }} className="btn btn-primary m-1" onClick={handleCapClick}>Capitalize Case</button>
        <button style={{backgroundColor: props.themeColor, borderColor: props.themeColor }} className="btn btn-primary m-1" onClick={handleAltClick}>aLtErNaTiNg cAsE </button>
        <button style={{backgroundColor: props.themeColor, borderColor: props.themeColor }} className="btn btn-primary m-1" onClick={handleTogClick}>tOGGLE cASE </button>
        <button style={{backgroundColor: props.themeColor, borderColor: props.themeColor }} className="btn btn-primary m-1" onClick={handleSpClick}>Speaking Text</button>
        <button style={{backgroundColor: props.themeColor, borderColor: props.themeColor }} className="btn btn-primary m-1" onClick={handleDtClick} id="download">Download Text </button>
        <button style={{backgroundColor: props.themeColor, borderColor: props.themeColor }} className="btn btn-primary m-1" onClick={handleCtcClick}>Copy to Clipboard </button>
        <button style={{backgroundColor: props.themeColor, borderColor: props.themeColor }} className="btn btn-primary m-1" onClick={handleRemExtSpaces}>Remove Extra Spaces</button>
        <button style={{backgroundColor: props.themeColor, borderColor: props.themeColor }} className="btn btn-primary m-1" onClick={handleClClick}>Clear </button>
        <div className="wordslength" style={{color: props.textColor}}>
            <h1>Your text Summary</h1>
            <p>{countWords()} words and  {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read text</p>
            <h2>Preview</h2>
            <p>{text.length>0? text : 'Enter something in the textbox to preview it here!'}</p>
        </div>
        
    </>
  )
}
