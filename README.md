## Task
Project Name: "Interactive Bookshelf"<br />

Objective: Construct a frontend application that allows users to search for books, view their details, and
virtually "place" them on a digital bookshelf.<br />

Features:
1. Book Search Interface:<br />
○ An input field where users can type keywords, titles, or authors.<br />
○ A "Search" button to initiate the query.<br />
2. API Integration:
○ Integrate with a public book database API, such as the Google Books API.<br />
○ Display a list of books relevant to the user's query. For each book, show:<br />
■ Book cover thumbnail.<br />
■ Title.<br />
■ Author(s).<br />
■ Short description or snippet.<br />
3. Add to Bookshelf:<br />
○ Next to each book result, provide an "Add to Bookshelf" button.<br />
○ When clicked, the book should be visually added to a virtual "bookshelf" section at the
bottom or side of the page. The bookshelf can be a simple grid or list showcasing the
covers of the selected books.<br />
4. HTTP Status and Error Handling:<br />
○ Present a loading indication (spinner, animation) during API fetch.<br />
○ Provide appropriate feedback for various HTTP statuses:<br />
■ Success or neutral indication for 2xx status codes.<br />
■ Informative message or icon for 3xx redirections.<br />
■ Custom error messages for 4xx and 5xx status codes. Examples:<br />
■ "No books found matching your search. Perhaps try different keywords?"
for 404.<br />
■ "Our digital library is currently under maintenance. Please come back
later!" for 500.<br />
5. Enhanced Error Scenarios:<br />
○ If API rate limits are encountered: "You've been reading too fast! Please wait a bit and try
searching again."<br />
○ For unexpected data or broken image links: "Hmm, we can't seem to get all the details for
this book. Try another one?"<br />
○ If network issues arise: "Looks like a connection issue. Make sure you're online and try
again."<br />
6. Responsive Design:<br />
○ The application should adjust and look appealing on both desktop and mobile devices.<br />

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
