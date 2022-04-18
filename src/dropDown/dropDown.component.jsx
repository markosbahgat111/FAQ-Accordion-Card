import arrow from '../assets/images/icon-arrow-down.svg';
import './style.scss';
import React, { useState } from 'react';

const DropDown = ({ question }) =>
{
    const [show, setShow] = useState(false);
    return (
        <div className="main_container" id={show ? 'show' : undefined}>
            <div className="title" onClick={() => setShow(show => !show)}>
                <h1>{question.title}</h1>
                <img src={arrow} alt="arrow"/>
            </div>
            <div className="content" >{question.content}</div>
        </div>
    );
}
 
export default DropDown;
