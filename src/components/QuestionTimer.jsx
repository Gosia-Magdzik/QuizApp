import React, { useState, useEffect } from 'react'

export const QuestionTimer = ({timeout, onTimeout}) => {
  
    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        setTimeout(onTimeout, timeout);
    }, [timeout, onTimeout]);

    useEffect(() => {
        setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);
    }, []);
    
    setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);

    return  ( <process 
                id='question-time'
                max={timeout}
                value={remainingTime}
            />)
}
