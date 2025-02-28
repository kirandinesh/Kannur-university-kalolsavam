import { TableCell, TableRow } from "@/components/ui/table";

function CollegeTable({ college, index }) {
 

  return (
    <TableRow key={index}>
      <TableCell>{index + 1}</TableCell>
      <TableCell className="font-medium uppercase xl:text-lg">
        {college?.name}
      </TableCell>
      <TableCell className="xl:text-lg">{college?.totalPoints}</TableCell>
    </TableRow>
  );
}

export default CollegeTable;
