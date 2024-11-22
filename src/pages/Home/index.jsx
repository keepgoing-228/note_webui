import { useState, useEffect } from "react";

import Edit from "./components/edit";
import List from "./components/list";
import "./index.css";

const Home = () => {
    // const [a, setA] = useState(1);
    // function plus() {
    //     setA(function (prev) {
    //         return prev + 100
    //     })
    // }
    const [data, setData] = useState([]);

    useEffect(() => {
        return () => {

        }
    }, [data]);

    return (
        <div className="app">
            {/* <p>{a}</p>
            <button onClick={plus}>Add</button> */}
            <Edit add={setData} />
            <List listData={data} deleteData={setData} />
        </div>
    );
};

export default Home;
