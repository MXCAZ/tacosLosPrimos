import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footer-content">
        <h3>Taqueria Los Primos</h3>
        <p>Authentic Mexican Food</p>
        <ul className="socials">
          <li>
            <a
              href="https://www.google.com/maps/place/Taqueria+Los+primos/@40.5273744,-111.8751442,17z/data=!3m1!4b1!4m6!3m5!1s0x875287c311e76b4f:0xa7cecb9f34339a5f!8m2!3d40.5273744!4d-111.8725639!16s%2Fg%2F11l1l5675_?entry=ttu"
              target="_blank"
              rel="noreferrer">
              <i className="fa-brands fa-google"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright 2023. Website design by{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/francisco-sanchez-a3717b214/"
              target="_blank"
              rel="noreferrer">
              {" "}
              Francisco Sanchez
            </a>
          </span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
