export const fetchQwenResponse = async (userInput) => {
    const OPENROUTER_API_KEY = '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'; // hiloapukat@
    const YOUR_SITE_URL = 'https://www.yoursite.com'; // Ganti dengan URL situs Anda
    const YOUR_SITE_NAME = 'Your Site Name'; // Ganti dengan nama situs Anda

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${OPENROUTER_API_KEY}`,
                'HTTP-Referer': YOUR_SITE_URL,
                'X-Title': YOUR_SITE_NAME,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'qwen/qwen2.5-vl-72b-instruct:free',
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'text',
                                text: userInput,
                            },
                        ],
                    },
                ],
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch response from Qwen API');
        }

        const data = await response.json();
        return data.choices?.[0]?.message?.content || 'No response received.';
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};