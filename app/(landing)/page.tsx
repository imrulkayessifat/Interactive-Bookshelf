"use client";

import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react";
import Image from "next/image";

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


const formSchema = z.object({
  search: z.string().min(0, {
    message: "",
  }),
})

type FormValues = z.infer<typeof formSchema>
const defaultValues: Partial<FormValues> = {
  search: ""
}

export default function Home() {

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const [books, setBooks] = useState([]);

  const onSubmit = async (data: FormValues) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${data.search}`);
    setBooks(response.data.items);
  }
  console.log(books)
  return (
    <div className="flex flex-col gap-5 p-10">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          // <div key={book.id} className="p-4 border rounded-md">
          //   <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          //   <h2>{book.volumeInfo.title}</h2>
          //   <p>{book.volumeInfo.authors.join(', ')}</p>
          //   <p>{book.volumeInfo.description}</p>
          // </div>
          <Card key={book.id} className="pb-2">
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
              <div className="flex justify-between gap-2 pt-2">
                <div className="flex gap-2">
                  <h2 className="font-sans text-sm md:text-base">Title : {book.volumeInfo.title}</h2>
                  <p className="font-sans text-sm md:text-base">
                    Author : {book.volumeInfo.authors.join(', ')}
                  </p>
                </div>
                <Button variant="default">Generate</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div >
  );
}
