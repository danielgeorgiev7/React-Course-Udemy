import { useQuiz } from "../contexts/QuizContext"
import Timer from "./Timer"

function Question() {
    const { questions, dispatch, answer, index, length, points, maxPossiblePoints, secondsRemaining } = useQuiz();
    return (
        <>
            <header className="progress">
                <progress max={length} value={index}></progress>
                <p>
                    Question: <strong>{index + 1}</strong> / {length}
                </p>
                <p>
                    <strong>{points}</strong> / {maxPossiblePoints}
                </p>
            </header>
            <div>
                <h4>{questions[index].question}</h4>

                <div className="options">
                    {(questions[index].options).map((option, i) =>
                        <button
                            className={`btn btn-option 
                        ${i === answer ? "answer" : ""}
                         ${answer !== null ?
                                    (i === questions[index].correctOption
                                        ? "correct"
                                        : "wrong")
                                    : ""}`}
                            key={option}
                            onClick={() => dispatch({ type: "newAnswer", payload: i })}
                            disabled={answer !== null}
                        >
                            {option}
                        </button>)}
                </div>
            </div>
            <div>
            <Timer secondsRemaining={secondsRemaining} dispatch={dispatch}/>
                {answer !== null &&
                    <button
                        className="btn btn-ui"
                        onClick={() => dispatch(index === length - 1 ?
                            { type: "finish" } :
                            { type: "newQuestion" })}
                    >
                        {index === length - 1 ? 'Finish' : 'Next'}
                    </button>}
            </div>
        </>
    )
}

export default Question
