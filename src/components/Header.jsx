const Header = () => {
  return (
    // -[] is can setting custom color
    <header className='bg-gradient-to-r from-[#97D9E1] to-blue-500'>
      <div className='container mx-auto max-w-5xl px-2 py-6'>
        {/* Logo */}
        <h1 className='block font-bold text-xl'>
          GenerateImage
          <span>ART</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
