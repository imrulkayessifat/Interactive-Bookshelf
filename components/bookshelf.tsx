import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Trash2 } from 'lucide-react';

import { Book } from "@/app/(landing)/page";
import { useState } from "react";

type BookSelfProps = {
    bookself: Book[];
    onDelete: (id: string) => void;
};
const BookShelf: React.FC<BookSelfProps> = ({ bookself,onDelete }) => {

    return (
        <Table>
            <TableCaption>A list of your added books.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {bookself.map((book) => (
                    <TableRow key={book.id}>
                        <TableCell>{book.id}</TableCell>
                        <TableCell>{book.volumeInfo.title}</TableCell>
                        <TableCell>{book.volumeInfo.publishedDate}</TableCell>
                        <TableCell>
                            <Trash2 className="cursor-pointer ml-8" onClick={() => onDelete(book.id)}  />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default BookShelf