import { useState } from "react";
import { storage } from "../../lib/firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";

export default function FileUploadForm() {
  const [file, setFile] = useState<File | null>(null);

  const validateFile = (file: File) => {
    // .py ファイルのみ受け付ける
    if (file.name.split(".").pop() !== "py") {
      return false;
    }
    return true;
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (validateFile(file)) {
        setFile(file);
      } else {
        alert("Please upload a .py file.");
      }
    }
  };

  const uploadFile = async () => {
    const storageRef = ref(storage, `submissions/${file?.name}`);
    await uploadBytes(storageRef, file as Blob)
      .then((snapshot) => {
        console.log("Uploaded a file!");
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  };

  return (
    <>
      <form onSubmit={uploadFile}>
        <input type="file" onChange={handleFileSelect} />
        <button type="submit">Upload</button>
      </form>
      {file && <p>Selected file: {file.name}</p>}
    </>
  );
}
