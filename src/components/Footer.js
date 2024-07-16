import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <p>Copyrights 2024 | All Rights Reserved</p>
      <ul>
        <li>
          <Link to={"https://github.com/RabbanMehamood"}> GitHub</Link>
        </li>
        <li>
          <Link
            to={"https://www.linkedin.com/in/shaik-mehamood-rabban-0b5028ba/"}
          >
            Linkedin
          </Link>
        </li>
        <li>
          <Link to={"mailto:shaik.mehamood786@gmail.com"}> Email</Link>
        </li>
        <li>
          <Link to={"tel:+918466063943"}> Call Me</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
