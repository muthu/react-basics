import { useState } from "react";
import "./bookSummary.css";

interface bookSummaryProps { 
    title: string, 
    summary: string 
} 

export function BookSummary({title, summary}: bookSummaryProps) {
    const [selected, setSelected] = useState(false); 
    const selectedClass = selected ? ' book-selected' : ''; 
    const toggleSelected = () => { 
        setSelected((current: boolean) => !current); 
    }; 
    return (<div 
            className={"book-summary" + selectedClass} 
            onClick={toggleSelected}
            >
        <h1>{title}</h1>
        <p>{summary}</p>
    </div>
    ); 
}