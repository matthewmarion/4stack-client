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
    alias: string;
    team: {
      name: string;
    };
  }

  export default function PlayerTable({ objects }: { objects: Object[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Alias</TableHeaderCell>
            <TableHeaderCell>Team</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {objects.map((object) => (
            <TableRow key={object.id}>
                <TableCell>{object.id}</TableCell>
                <TableCell>{object.alias}</TableCell>
                <TableCell>{object.team.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
