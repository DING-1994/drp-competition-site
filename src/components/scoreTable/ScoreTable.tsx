import { useEffect, useState } from "react";
import samplescore from "../../scores/sample.json";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

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
  Author: string;
  "Scored time": string;
  Score: Score[];
  "final cost": number;
}

export default function ScoreTable() {
  const [scores, setScores] = useState<ScoreTableData[]>([]);
  const instanceCount = 30;

  useEffect(() => {
    // JSONファイルを全て読み込み、オブジェクトにする
    setScores([samplescore]);
  }, []);

  // スコアを表示するためのコード
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
          {scores.map((score) => (
            <TableRow key={score.Author}>
              <TableCell component="th" scope="row">
                {score.Author}
              </TableCell>
              <TableCell align="right">{score["Scored time"]}</TableCell>
              <TableCell align="right">{score["final cost"]}</TableCell>
              {score.Score.map((scoreDetail, index) => (
                <TableCell key={index} align="right">
                  {scoreDetail.subtotal_cost}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
