import Link from "next/link";
import properties from "../../data/properties";
import Image from "next/image";

const HotProperties = () => {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="item">
          <div className="feat_property home7 style2">
            <div className="thumb">
              <Image
                width={364}
                height={220}
                className="img-whp w-100 h-100 cover"
                src="/assets/images/property/fp16.jpg"
                alt="fp1.jpg"
              />
              <div className="thmb_cntnt">
                <ul className="tag mb0">
                  {["Featured", "For Rent"].map((val, i) => (
                    <li className="list-inline-item" key={i}>
                      <a href="#">{val}</a>
                    </li>
                  ))}
                </ul>
                <ul className="icon mb0">
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-transfer-1"></span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-heart"></span>
                    </a>
                  </li>
                </ul>
                <a className="fp_price" href="#">
                  $2313231
                  <small>/mo</small>
                </a>
              </div>
            </div>
            <div className="details">
              <div className="tc_content">
                <p className="text-thm">tip</p>
                <h4>
                  <Link href={`/listing-details-v2/5`}>Titlu</Link>
                </h4>
                <p>
                  <span className="flaticon-placeholder"></span>
                  Locatie
                </p>

                <ul className="prop_details mb0">
                  {[
                    {
                      name: "Beds",
                      number: "4",
                    },
                    {
                      name: "Baths",
                      number: "4",
                    },
                    {
                      name: "SqFt",
                      number: "6280",
                    },
                  ].map((val, i) => (
                    <li className="list-inline-item" key={i}>
                      <a href="#">
                        {val.name}: {val.number}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotProperties;
