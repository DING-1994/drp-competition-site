import { Button } from "@mui/material";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../lib/firebase/firebase";
import styles from "../../styles/FileUploadForm.module.css";

export default function FileUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [inputDisabled, setInputDisabled] = useState(false);

  const validateFile = (file: File) => file.name.split(".").pop() === "zip";

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[event.target.files.length - 1];
      if (validateFile(file)) {
        setFile(file);
        setSubmitDisabled(false);
        setInputDisabled(true);
      } else {
        alert("Please upload a .zip file.");
        setSubmitDisabled(true);
        setInputDisabled(false);
      }
    }
  };

  const uploadFile = async () => {
    const storageRef = ref(storage, `submissions/${file?.name}`);
    await uploadBytes(storageRef, file as Blob)
      .then((_) => {
        console.log("Uploaded a file!");
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  };

  return (
    <>
      <form onSubmit={uploadFile}>
        <div className={styles.file_upload}>
          <input
            type="file"
            id="file"
            className={styles.file_input}
            onChange={handleFileSelect}
          />
          <label
            htmlFor="file"
            className={
              inputDisabled ? styles.file_label_disabled : styles.file_label
            }
          >
            Choose a file
          </label>
        </div>
        <Button type="submit" variant="contained" disabled={submitDisabled}>
          Upload
        </Button>
      </form>
      {file && <p>Selected file: {file.name}</p>}
    </>
  );
}
