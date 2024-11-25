import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";

import Edit from "./components/edit";
import List from "./components/list";
import "./index.css";


async function fetchData(setData) {
    const res = await fetch(API_GET_DATA);
    const { data } = await res.json();
    setData(data);
}

async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
    });
}

const Home = () => {
    const [data, setData] = useState([]);
    const submittingStatus = useRef(false);

    // initial data
    useEffect(() => {
        fetchData(setData)
    }, []);

    // run useEffect when data changes, including the initial
    useEffect(() => {
        if (!submittingStatus.current) {
            return
        }
        fetchSetData(data).then(data => {
            submittingStatus.current = false
        })
    }, [data]);

    return (
        <div className="app">
            <Edit add={setData} submittingStatus={submittingStatus} />
            <List listData={data} deleteData={setData} submittingStatus={submittingStatus} />
        </div>
    );
};

export default Home;
