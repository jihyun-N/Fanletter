import styled from "styled-components";

export default function Header({ setImgListCard }) {
  const onClickListCard = (name) => {
    setImgListCard((card) => {
      return card.filter((list) => {
        return list.name === name;
      });
    });
  };
  return (
    <Avoid>
      <TitleImg>Avoid 팬레터 콜렉션</TitleImg>

      <ButtonBackGround>
        <button onClick={() => onClickListCard("양희철")}>양희철 G</button>
        <button onClick={() => onClickListCard("조진훈")}>조진훈 Db</button>
        <button onClick={() => onClickListCard("남지현")}>남지현 C</button>
        <button onClick={() => onClickListCard("박강토")}>박강토 Eb</button>
        <button onClick={() => onClickListCard("장지영")}>장지영 Bb</button>
      </ButtonBackGround>
    </Avoid>
  );
}
const Avoid = styled.div`
  background-image: url("Avoid.png");
  height: 60vh;
  width: 100vw;
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleImg = styled.h1`
  font-size: 100px;
  font-weight: bold;
  margin-top: 100px;
  color: #f3e033;
  opacity: 100%;
`;
const ButtonBackGround = styled.div`
  border: 1px solid white;
  width: 500px;
  height: 80px;
  background-color: #3b3c3d;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;
