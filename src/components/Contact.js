import React, { useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        const payload = { data: formData };
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };
        try {
            const response = await fetch('https://passionate-fruit-347d6d7acb.strapiapp.com/api/messages', request);
            if (response.ok) {
                setIsSubmitted(true);
            } else {
                setError('Failed to send message.');
            }
        } catch (error) {
            setError('An error occurred while sending the message.');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="container mx-auto p-4">
            <h2 className="mb-4">Contact</h2>
            {isSubmitted ? (<div className="flex flex-col space-y-4">
                <h2>Thank you!</h2>
                <p>Your message has been sent successfully.</p>
            </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="rounded w-full border border-gray-300 p-2" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="rounded w-full border border-gray-300 p-2" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Message:</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} className="rounded w-full border border-gray-300 p-2" />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="rounded bg-blue-500 text-white px-4 py-2">
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            )}
        </div>
    )
};

export default Contact;

