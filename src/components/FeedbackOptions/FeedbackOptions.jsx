
export const FeedbackOptions = ({options, onLeaveFeedback}) => {

    console.log(options)

    return (
        <div>
            {options.map(option => {
                return (<button onClick={() => onLeaveFeedback(option)}>{option.charAt(0).toUpperCase() + option.slice(1)}</button>)
            })}
        </div>
    )

}




