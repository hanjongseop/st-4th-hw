import React, { useState, useEffect } from "react";
import TextInput from "./components/TextInput";

function App() {
  // TODO: 로컬 스토리지에서 초기 상태로 사용할 값을 가져오세요. 새로고침 해도 기존 상태를 유지하는 것이 목적입니다.
  // 로컬스토리지에 값이 없을 경우 빈배열[] 로 설정하세요.
  const [texts, setTexts] = useState([]);
  // TODO: 상태가 변경될 때마다 로컬 스토리지에 저장. key 값은 texts 로 합시다.
  //초반 데이터를 셋팅하는 부분
  useEffect(() => {
    const strData = localStorage.getItem("texts");
    setTexts(JSON.parse(strData)); //JSON.parse 객체를 문자로
  }, []); //처음 한번만 실행

  //로컬에 데이터를 저장하는 부분
  useEffect(() => {
    if (texts.length > 0) {
      localStorage.setItem("texts", JSON.stringify(texts));
    }
  }, [texts]); //texts변경 될 때 마다 실행

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput onAddText={onAddText} />
      <ul>
        {texts && texts.map((text, index) => <li key={index}>{text}</li>)}
      </ul>
    </div>
  );
}

export default App;
