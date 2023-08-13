
export const Statistics = ({good, bad, neutral}) => {
    const total = good + bad + neutral;
    const posPercent = good / total * 100;

    return (
        <div>
            <p>Good: {good}</p>
            <p>Bad : {bad}</p>
            <p>Neutral: {neutral}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {isNaN(posPercent) ? 0 : Math.round(posPercent)}%</p>
        </div>
    )


}