import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {

    const [note, setNote] = useState("");
    function noteChange(e) {
        setNote(e.target.value);
    }

    const [date, setDate] = useState("");
    function dateChange(e) {
        setDate(e.target.value);
    }

    const [time, setTime] = useState("");
    function timeChange(e) {
        setTime(e.target.value);
    }

    console.log(note, date, time);

    function addItem() {
        add(
            function (prevData) {
                return [...prevData, {
                    id: v4(),
                    note,
                    date,
                    time
                }];
            }
        );
    }
    return (
        <div>
            <h1>Note</h1>
            <p>Content:</p>
            <input type="text" value={note} onChange={noteChange} />
            <p>Date:</p>
            <input type="date" value={date} onChange={dateChange} />
            <p>Time:</p>
            <input type="time" value={time} onChange={timeChange} />
            <button onClick={addItem} className="add">Add: {note}</button>
        </div>
    );
}

export default Edit;