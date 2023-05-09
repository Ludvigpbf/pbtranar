import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" id="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" id="blog">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/food" id="food">
            Food
          </Link>
        </li>
        <li>
          <Link to="/about" id="about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
