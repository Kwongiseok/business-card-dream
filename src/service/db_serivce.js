import { firebaseAuth, firebaseDatabase } from "./firebase";
import firebase from "firebase";

class DatabaseService {
  writeUserData(userId, cardInfo) {
    firebaseDatabase.ref("users/" + userId + "/" + cardInfo["id"]).set({
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
    return firebaseDatabase.ref("/users/" + userId).once("value");
  }
  deleteUserData(userId, cardId) {
    firebaseDatabase.ref("users/" + userId + "/" + cardId).remove();
  }
}

export default DatabaseService;
