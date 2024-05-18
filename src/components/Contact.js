import React, { useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { data: formData };
        console.log('Payload:', payload);
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };
        console.log('Request:', request);
        try {
            const response = await fetch('https://passionate-fruit-347d6d7acb.strapiapp.com/api/messages', request);
            console.log('Response:', response);
            if (response.ok) {
                console.log('Email sent');
            } else {
                const errorData = await response.json();
                console.error('Error response:', errorData);
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="container mx-auto p-4">
            <h2 className="dark:text-blue-300 mb-4 transition duration-300">Contact</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="dark:text-blue-200 block text-gray-700 transition duration-300">Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="rounded dark:border-gray-700 dark:bg-gray-600 w-full border border-gray-300 p-2 transition duration-300" />
                </div>
                <div>
                    <label className="dark:text-blue-200 block text-gray-700 transition duration-300">Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="rounded dark:border-gray-700 dark:bg-gray-600 w-full border border-gray-300 p-2 transition duration-300" />
                </div>
                <div>
                    <label className="dark:text-blue-200 block text-gray-700 transition duration-300">Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} className="rounded dark:border-gray-700 dark:bg-gray-600 w-full border border-gray-300 p-2 transition duration-300" />
                </div>
                <button type="submit" className="rounded dark:bg-blue-800 bg-blue-500 text-white px-4 py-2 transition duration-300">Submit</button>
            </form>
        </div >
    )
};

export default Contact;

