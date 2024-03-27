import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase/firebase";

interface Score {
  instance_id: number;
  runtime: number;
  distance: number;
  time_step: number;
  goal_rate: number;
  goal_count: number;
  subtotal_cost: number;
}

interface ScoreTableData {
  id: string;
  record: string;
}

export default function ScoreTable() {
  const [scores, setScores] = useState<ScoreTableData[]>([]);
  const instanceCount = 30;

  useEffect(() => {
    const recordCollectionRef = collection(db, "records");
    getDocs(recordCollectionRef).then((querySnapshot) => {
      const scorePromises = querySnapshot.docs.map((recordDoc) => {
        const recordData = recordDoc.data() as ScoreTableData;
        recordData.id = recordDoc.id;
        return recordData;
      });
      Promise.all(scorePromises).then((scores) => {
        setScores(scores);
      });
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell align="right">Scored time</TableCell>
            <TableCell align="right">Final cost</TableCell>
            {Array.from({ length: instanceCount }).map((_, index) => (
              <TableCell key={index} align="right">
                Subtotal cost {index + 1}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {scores.map((rawScore) => {
            const score = JSON.parse(rawScore.record);
            return (
              <TableRow key={score.Author}>
                <TableCell component="th" scope="row">
                  {score.Author}
                </TableCell>
                <TableCell align="right">{score["Scored time"]}</TableCell>
                <TableCell align="right">{score["final cost"]}</TableCell>
                {score.Score.map((scoreDetail: Score, index: number) => (
                  <TableCell key={index} align="right">
                    {scoreDetail.subtotal_cost}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
