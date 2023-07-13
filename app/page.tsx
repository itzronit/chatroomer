import Image from 'next/image'
import Link from 'next/link'
import ChatBubble from '@/public/conversation.png';
import Logo from '@/public/logo.webp';

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      
      <nav className="py-4 px-8 flex justify-between items-center bg-gray-800">
        {/* <Image src={Logo} alt={'CR_LOGO'} width={50} height={50} /> */}
        <h1 className="text-2xl font-bold">ChatRoomer</h1>
        <div>
          <button className="text-blue-600 text-lg mr-4 hover:bg-blue-600 hover:text-white border border-blue-600 rounded-full px-6 py-2 transition-transform duration-300 transform hover:scale-110">
            Login
          </button>
          <button className="text-white text-lg mr-4 hover:bg-blue-600 hover:text-white border border-blue-600 rounded-full px-6 py-2 transition-transform duration-300 transform hover:scale-110">
            <Link href={'/api/auth/signin'}>Register</Link>
          </button>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="max-w-lg text-center">
          <h2 className="text-2xl font-bold">Connect and Chat</h2>
          <p className="mt-4">
            ChatRoomer is designed to be user-friendly. It has a simple and intuitive interface that makes it easy to navigate and use. You can effortlessly chat with your loved ones in real-time, without needing any technical expertise. Stay connected and enjoy meaningful conversations with just a few taps on your device
          </p>
          <button className="mt-4  text-lg mr-4 bg-blue-600 text-white rounded-md px-6 py-2 transition-transform duration-300 transform hover:scale-110">
            Get Started!
          </button>
        </div>
        
        <div className="ml-8">
          <Image
            src={ChatBubble}
            alt="Chat Bubble Sample"
            width={100}
            height={100}
          />
        </div>
      </main>

      <footer className="py-4 bg-gray-800 text-center">
        <p>&copy; 2023 ChatRoomer. All rights reserved.</p>
      </footer>

    </div>
  );
}
