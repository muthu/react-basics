import { useEffect, useState } from "react"; 
import bookModel from "../../models/bookModel"; 
import { BookSummary } from "../bookSummary/bookSummary"; 
import { getBooks } from "../../services/bookService"; 

export function BookSummaryList() {
    const [books, setBooks] = useState<Array<bookModel>>([]);
    const [error, setError] = useState<string | null>(null);

    // This will be called when the component is first mounted 
    // to load the book data from books.json. 
    useEffect(() => {
        const fetchData = async () => {
            // Clear the error message 
            setError(null);
            try {
                const request = await getBooks();
                setBooks(request.data);
            } catch (e) {
                // If there is an error, set the error message 
                setError("Error getting books!");
            }
        };
        fetchData();
    }, []);

    // For demonstration purposes, this useEffect is triggered when 
    // the "books" state is changed. You will see the output in the console. 
    useEffect(() => {
        console.log("Books:", books);
    }, [books]);

    // Take the list of book data and turn it into React components 
    const bookList = books.map((book) =>
        <BookSummary title={ book.title } summary = { book.summary } /> 
    );

    // The syntax for displaying the error might be a little confusing: 
    // - !!error will be evaluated as true if the value of error is not null 
    // - && will make what's after it only be used if the value before is true 
    // - We are using <strong> tags, just to display it bold 
    // - We need another set of curly braces to use the value of error 
    return (
        <>
            {!!error && <strong>{ error } </strong>}
            <div className="book-summary-list" >
                { bookList }
            </div>
        </> 
    ); 

} 

