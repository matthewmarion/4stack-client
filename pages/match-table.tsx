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
    teamOne: {
        name: string;
    };
    teamTwo: {
      name: string;
    };
    event: string;
    date: string;
  }

  export default function PlayerTable({ objects }: { objects: Object[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Team One</TableHeaderCell>
            <TableHeaderCell>Team Two</TableHeaderCell>
            <TableHeaderCell>Event</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {objects.map((object) => (
            <TableRow key={object.id}>
                <TableCell>{object.id}</TableCell>
                <TableCell>{object.teamOne.name}</TableCell>
                <TableCell>{object.teamTwo.name}</TableCell>
                <TableCell>{object.event}</TableCell>
                <TableCell>{object.date}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
