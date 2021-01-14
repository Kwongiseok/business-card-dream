import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
const Maker = ({ authService }) => {
  const history = useHistory();
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Giseok",
      company: "Kakao",
      theme: "dark",
      title: "Software Engineer",
      email: "ri2377@naver.com",
      message: "go for it",
      fileName: "Giseok",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "YJ",
      company: "Kakao",
      theme: "light",
      title: "Software Engineer",
      email: "ri2377@naver.com",
      message: "go for it",
      fileName: "Giseok",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "YS",
      company: "Kakao",
      theme: "colorful",
      title: "Software Engineer",
      email: "ri2377@naver.com",
      message: "go for it",
      fileName: "Giseok",
      fileURL: null,
    },
  });
  const onLogout = () => {
    authService //
      .logout();
  };
  // const addCard = (card) => {
  //   setCards([...cards, card]);
  // };
  const deleteCard = (card) => {
    const updated = { ...cards };
    delete updated[card.id];
    setCards(updated);
  };
  const createOrUpdateCard = (card) => {
    // const updated = { ...cards };
    // updated[card.id] = card;
    // setCards(updated);
    /* setState 콜백으로 사용할 수 있다. 이전 상태 값을 부른다. */
    setCards((cards) => {
      // setCards를 호출하기전 cards 값을 받아와서
      const updated = { ...cards }; // 콜백 과정을 거친다.
      updated[card.id] = card; // 새로 업데이트 된 애를 업데이트 해준다.
      // 기존에 없던 id라면 오브젝트에 추가해주기 때문에 add의 기능을 포함하고 있다.
      return;
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          deleteCard={deleteCard}
          updateCard={createOrUpdateCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
