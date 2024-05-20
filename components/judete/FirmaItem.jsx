import Link from "next/link";

import Image from "next/image";
import { fetchLocation } from "@/app/services/geocoding";
import { handleDiacrtice, replaceSpacesWithDashes } from "@/utils/strintText";
import AgencyDetails from "@/components/agency-details";
import {
  handleQueryDoubleParam,
  handleQueryFirestore,
} from "@/utils/firestoreUtils";
import { calculateDistance } from "@/utils/commonUtils";
import PromotionSection from "../listing-style/slider-style/PromotionSection";

const FirmaItem = ({ firme, params }) => {
  let content;
  // if (params && firme.length === 0) {
  //   return <PromotionSection params={params} />;
  // }

  // if (params) {
  //   content = firme.map((item) => <AgencyDetails firma={item} />);
  // } else {
  content = firme.map((item) => (
    <div className={`${"col-md-3 col-lg-3"} `} key={item.id}>
      <div className={`feat_property home7 style4 ${undefined}`}>
        <div className="thumb">
          <Image
            width={342}
            height={220}
            className="img-whp w-100 h-100 cover"
            src={item?.imagini?.imgs[0]?.finalUri}
            alt="fp1.jpg"
          />
          <div className="thmb_cntnt">
            <ul className="tag mb0">
              <li className="list-inline-item">
                <a href="#">Promovat</a>
              </li>
              {/* <li className="list-inline-item">
                  <a href="#" className="text-capitalize">
                    {item?.featured}
                  </a>
                </li> */}
            </ul>
            {/* <ul className="icon mb0">
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
              </ul> */}

            {/* <Link
                href={`/agentie/${item?.id}`}
                className="fp_price"
              >
                ${item?.price}
                <small>/mo</small>
              </Link> */}
          </div>
        </div>
        <div className="details">
          <div className="tc_content p10">
            {/* <p className="text-thm">{item?.type}</p> */}
            <h4>
              <Link href={`/${replaceSpacesWithDashes(item?.categorie)}-${item?.localitate}`}>
                {item?.siteName}
              </Link>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Blandit turpis cursus in hac. Risus ultricies tristique nulla
              aliquet enim.
            </p>

            {/* <ul className="prop_details mb0">
                {item?.itemDetails.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">
                      {val.name}: {val.number}
                    </a>
                  </li>
                ))}
              </ul> */}
          </div>
          {/* End .tc_content */}

          <div className="fp_footer p10">
            <ul className="fp_meta float-start mb0">
              <li>
                <p>
                  <span className="flaticon-placeholder"></span>
                  {item?.adresa}
                </p>
              </li>
              {/* <li>
                  <p>{item?.distanta} metri</p>
                </li> */}
            </ul>
          </div>

          {/* End .fp_footer */}
        </div>
      </div>
    </div>
  ));
  // }

  // add length of filter items

  return <>{content}</>;
};

export default FirmaItem;
