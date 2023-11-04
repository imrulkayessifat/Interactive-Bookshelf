## Task
Project Name: "Interactive Bookshelf"

Objective: Construct a frontend application that allows users to search for books, view their details, and
virtually "place" them on a digital bookshelf.

Features:
1. Book Search Interface:
○ An input field where users can type keywords, titles, or authors.
○ A "Search" button to initiate the query.
2. API Integration:
○ Integrate with a public book database API, such as the Google Books API.
○ Display a list of books relevant to the user's query. For each book, show:
■ Book cover thumbnail.
■ Title.
■ Author(s).
■ Short description or snippet.
3. Add to Bookshelf:
○ Next to each book result, provide an "Add to Bookshelf" button.
○ When clicked, the book should be visually added to a virtual "bookshelf" section at the
bottom or side of the page. The bookshelf can be a simple grid or list showcasing the
covers of the selected books.
4. HTTP Status and Error Handling:
○ Present a loading indication (spinner, animation) during API fetch.
○ Provide appropriate feedback for various HTTP statuses:
■ Success or neutral indication for 2xx status codes.
■ Informative message or icon for 3xx redirections.
■ Custom error messages for 4xx and 5xx status codes. Examples:
■ "No books found matching your search. Perhaps try different keywords?"
for 404.
■ "Our digital library is currently under maintenance. Please come back
later!" for 500.
5. Enhanced Error Scenarios:
○ If API rate limits are encountered: "You've been reading too fast! Please wait a bit and try
searching again."
○ For unexpected data or broken image links: "Hmm, we can't seem to get all the details for
this book. Try another one?"
○ If network issues arise: "Looks like a connection issue. Make sure you're online and try
again."
6. Responsive Design:
○ The application should adjust and look appealing on both desktop and mobile devices.

## Getting Started

To run the project :
Make sure you have nodejs>=18.

```bash
1. git clone https://github.com/imrulkayessifat/Interactive-Bookshelf.git
2. cd Interactive-Bookshelf
3. npm i
4. npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Website 
https://interactive-bookshelf.vercel.app/
