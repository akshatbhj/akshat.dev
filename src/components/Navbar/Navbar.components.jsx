function Navbar() {
  return (
    <nav className="bg-[#212529]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-[#f8f9fa] text-2xl font-VT323 mt-4 cursor-grab">
            akshatbhj<span className="text-[#ffd700]" >.dev</span>
          </div>
          <div className="hidden md:flex space-x-12 font-VT323">
            <a href="#" className="text-[#f8f9fa] text-2xl mt-4 hover:underline">
              home<span className="text-[#ffd700]" >()</span>
            </a>
            <a href="#" className="text-[#f8f9fa] text-2xl mt-4 hover:underline">
              projects<span className="text-[#ffd700]" >()</span>
            </a>
            <a href="#" className="text-[#f8f9fa] text-2xl mt-4 hover:underline">
              contact<span className="text-[#ffd700]" >()</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
