// import { Box, CircularProgress } from "@mui/material";
// import { DocumentData, collection, getDocs } from "firebase/firestore";
// import * as React from "react";
// import { useEffect } from "react";
import Content from "../components/body/Content";
import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
// import { Heading } from "../components/paragraphComponents/Heading";
// import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
// import { db } from "../lib/firebase/firebase";
import { PageProps } from "./props/PageProps";

// type User = {
//   id: string;
//   username: string;
//   email: string;
// };

// type Record = {
//   id: string;
//   score: number;
//   comment: string;
//   created_at: string;
// };

export default function Leaderboard({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
      <HeadingWithLink id="leaderboard">Leaderboard</HeadingWithLink>
      <Paragraph>The leaderboard will be displayed here.</Paragraph>
    </Content>
  );
}

// export default function Leaderboard({ index, value }: PageProps) {
//   const [loading, setLoading] = React.useState(false);
//   const [teams, setTeams] = React.useState<DocumentData[]>([]);

//   useEffect(() => {
//     setLoading(true);
//     const teamsCollectionRef = collection(db, "teams");
//     getDocs(teamsCollectionRef).then((querySnapshot) => {
//       const teamPromises = querySnapshot.docs.map((teamDoc) => {
//         const teamData = teamDoc.data();
//         teamData.id = teamDoc.id;

//         const usersCollectionRef = collection(db, `teams/${teamDoc.id}/users`);
//         const recordsCollectionRef = collection(
//           db,
//           `teams/${teamDoc.id}/records`
//         );

//         const usersPromise = getDocs(usersCollectionRef).then(
//           (userQuerySnapshot) => {
//             const userData = userQuerySnapshot.docs.map((userDoc) => {
//               const data = userDoc.data();
//               data.id = userDoc.id;
//               return data;
//             });
//             return userData;
//           }
//         );

//         const recordsPromise = getDocs(recordsCollectionRef).then(
//           (recordQuerySnapshot) => {
//             const recordData = recordQuerySnapshot.docs.map((recordDoc) => {
//               const data = recordDoc.data();
//               data.id = recordDoc.id;
//               return data;
//             });
//             return recordData;
//           }
//         );

//         return Promise.all([usersPromise, recordsPromise]).then(
//           ([users, records]) => {
//             teamData.users = users;
//             teamData.records = records;
//             return teamData;
//           }
//         );
//       });

//       Promise.all(teamPromises).then((teamsWithUsersAndRecords) => {
//         setTeams(teamsWithUsersAndRecords);
//         console.log(teams);
//         setLoading(false);
//       });
//     });
//   }, []);

//   return (
//     <Content index={index} value={value}>
//       {loading && (
//         <Box sx={{ display: "flex", justifyContent: "center" }}>
//           <CircularProgress />
//         </Box>
//       )}
//       {!loading && (
//         <>
//           <Heading>Leaderboard</Heading>
//           {teams.map((team) => (
//             <div key={team.id}>
//               <h2>{team.team_name}</h2>
//               users:
//               <ul>
//                 {team.users.map((user: User) => (
//                   <li key={user.id}>{user.username}</li>
//                 ))}
//               </ul>
//               {/* team.records の中で、created_at が最も新しい record の score を表示する */}
//               {(() => {
//                 const latestRecord = team.records.reduce(
//                   (prev: Record, current: Record) => {
//                     return prev.created_at > current.created_at
//                       ? prev
//                       : current;
//                   }
//                 );
//                 return (
//                   <p>
//                     score: {latestRecord.score}, comment: {latestRecord.comment}
//                   </p>
//                 );
//               })()}
//             </div>
//           ))}
//         </>
//       )}
//     </Content>
//   );
// }
