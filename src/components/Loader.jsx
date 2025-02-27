const Loader = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-white opacity-0 animate-fadeIn"
      aria-label="Loading..."
    >
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
