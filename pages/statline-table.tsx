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
    game: {
      id: number;
    };
    player: {
      alias: string;
    };
    kills: number;
    deaths: number;
  }

  export default function StatLineTable({ objects }: { objects: Object[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Player</TableHeaderCell>
            <TableHeaderCell>Kills</TableHeaderCell>
            <TableHeaderCell>Deaths</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {objects.map((object) => (
            <TableRow key={object.id}>
                <TableCell>{object.id}</TableCell>
                <TableCell>{object.player.alias}</TableCell>
                <TableCell>{object.kills}</TableCell>
                <TableCell>{object.deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
