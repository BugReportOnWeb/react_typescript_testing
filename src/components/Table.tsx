import Data from "../types/data";

interface Props {
    values: Data[] | null;
    removeValue: (id: number) => void;
}

const Table: React.FC<Props> = ({ values, removeValue }) => {
    return (
        <table className='table-fixed w-full'>
            <tr className='text-left border-b-2 border-gray-300'>
                <th className='pb-1 font-medium w-[32%]'>Name</th>
                <th className='pb-1 font-medium w-1/4'>Job</th>
                <th className='pb-1 font-medium'>Remove</th>
            </tr>
            {values && values.map((value, index) => (
                <tr key={index} >
                    <td className='py-3 pr-3'>{value.name}</td>
                    <td className='py-3 pr-3'>{value.job}</td>
                    <td className='py-3 pr-3'>
                        <button 
                            onClick={() => removeValue(value.id)}
                            className='bg-[#FF0000] rounded-md py-2 px-3 text-white hover:bg-[#DD0000]'
                        >Delete</button>
                    </td>
                </tr>
            ))}
        </table>
    )
}

export default Table;
