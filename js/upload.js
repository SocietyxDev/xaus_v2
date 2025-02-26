import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

async function uploadPost() {
    const fileInput = document.getElementById("fileInput");
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    if (fileInput.files.length === 0) {
        alert("Please select a file.");
        return;
    }

    const file = fileInput.files[0];
    const postURL = `uploads/${file.name}`; // Upload manually to GitHub & use raw URL

    try {
        await addDoc(collection(db, "posts"), {
            title: title,
            description: description,
            fileURL: postURL,
            timestamp: new Date()
        });
        alert("Post Uploaded!");
    } catch (error) {
        console.error("Error uploading:", error);
    }
}
