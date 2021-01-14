import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";
import CloudinaryService from "./service/cloudinary_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
const authService = new AuthService();
const cloudinaryService = new CloudinaryService();
const imageUploader = new ImageUploader();
const FileInput = (
  props // 인젝션 확장이 좋아진다! 컴포넌트에 추가적으로 필요한 기능들을 삽입하기 쉬워짐
) => <ImageFileInput {...props} imageUploader={imageUploader} />;

ReactDOM.render(
  <>
    <App authService={authService} FileInput={FileInput} />
  </>,
  document.getElementById("root")
);
