import React, {useState } from 'react';
import {googleTranslate} from './utils/googleTranslate';
import Dropdown from './Dropdown';
import '../App.css';

function Translation({langCodes, updateLang, fromLanguage, toLanguage, updateMessages, isLeft}) {
    const [text, updateText] = useState('');

    const handleChange = (e) => {
        updateText(e.target.value);
    }

    const validateForm = () => {
        if(text != '') {
            handleSubmit();
        }
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            validateForm();
        }
    }

    const handleSubmit = () => {
        googleTranslate.translate(text, fromLanguage.language, toLanguage.language, function(err, translation) {
        updateMessages(messages => [...messages, {text: translation.translatedText, isLeft}]);
        updateText('');
        })
    }
    
    return (
        <div>
            <Dropdown selectedLang={fromLanguage} updateLang={updateLang} langCodes={langCodes}/>
            <div className="translation" id="sendform" style={{ textAlign: 'left'}}>
                <input 
                    className="textBox" 
                    placeholder="Enter text" 
                    value={text}  
                    onChange={handleChange} 
                    onKeyPress={handleKeyPress}
                />
                <button className="sendButton" onClick={validateForm} type="submit">Send</button>
            </div>
        </div>
        
    )
}
export default Translation;