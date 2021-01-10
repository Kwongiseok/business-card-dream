import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
const Maker = ({ authService }) => {
  const history = useHistory();
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
  const onLogout = () => {
    authService //
      .logout();
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
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
