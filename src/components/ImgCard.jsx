export default function ImgCard({ imgListCard }) {
  const onClickContent = (card) => {
    alert(`${card.content}`);
  };
  const 작명 = imgListCard.map((card, idx) => {
    return (
      <>
        <div key={idx} onClick={() => onClickContent(card)}>
          {card.name} ({card.nickname})
        </div>
      </>
    );
  });
  return <div>{작명}</div>;
}
