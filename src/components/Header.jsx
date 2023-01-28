import { useState } from 'react';

const Header = () => {
  const [prompt, setPrompt] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(prompt);

    try {
    } catch (error) {
    } finally {
      setPrompt('');
    }
  };

  return (
    // -[] is can setting custom color
    <header className='bg-gradient-to-r from-[#97D9E1] to-blue-500'>
      <div className='container mx-auto max-w-5xl px-2 py-6'>
        {/* Logo */}
        <h1 className='block font-bold text-xl'>
          GenerateImage
          <span className='text-primary'>ART</span>
        </h1>
        {/* TagLine */}
        <div className='mt-14'>
          <h2 className='font-bold text-xl max-w-xl mb-1'>
            Use the power of AI to create stunning images.
          </h2>
          <p className='font-light opacity-80 md:inline-block'>
            採用 AI 驅動的圖像生成技術，構建屬於你的圖片
          </p>
          {/* prompt input */}
          <form className='relative my-8 max-w-md' onSubmit={handleSubmit}>
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              type='text'
              className='w-full px-4 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              placeholder='Enter your prompt'
            />
            <button type='submit' className='absolute top-0 right-0 mt-2 mr-4'>
              <svg
                className='w-6 h-6 text-primary'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
