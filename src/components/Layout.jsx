import Header from "./Header";

export default function Layout({ children, setImgListCard }) {
  return (
    <div>
      <Header setImgListCard={setImgListCard} />
      {children}
    </div>
  );
}
