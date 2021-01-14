import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";
const ImageFileInput = ({ imageUploader, fileName, onFileChange }) => {
  const [loading, setLoading] = useState(false); // 로딩 스테이트
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    setLoading(true); // true 일 때 로딩스피너를 보여준다.
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${fileName ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {fileName || "No file"}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
