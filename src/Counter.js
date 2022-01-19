import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0) // number라는 값의 기본값 세팅을 0으로 함 setNumber이걸 사용하느 함수
    const onIncrease = () => {
    setNumber(number + 1)   
    
    /* setNumber(pre => pre + 1)  이런식으로도 사용이 가능 */
    }
    const onDecrease = () => {
    setNumber(number- 1)
    }
    const reset = () => {
        setNumber(0)
        }
    return(
        <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={reset}>reset</button>
        </div>

    )
}

export default Counter