import { Button, Stack, TextField } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
    //js code
    const [interest, setInterest] = useState(0);
    const [principle, setPrinciple] = useState(0);
    const [rate, setRate] = useState(0);
    const [year, setYear] = useState(0);
    const [isPriniple, setIsPrinciple] = useState(true);
    const [isRate, setIsRate] = useState(true);
    const [isYear, setIsYear] = useState(true);

    const validate = (e) => {
        const { name, value } = e.target;
        if (!!value.match(/[0-9]*.?[0-9]+$/)) {
            if (name === "principle") {
                setPrinciple(value);
                setIsPrinciple(true);
            } else if (name === "rate") {
                setRate(value);
                setIsRate(true);
            } else if (name === "year") {
                setYear(value);
                setIsYear(true);
            }
        } else {
            if (name === "principle") {
                setPrinciple(value);
                setIsPrinciple(false);
            } else if (name === "rate") {
                setRate(value);
                setIsRate(false);
            } else if (name === "year") {
                setYear(value);
                setIsYear(false);
            }
        }
    };

    const handleCalculate = (e) => {
        e.preventDefault();
        if (!principle || !rate || !year) {
            alert("Please fill the form");
        } else {
            setInterest((principle * rate * year) / 100);
        }
    };

    const handleReset = (e) => {
        setPrinciple(0);
        setRate(0);
        setYear(0);
        setInterest(0);
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center w-100 bg-black"
            style={{ height: "100vh" }}
        >
            <div className="bg-white p-5 rounded" style={{ width: "500px" }}>
                <h1>Simle Interest App</h1>
                <p>Calculate your Simple Interest Easily</p>
                <div
                    style={{ height: "150px" }}
                    className="bg-warning rounded flex-column d-flex justify-content-center align-items-center w-100"
                >
                    <h1>₹ {`${interest}`} </h1>
                    <p>Total Simple Interest</p>
                </div>
                <form className="mt-4" onSubmit={handleCalculate}>
                    <div className="mb-3">
                        <TextField
                            className="w-100"
                            name="principle"
                            id="outlined-basic"
                            label="₹ Principal Amount"
                            variant="outlined"
                            value={principle || " "}
                            onChange={(e) => validate(e)}
                        />
                    </div>
                    {!isPriniple && (
                        <div>
                            <p className="text-danger">Invalid Input</p>
                        </div>
                    )}
                    <div className="mb-3">
                        <TextField
                            className="w-100"
                            name="rate"
                            id="outlined-basic"
                            label="Rate of Interest (p.a) %"
                            variant="outlined"
                            value={rate || ""}
                            onChange={(e) => validate(e)}
                        />
                    </div>
                    {!isRate && (
                        <div>
                            <p className="text-danger">Invalid Input</p>
                        </div>
                    )}
                    <div className="mb-3">
                        <TextField
                            className="w-100"
                            name="year"
                            id="outlined-basic"
                            label="Year (Yr)"
                            variant="outlined"
                            value={year || " "}
                            onChange={(e) => validate(e)}
                        />
                        {!isYear && (
                            <div>
                                <p className="text-danger">Invalid Input</p>
                            </div>
                        )}
                    </div>
                    <div className="mt-5">
                        <Stack direction="row" spacing={2}>
                            <Button
                                type="submit"
                                disabled={
                                    isPriniple && isRate && isYear
                                        ? false
                                        : true
                                }
                                className="bg-success"
                                style={{ width: "200px", height: "50px" }}
                                variant="contained"
                            >
                                Calculate
                            </Button>
                            <Button
                                onClick={handleReset}
                                style={{ width: "200px", height: "50px" }}
                                variant="outlined"
                            >
                                Reset
                            </Button>
                        </Stack>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
