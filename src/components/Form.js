import React from 'react'

export const Form = () => { 
    return (
        
        <div className='form-container'>
            <h2>Numerican Expression Solver</h2>
            <form className="equation-form">
                <input type="text" placeholder="Enter equation" className="form-input" />
                <button type="submit" className="form-button">Calculate</button>
            </form>
            <div className="steps-container">
                <h3>Solution Steps:</h3>
                <ol className="solution-steps">
                    {/* Steps will be dynamically added here */}
                    <li className="step">Step 1: Initial equation</li>
                    <li className="step">Step 2: Simplified form</li>
                </ol>
            </div>
        </div>
    )
}
