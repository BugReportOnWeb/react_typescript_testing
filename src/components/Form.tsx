import { SyntheticEvent, useState } from "react";
import Data from "../types/data";

interface Props {
    addValue: (data: Data) => void;
}

const Form: React.FC<Props> = ({ addValue }) => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const submitFormChanges = (e: SyntheticEvent<Element>) => {
        e.preventDefault();

        if (name.length == 0 || job.length == 0) return;

        const id = Math.floor(Math.random() * 10000) + 1
        addValue({id, name, job});

        setName('');
        setJob('');
    }

    return (
        <form className='flex flex-col gap-5 items-start mt-10'>
            <h1 className='text-3xl font-semibold text-[#404040]'>Add New</h1>

            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="name">Name</label>
                <input 
                    className='border border-[#b4b4b4] py-2 px-4 rounded-md outline-1 outline-[#b4b4b4]'
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="job">Job</label>
                <input 
                    className='border border-[#b4b4b4] py-2 px-4 rounded-md outline-1 outline-[#b4b4b4]'
                    type='text'
                    id='job'
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                />
            </div>

            <button
                className='border border-[#0366ee] bg-[#0366ee] px-6 py-3 text-white rounded-md hover:bg-[#0250bc]'
                onClick={submitFormChanges}
            >Submit</button>
        </form>
    )
}

export default Form;
