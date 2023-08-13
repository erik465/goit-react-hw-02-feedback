
export const FeedbackUtility = ({addGood, addBad, addNeutral}) => {
 
    return (
        <div>
            <h1>Please leave a feedback</h1>
            <div className="div">
                <button onClick={addGood} >Good</button>
                <button onClick={addBad}>Bad</button>
                <button onClick={addNeutral}>Neutral</button>
            </div>
        </div>
    )

}




