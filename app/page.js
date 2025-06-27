import Head from 'next/head';
import ChatBox from './components/ChatBox';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <Head>
                <title>ChatBot</title>
                <meta name="description" content="ChatBot powered by Qwen AI API" />
            </Head>

            <main className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Free ChatBot with Qwen AI
                </h1>
                <ChatBox />
            </main>
        </div>
    );
}