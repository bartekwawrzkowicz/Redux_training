import { useState } from 'react';
import { connect } from 'react-redux';

import { addRate, editRate } from './actions/appActions';

const Form = ( { addRate, editRate, callback, author = '', comment = '', id, rate = 0 } ) => {

    const [authorInput, setAuthorInput] = useState(author);
    const [commentInput, setCommentInput] = useState(comment);
    const [rateInput, setRateInput] = useState(rate);

    const changeAuthorHandler = event => setAuthorInput(event.target.value);
    const changeCommentHandler = event => setCommentInput(event.target.value);
    const changeRateHandler = event => setRateInput(event.target.value);

    const onSubmitHandler = event => {
        event.preventDefault();

        if (!authorInput.length) {
            alert('empty author data');
            return
        } 

        const rateObject = {
            author: authorInput,
            comment: commentInput,
            id,
            rate: Number(rateInput),
        }

        id ? editRate(rateObject) : addRate('add Rate');

        if (id) {
            callback();
        }
        
    }

    return ( 
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>
                    Author:
                    <input onChange={changeAuthorHandler} value={authorInput} type="text" />
                </label>
            </div>

            <div>
                <label>
                    Comment:
                    <input onChange={changeCommentHandler} value={commentInput} type="text" />
                </label>
            </div>

            <div>
                <label>
                    Rate:
                    <input onChange={changeRateHandler} value={rateInput} type="number" />
                </label>
            </div>

            <button type="submit">
                {id ? 'edit rate' : 'add rate'}
            </button>
        </form>
     );
}

const connectActionsToProps = ({
    addRate,
    editRate,
})

const FormConsumer = connect(null, connectActionsToProps) (Form);
 
export default FormConsumer;