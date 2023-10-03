'use client'; 
import React from 'react';
// Arrays to hold months and days
const listMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function App() {
        let heading = weekDay;
        let body = [''];
    return (
        <div>
            <Table heading={heading} body={body} />
        </div>
    )
}

function Table() {
    let heading = this.props.heading;
    let body = this.props.body;
    return (
        <table>
            <thead>
                <tr>
                    {heading.map((head, headID) =>
                    <th key={headID}>{head}</th>)}
                </tr>
            </thead>
            <tbody>
                {body.map((rowContent, rowID) =>
                <TableRow rowContent={rowContent} key={rowID} />)}
            </tbody>
        </table>
    );
}

function TableRow() {
    let row = this.props.rowContent;
    return (
        <tr>
            {row.map((val, rowID) => <td key={rowID}>{val}</td>)}
        </tr>
    )
}

const kidTasks = {
    user: 'Theo',
    task: 'garbage',
    date: 10/2/2023,
};