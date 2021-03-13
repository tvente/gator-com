import React, {useEffect, useState} from 'react';
import {googleTranslate} from './utils/googleTranslate';
import Translation from './Translation';
import Rating from './Rating';

function App() {
    const [messages, updateMessages] = useState([]);
    const [langCodes, updateLangCodes] = useState([]);
    const [leftLang, updateLeftLang] = useState({language: 'en', name: 'English'});
    const [rightLang, updateRightLang] = useState({language: 'es', name: 'Spanish'});

    useEffect(() => {
        googleTranslate.getSupportedLanguages('en', (err, languageCodes) => {
            updateLangCodes(languageCodes);
        })
    }, [])

    return (
        <div>
            <section style={{display:'flex',flexDirection:'column'}}>
                <div className='messageList'>
                    {messages.map((message) => (
                        <div className={message.isLeft ? 'leftMessage' : 'rightMessage'}>
                            {message.isLeft && <Rating/>}
                            <ul className={message.isLeft ? 'leftText' : 'rightText'}>{message.text}</ul>
                            {!message.isLeft && <Rating/>}
                        </div>
                    ))}
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                    <Translation langCodes={langCodes} updateLang={updateLeftLang} fromLanguage={leftLang} toLanguage={rightLang} updateMessages={updateMessages} isLeft/>
                    <Translation langCodes={langCodes} updateLang={updateRightLang} fromLanguage={rightLang} toLanguage={leftLang} updateMessages={updateMessages} />
                </div>
            </section>
        </div>
    )
}
export default App;