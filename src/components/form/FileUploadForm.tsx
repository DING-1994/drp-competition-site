import { Button } from "@mui/material";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../lib/firebase/firebase";
import styles from "../../styles/FileUploadForm.module.css";
import { useAuthContext } from "../../lib/context/AuthContext";
import { FormInfo } from "../../hooks/useFormInfo";

interface FileUploadFormProps {
  formInfoState: FormInfo;
}

export default function FileUploadForm({ formInfoState }: FileUploadFormProps) {
  const { currentUser } = useAuthContext();
  // 提出されたファイル
  const [file, setFile] = useState<File | null>(null);
  // ファイルの表示名
  const [displayFileName, setDisplayFileName] = useState<string>("");
  // 提出ボタンの無効化
  const [submitDisabled, setSubmitDisabled] = useState(true);
  // ファイル選択の無効化
  const [inputDisabled, setInputDisabled] = useState(false);

  const validateFile = (file: File) => file.name.split(".").pop() === "zip";

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[event.target.files.length - 1];
      if (validateFile(file)) {
        setDisplayFileName(file.name);

        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;

        const newFileName = `${formattedDate}_${currentUser?.displayName}_${currentUser?.email}.zip`;
        const newFile = new File([file], newFileName, { type: file.type });
        setFile(newFile);
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
        formInfoState.setFormSentSuccess(true);
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
      {file && <p>Selected file: {displayFileName}</p>}
    </>
  );
}
