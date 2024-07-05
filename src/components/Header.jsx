import Nav from "./Nav";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={require("../assets/logo.png")} alt="little lemon" />
      </Link>
      <Nav />
    </header>
  );
}
