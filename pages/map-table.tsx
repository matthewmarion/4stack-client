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
    name: string;
  }

  export default function MapTable({ objects }: { objects: Object[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {objects.map((object) => (
            <TableRow key={object.id}>
                <TableCell>{object.id}</TableCell>
                <TableCell>{object.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
