interface navProps{
  counter:number,
  bgColor:string,
}
const Navbar: React.FC<navProps> = ({counter,bgColor}) => {
  return (
    <nav className={`bg-${bgColor} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-sans">My Navbar</h1>
        <ul className="flex space-x-4 px-12">
          <li>
            <a href="#" className="text-gray hover:text-cyan">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray hover:text-cyan">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray hover:text-cyan">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className='text-white'>
        Counter is {counter}
      </div>
    </nav>
  );
};

export default Navbar;
