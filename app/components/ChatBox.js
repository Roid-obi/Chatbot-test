'use client';
import { useState } from 'react';
import { marked } from 'marked';
import { fetchQwenResponse } from '../utils/api';

export default function ChatBox() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!input.trim()) {
            alert('Please enter a message.');
            return;
        }

        setLoading(true);
        setResponse('Loading...');

        try {
            const result = await fetchQwenResponse(input);
            const markdownText = result || 'No response received.';
            setResponse(marked.parse(markdownText));
        } catch (error) {
            setResponse(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your question..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
            />
            <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 disabled:bg-gray-400"
            >
                {loading ? 'Asking...' : 'Ask!'}
            </button>
            <div
                id="response"
                className="p-4 bg-gray-50 border border-gray-200 rounded-md min-h-[50px] text-gray-700"
                dangerouslySetInnerHTML={{ __html: response }}
            />
        </div>
    );
}