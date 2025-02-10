import { FC } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { MoreHorizontal, PencilLine, Trash2 } from "lucide-react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";

const TableComponent: FC = () => {
  const _ButtonActions = () => {
    return (
      <div className="flex flex-row items-center gap-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel className="text-[11px] font-bold uppercase">Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Button variant="ghost" className="w-full text-left hover:bg-slate-200 justify-start text-sm font-normal">
                <PencilLine />
                <span>Edit Data</span>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="ghost" className="w-full text-left hover:bg-slate-200 justify-start text-sm font-normal">
                <Trash2 />
                <span>Delete to trash</span>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  };

  return (
    <>
      <Table className="rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center font-bold text-xs uppercase w-12">
              <input type="checkbox"></input>
            </TableHead>
            <TableHead className="font-bold text-xs uppercase">Name</TableHead>
            <TableHead className="font-bold text-xs uppercase">Date</TableHead>
            <TableHead className="font-bold text-xs uppercase">Data</TableHead>
            <TableHead className="font-bold text-xs uppercase w-52"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className=" text-center w-12">
              <input type="checkbox" />
            </TableCell>
            <TableCell className="">asdas</TableCell>
            <TableCell className="">asdas</TableCell>
            <TableCell className="">asdas</TableCell>
            <TableCell className="">{_ButtonActions()}</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100 hover:border hover:rounded-md duration-150 ease-in-out">
            <TableCell className="text-center w-12">
              <input type="checkbox" />
            </TableCell>
            <TableCell className="">asdas</TableCell>
            <TableCell className="">asdas</TableCell>
            <TableCell className="">asdas</TableCell>
            <TableCell className="">{_ButtonActions()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagination className="mt-8 justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default TableComponent;
