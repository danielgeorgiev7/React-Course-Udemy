import { useEffect } from "react"
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
    const { dispatch, secondsRemaining } = useQuiz();
    useEffect(function () {
        const id = setInterval(() => dispatch({ type: "ticktack" }), 1000);

        return () => clearInterval(id);
    }, [dispatch])

    const mins = Math.floor(secondsRemaining / 60);
    const seconds = (secondsRemaining - mins * 60);
    return (
        <div className="timer">
            {mins < 10 ? "0" + mins : mins}:{seconds < 10 ? "0" + seconds : seconds}
        </div>
    )
}

export default Timer
