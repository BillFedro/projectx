import React, { useState } from 'react';
import { X } from 'lucide-react';


interface RegisterModal {
    isOpen: boolean;
    onClose: () => void;
}

const RegisterModal: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, email, month, day, year);
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-black text-white p-8 rounded-2xl w-full max-w-md'></div>
            <div className='flex justify-between items-center mb-6'>
                <X className="w-6 h-6 cursor=pointer" />
                <img src="x-logo.png" alt="X logo" />
                <div className='w-6'></div>
            </div>
            <h1 className='text-3-l font-bold mb-8'>Create your account</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <input 
                    type="text"
                    placeholder='Name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full bg-black border border-gray-600 rounded p-2
                    focus:outline-none focus:border-blue-500 maxLength={50}'
                    />
                    <div className='text-right text-sm text-gray-500'>{name.length}/50</div>
                </div>
                <div className='mb-6'>
                    <input type="email" 
                    placeholder='Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full bg-black border border-gray-600 rounded p-2
                    focus:outline-none focus:border-blue-500'
                    />
                </div>
                <div className='mb-6'>
                    <label className="block text-sm mb-2">Date of birth</label>
                    <p className="text-sm text-gray-500 mb-2">
                        This will not be show publicly. Confirm your own age, 
                        even if this account is for business, a pet, or something else.
                    </p>
                    <div className='flex gap-4'>
                        <select value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        className='bg-black border border-gray-600 rounded p-2 
                        focus:outline-none focus:border-blue-500'>
                            <option value="Month"></option>
                        </select>
                        <select value={day}
                        onChange={(e) => setDay(e.target.value)}
                        className='w-1/4 bg-black border border-gray-600 rounded p-2
                        focus:outline-none focus:border-blue-500'>
                            <option value="">Day</option>
                        </select>
                        <select
                        value={year}
                         onChange={(e) => setYear(e.target.value)}
                        className="w-1/3 bg-black border border-gray-600 rounded p-2 
                        focus:outline-none focus:border-blue-500">
              
                        <option value="">Year</option>
                        </select>
                    </div>
                </div>
                <button 
                type='submit'
                className='w-full bg-white text-black font-bold py-3 rounded-full
                hover:bg-gray-200 transition duration-200'>
                    Next                   
                </button>
            </form>
            </div>
             
    ); 
};

export default RegisterModal;






   


