import WritingCard from "./components/WritingCard";
import Layout from "./components/Layout";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";

function App() {
  const cardList = [
    {
      createdAt: "2023-11-03T02:07:09.423Z",
      nickname: "G code",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
      content: "안녕하세요~",
      name: "양희철",
      id: "1",
    },
    {
      createdAt: "2023-11-02T23:13:18.491Z",
      nickname: "Db tension",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg",
      content: "살려주세요~~~~",
      name: "조진훈",
      id: "2",
    },
    {
      createdAt: "2023-11-02T11:25:37.026Z",
      nickname: "C code",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/646.jpg",
      content: "손흥민, BTS, 남지현 렛츠 고~",
      name: "남지현",
      id: "3",
    },
    {
      createdAt: "2023-11-02T16:06:34.150Z",
      nickname: "Eb code",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/37.jpg",
      content: "함께하는 시간이 행복하기를",
      name: "박강토",
      id: "4",
    },
    {
      createdAt: "2023-11-03T05:40:17.575Z",
      nickname: "Bb code",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg",
      content: "",
      name: "장지영",
      id: "5",
    },
  ];
  const [imgListCard, setImgListCard] = useState(cardList);
  const [inputList, setInputList] = useState([]);
  return (
    <>
      <GlobalStyle />
      <Layout setImgListCard={setImgListCard}>
        <WritingCard
          imgListCard={imgListCard}
          setImgListCard={setImgListCard}
        />
      </Layout>
    </>
  );
}

export default App;
