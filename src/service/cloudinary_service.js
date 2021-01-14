class cloudinaryService {
  upload() {
    const cloudinary_url = process.env.REACT_APP_CLOUDINARY_URL;
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "rccbegho");
    const options = {
      method: "POST",
      body: formData,
    };
    console.log(cloudinary_url);
    fetch(`${cloudinary_url}`, options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
export default cloudinaryService;
