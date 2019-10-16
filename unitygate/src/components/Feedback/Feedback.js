import React from 'react';
import './Feedback.css';



const Feedback = () => {
    return (
        <div className='feedback center'>
            <form className="pa4 black-80">
                <div>
                    <h1 className='f1 white'>Please drop a feedback</h1>
                    <label htmlFor="comment"className="f6 b db mb2 white">Feedback <span className="normal white black-60">(optional)</span></label>
                    <textarea id="comment" name="comment"className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
                </div>
                <button className='bn white grow bg-green'>Submit</button>
            </form>
        </div>
    )
}


export default Feedback;

