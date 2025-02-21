import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://bjaj-finance-22ub3xc5t-prachi-sharmas-projects-4a9e8849.vercel.app/bfhl";

function App() {
    const [jsonInput, setJsonInput] = useState("");
    const [response, setResponse] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleSubmit = async () => {
        try {
            const parsedInput = JSON.parse(jsonInput);
            const res = await axios.post(API_URL, parsedInput);
            setResponse(res.data);
        } catch (error) {
            alert("Invalid JSON or API Error");
        }
    };

    return (
        <div className="App">
            <h1>Bajaj Finserv Health Dev Challenge</h1>
            <textarea
                rows="4"
                cols="50"
                placeholder='Enter JSON: {"data": ["A", "C", "z"]}'
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>

            {response && (
                <div>
                    <h3>Response:</h3>
                    <select multiple onChange={(e) => setSelectedFilters([...e.target.selectedOptions].map(o => o.value))}>
                        <option value="alphabets">Alphabets</option>
                        <option value="numbers">Numbers</option>
                        <option value="highest_alphabet">Highest Alphabet</option>
                    </select>

                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
