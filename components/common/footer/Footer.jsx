import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";
import LinkInstitutii from "./LinkInstitutii";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 pr0 pl0">
        <div className="footer_about_widget">
          <h3>Misiunea noastra</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h3>Despre noi</h3>
          <ul className="list-unstyled">
            <li>
              <Link href="/">Despre platforma</Link>
            </li>
            <li>
              <Link href="/">Cum functioneaza?</Link>
            </li>
            <li>
              <Link href="/">Politica de cookie</Link>
            </li>
            <li>
              <Link href="/">Politica de confidentialitate</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h3>Link-uri utile</h3>
          <ul className="list-unstyled">
            <li>
              <Link href="/">Acasa</Link>
            </li>
            <li>
              <Link href="/categorie">Cauta clinic</Link>
            </li>
            <li>
              <Link href="/categorie">Clinici</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/despre-noi">Despre noi</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      {/* <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h3>Contact Us</h3>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:info@email.com">info@email.com</a>
            </li>
            <li>
              <a href="#">Collins Street West, Victoria</a>
            </li>
            <li>
              <a href="#">8007, Australia.</a>
            </li>
            <li>
              <a href="tel:+4733378901">+1 246-345-0699</a>
            </li>
            <li>
              <a href="tel:+4733378901">+1 246-345-0695</a>
            </li>
          </ul>
        </div>
      </div> */}
      {/* End .col */}

      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="footer_social_widget d-flex flex-column align-items-center text-center mt30">
          {/* <h3>Urmărește-ne</h3> */}
          <ul className="mb30 list-unstyled">
            <Social />
          </ul>
          <LinkInstitutii />
        </div>
      </div>
    </>
  );
};

export default Footer;
