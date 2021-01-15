import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
// 2: {
//   id: "2",
//   name: "YJ",
//   company: "Kakao",
//   theme: "light",
//   title: "Software Engineer",
//   email: "ri2377@naver.com",
//   message: "go for it",
//   fileName: null,
//   fileURL: null,
// },
const Maker = ({ authService, dbService, FileInput }) => {
  const history = useHistory();
  const historyState = history.location.state;
  const [cards, setCards] = useState({});
  const [uid, setUid] = useState(historyState && historyState.id);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUid(historyState && historyState.id);
      } else {
        history.push("/");
      }
    });
  }, [uid, authService, history, historyState]);

  useEffect(() => {
    if (!uid) {
      return;
    }
    dbService.readUserData(uid).then((snapshot) => setCards(snapshot.val()));

    return () => {}; // 컴포넌트가 언마운트 됐을 때 return은 알아서 호출해준다
  }, [uid, dbService]);

  const onLogout = () => {
    authService //
      .logout();
  };

  const deleteCard = (card) => {
    const updated = { ...cards };
    delete updated[card.id];
    setCards(updated);
    dbService.deleteUserData(uid, card["id"]);
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
      return updated;
    });
    dbService.writeUserData(uid, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
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
