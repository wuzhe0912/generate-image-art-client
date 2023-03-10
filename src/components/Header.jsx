import { useState } from 'react';

const Header = ({ setListImages, setIsLoading, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      let url =
        import.meta.env.VITE_NODE_ENV === 'production'
          ? `${import.meta.env.VITE_PROD_URL}/openai/images`
          : 'http://localhost:5500/openai/images';

      let options = {
        ...postOptions,
        body: JSON.stringify({
          prompt,
        }),
      };

      const response = await fetch(url, options);
      const imageData = await response.json();
      setListImages(imageData.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
            <button
              type='submit'
              className='absolute top-0 right-0 mt-2 mr-4'
              disabled={isLoading}
            >
              {isLoading ? (
                <div className='flex'>
                  <svg
                    className='w-6 h-6 mr-2 text-gray-200 animate-spin  fill-primary'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='currentColor'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentFill'
                    />
                  </svg>
                  <p className='text-primary'>Generating...</p>
                </div>
              ) : (
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
              )}
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
