// Hooks
import { useState } from "react";

// Types
import Data from "./types/data";

// Components
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
    const [values, setValues] = useState<Data[] | null>(null)

    const addValue = (data: Data) => {
        setValues(prevValues => {
            return prevValues 
                ? [...prevValues, data]
                : [data];
        });
    }
    
    const removeValue = (id: number) => {
        setValues(prevValues => {
            return prevValues
                ? prevValues.filter(value => value.id != id)
                : prevValues;
        })
    }

    return (
        <div className='min-h-screen max-w-6xl mx-auto px-5'>
            <Header />
            <Table values={values} removeValue={removeValue} />
            <Form addValue={addValue} />
        </div>
    ) }

export default App;
