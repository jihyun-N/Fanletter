import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import ImgCard from "./ImgCard";
import { v4 } from "uuid";

export default function WritingCard({ imgListCard, setImgListCard }) {
  const idRef = useRef("");
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onClickAddButton = () => {
    setImgListCard((inputList) => [
      ...inputList,
      {
        id: v4,
        nickName,
        content,
      },
    ]);
  };
  useEffect(() => {
    idRef.current.focus();
  }, []);

  return (
    <NickNameContainer>
      <NicknameCard>
        <div>
          닉네임 :{" "}
          <input
            type="text"
            ref={idRef}
            onChange={onChangeNickName}
            value={nickName}
          />
        </div>
        <div>
          내용 :{" "}
          <input type="text" onChange={onChangeContent} value={content} />
        </div>
        <button onClick={onClickAddButton}>추가하기</button>
      </NicknameCard>
      <ImgCard imgListCard={imgListCard} />
    </NickNameContainer>
  );
}
const NicknameCard = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 240px;
  align-items: center;
  background-color: #bebebe;
  border-radius: 10px;
  margin: 20px;
`;
const NickNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
