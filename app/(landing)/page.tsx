"use client";

import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react";
import Image from "next/image";
import { Plus } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import BookShelf from "@/components/bookshelf";

const formSchema = z.object({
  search: z.string().min(1, {
    message: "At least 1 Character!",
  }),
})

type FormValues = z.infer<typeof formSchema>
const defaultValues: Partial<FormValues> = {
  search: ""
}

export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    publishedDate: string;
    imageLinks: {
      thumbnail: string;
    };
    authors: string[];
  };
};

export default function Home() {

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const [books, setBooks] = useState<Book[]>([]);
  const [bookshelf, setBookshelf] = useState<Book[]>([]);
  const { toast } = useToast()

  const onSubmit = async (data: FormValues) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${data.search}`);
    setBooks(response.data.items);
  }

  const addToBookshelf = (book: Book) => {
    setBookshelf((prevBookshelf) => [...prevBookshelf, book]);
    toast({
      variant: "sky",
      description: "Add to bookself",
    })
  }

  const onDelete = (id: string) => {
    const updatedBooks = bookshelf.filter(book => book.id !== id);
    setBookshelf(updatedBooks)
  }

  return (
    <div className="flex flex-col gap-5 p-10">
      <div className="flex justify-start gap-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-5 space-y-8">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Search</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-8" variant="outline">Book Self</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[825px]">
            <DialogHeader>
              <DialogTitle>Book Self</DialogTitle>
              <DialogDescription>
                Show your added books!
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <BookShelf onDelete={onDelete} bookself={bookshelf} />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <Card key={book.id} className="flex flex-col justify-between gap-2 pb-2">
            <CardHeader>
              <CardTitle>{book.volumeInfo.title ? book.volumeInfo.title : 'No Title available'}</CardTitle>
              <CardDescription>
                {book.volumeInfo.description
                  ? book.volumeInfo.description.split(' ').slice(0, 10).join(' ') + '...'
                  : 'No description available'}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2">
              <Image
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                layout='responsive'
                width={500}
                height={281}
                objectFit='cover'
                className="rounded-md"
              />
            </CardContent>
            <CardFooter className="flex rounded-md border-2 mx-2 justify-between">
              <p className="font-sans text-sm md:text-base">
                Author : {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No authors listed'}
              </p>
              <Button variant="default" className="mt-2" onClick={() => addToBookshelf(book)}>
                Add
                <Plus className="w-5 h-5" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div >
  );
}
