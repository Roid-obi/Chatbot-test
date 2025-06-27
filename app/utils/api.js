export const fetchQwenResponse = async (userInput) => {
    const OPENROUTER_API_KEY = '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'; // contohdiamazon@
    // const OPENROUTER_API_KEY = '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'; // hiloapukat@
    // const OPENROUTER_API_KEY = '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'; // roidrobih@
    const YOUR_SITE_URL = 'https://www.yoursite.com'; // Ganti dengan URL situs Anda
    const YOUR_SITE_NAME = 'Your Site Name'; // Ganti dengan nama situs Anda

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions ', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${OPENROUTER_API_KEY}`,
                'HTTP-Referer': YOUR_SITE_URL,
                'X-Title': YOUR_SITE_NAME,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'deepseek/deepseek-r1-0528-qwen3-8b:free',
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