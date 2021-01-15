import firebaseDatabase from "./firebase";
import firebase from "firebase";

class DatabaseService {
  writeUserData(userId, cardInfo) {
    firebase
      .database()
      .ref("users/" + userId + "/" + cardInfo["id"])
      .set({
        id: cardInfo["id"],
        name: cardInfo["name"],
        company: cardInfo["company"],
        theme: cardInfo["theme"],
        title: cardInfo["title"],
        email: cardInfo["email"],
        message: cardInfo["message"],
        fileName: cardInfo["fileName"],
        fileURL: cardInfo["fileURL"],
      });
  }
  readUserData(userId) {
    return firebase
      .database()
      .ref("/users/" + userId)
      .once("value");
  }
  deleteUserData(userId, cardId) {
    firebase
      .database()
      .ref("users/" + userId + "/" + cardId)
      .remove();
  }
}

export default DatabaseService;
