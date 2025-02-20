const Header = () => {
  return (
    <header className="hireMeDiv fixed right-0 top-0 z-50 flex items-center justify-end p-6 sm:p-8 sm:py-10 md:p-10">
      <button
        className="hireMeText bg-black text-white border-[4px] text-xl lg:text-sm px-6 py-2 rounded-full
        hover:bg-gray-700 hover:scale-105 transition-all duration-300 ease-in-out"
        aria-label="Hire Me"
      >
        <a
          href="https://www.linkedin.com/in/rahul-pal-61446a333/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Rahul Pal on LinkedIn"
        >
          Hire Me
        </a>
      </button>
      <i
        className="ri-color-filter-fill hidden sm:block text-4xl sm:text-5xl md:text-4xl ml-3 md:ml-2 text-gray-200 
        transition-transform duration-300 ease-in-out hover:rotate-90"
        aria-hidden="true"
      ></i>
    </header>
  );
};

export default Header;
