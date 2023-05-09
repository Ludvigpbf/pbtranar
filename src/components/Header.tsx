import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export const Header = () => {
  return (
    <>
      <section className="header">
        <div>
          <Link to="/">PB Tränar</Link>
        </div>
        <Navbar></Navbar>
      </section>
    </>
  );
};
export default Header;
