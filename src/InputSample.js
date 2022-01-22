import React, { useState , useRef} from 'react';

function InputSample(){
  const [inputs, setInputs] = useState({
      name : '',
      nickname: ''
  })
  const nameInput = useRef(); // useRef를 사용하기위한 설정

  const {name, nickname } = inputs
  const onChange = (e) =>{
        const {name, value} = e.target; // 바로 넣어주기 const name = e.target.name , const value = e.target.value 랑 같음

        setInputs({
            ...inputs, // setInputs함수 호출해서 스프레드 문법으로 inputs 하나 복사해주고
            [name] : value // 값 세팅
        }) 

    }
    const Reset = () =>{
      setInputs({ // 초기화
        name : '',
        nickname: ''
      })
      nameInput.current.focus() // 포커스 함수 적용
    }

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput /* 원하는곳에 useRef변수 사용 */} />
            <input nickname="nickname" placeholder='닉네임' onChange={onChange} value={nickname}/>
            <button onClick={Reset}>초기화</button>
            <div>
                <b>값 : {inputs["name"] + inputs["nickname"]}</b>
                
            </div>
        </div>
    )
}

export default InputSample;