import React, { useState } from 'react';
import Form from './Form';

const Element = ({ author, comment,id,  rate}) => {
    const [isVisibleForm, setIsVisibleForm] = useState(false);

    const toggleElements = () => setIsVisibleForm(prevVisibility => !prevVisibility);

    const formOrButtonElement = isVisibleForm ? (
        <Form callback={toggleElements} author={author} comment={comment} id={id} rate={rate} />
    ) : (
        <button onClick={toggleElements}>
            Edit Book
        </button>
    )
    

    return ( 
        <li>
            <p>Author: {author}</p>
            <p>Comment: {comment}</p>
            <p>Rate: {rate}</p>
            {formOrButtonElement}
        </li>
     );
}
 
export default Element;