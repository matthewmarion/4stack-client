import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
  } from '@tremor/react';

  interface Object {
    id: number;
    match: {
      id: number;
      teamOne: {
        name: string;
        city: string;
      };
      teamTwo: {
        name: string;
        city: string;
      };
    };
    gameType: {
      name: string;
    };
    map: {
      name: string;
    };
    score: number[];
  }

  export default function GameTable({ objects }: { objects: Object[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Match ID</TableHeaderCell>
            <TableHeaderCell>Team One</TableHeaderCell>
            <TableHeaderCell>Team Two</TableHeaderCell>
            <TableHeaderCell>Mode</TableHeaderCell>
            <TableHeaderCell>Map</TableHeaderCell>
            <TableHeaderCell>Team One Score</TableHeaderCell>
            <TableHeaderCell>Team Two Score</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {objects.map((object) => (
            <TableRow key={object.id}>
                <TableCell>{object.id}</TableCell>
                <TableCell>{object.match.id}</TableCell>
                <TableCell>{object.match.teamOne.city} {object.match.teamOne.name}</TableCell>
                <TableCell>{object.match.teamTwo.city} {object.match.teamTwo.name}</TableCell>
                <TableCell>{object.gameType.name}</TableCell>
                <TableCell>{object.map.name}</TableCell>
                <TableCell>{object.score[0]}</TableCell>
                <TableCell>{object.score[1]}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
