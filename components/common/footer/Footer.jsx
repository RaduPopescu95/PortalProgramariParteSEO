import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";
import LinkInstitutii from "./LinkInstitutii";
import Image from "next/image";
import Button from "../CommonButton";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-5 col-xl-5 pr0 pl0">
        <div className="footer_about_widget">
          <Image
            src="/assets/categorii/amenajari-gradini-si-spatii-verzi.svg" // Calea relativă la directorul public
            alt="Tooth Icon" // Adaugă un text alternativ pentru accesibilitate
            width={50} // Specifică lățimea dorită
            height={50} // Specifică înălțimea dorită
          />
          <p>
            Suntem convinsi ca atentia la detalii face diferenta, aspect ce ne-a
            permis sa impresionam constant partenerii cu amenajari peisagistice
            impecabile, durabile si sustenabile. Toti membrii echipei Eco Garden
            Construct sunt selectati riguros pe baza pasiunii pentru detalii si
            estetica, oferind clientilor servicii de cea mai inalta calitate,
            realizate cu profesionalism si dedicare, pentru a raspunde pe deplin
            nevoilor si cerintelor specifice fiecaruia.
          </p>
          <div className="mt20">
            <p className="fz20 txt-color-third">
              <i className="fa fa-envelope-o mr10"></i>
              <strong>Email</strong> -{" "}
              <a href="mailto:contact@domain.ro" style={{ color: "white" }}>
                contact@domain.ro
              </a>
            </p>
            <p className="fz20 txt-color-third">
              <i className="fa fa-map-marker mr10"></i>
              <strong>Ne poti gasi pe</strong> - ....
            </p>
          </div>

          <div className="mt20">
            <p className="fz20 txt-color-third">
              Sau ne poti scrie pe email sau poti completa un formular de
              contact
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-start gap-3 w-100 mb-10 mt10">
              <Button
                className="btnGeneralFooter"
                style={{
                  minWidth: "calc(30% - 10px)",
                  maxWidth: "calc(60% - 10px)",
                }}
                navigare={"mailto:contact@domain.ro"}
              >
                <i class="fa fa-envelope mr7"></i> E-mail
              </Button>
              <Button
                className="btnSecondary btnGeneralFooter"
                style={{
                  minWidth: "calc(30% - 10px)",
                  maxWidth: "calc(60% - 10px)",
                }}
                navigare={"contact"}
              >
                <i class="fa fa-paper-plane mr7"></i> Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-5 col-md-5 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h3>Info portal</h3>
          <ul className="list-unstyled">
            <li>
              <Link href="/">Info portal</Link>
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

      <div className="col-sm-7 col-md-7 col-lg-4 col-xl-4">
        <div className="footer_qlink_widget">
          <h3>Caută și Contactează Firma Apropiată</h3>
          <p>
            Gaseste cea mai apropiata firma in functie de orasul in care te
            afli. Noteaza-l in caseta de cautare de mai jos si intra in contact.
          </p>
          <div className="form-group mb25">
            <div className="input-group">
              <input
                type="text"
                className="form-control pr-5"
                placeholder="Nume firma..."
                // onChange={(e) => dispatch(addKeyword(e.target.value))}
              />
              <button
                className="btn btn-outline-secondary position-absolute"
                style={{ right: 0, top: 0, height: "100%", zIndex: 10 }}
                type="button"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="copyright-widget mb25">
          <p>
            &copy; {new Date().getFullYear()} by <span>titlu</span>. Toate
            drepturile rezervate.
          </p>
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

      {/* <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="footer_social_widget d-flex flex-column align-items-center text-center mt30">
          <ul className="mb30 list-unstyled">
            <Social />
          </ul>
          <LinkInstitutii />
        </div>
      </div> */}
    </>
  );
};

export default Footer;
