const Navbar = () => {
  return (
    <nav className="bg-yellow-400 p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-white">Flipkart</div>
      <input
        type="text"
        placeholder="Search for products"
        className="w-1/2 px-3 py-1 rounded"
      />
      <div className="text-white font-semibold">Cart</div>
    </nav>
  );
};

export default Navbar;
