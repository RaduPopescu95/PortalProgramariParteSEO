"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import propertiesContent from "../../data/properties";
import Image from "next/image";

const ListingGallery = ({ firma }) => {
  console.log("test........", firma);
  return (
    <>
      <Gallery>
        <div>
          <div className="row">
            <div className="col-sm-7 col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  <div className="spls_style_two mb30-520">
                    <Item
                      original={firma?.imagini?.imgs[0].finalUri}
                      thumbnail={firma?.imagini?.imgs[0].finalUri}
                      width={752}
                      height={450}
                    >
                      {({ ref, open }) => (
                        <div role="button" ref={ref} onClick={open}>
                          <Image
                            width={752}
                            height={450}
                            className="img-fluid w100 lds-1 cover h-100"
                            src={firma?.imagini?.imgs[0].finalUri}
                            alt="1.jpg"
                          />
                        </div>
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col-sm-7 .col-lg-8 */}

            <div className="col-sm-5 col-lg-4">
              <div className="row">
                {firma?.imagini?.imgs.map((val, i) => {
                  // Skip the first item (index 0)
                  if (i === 0) return null;

                  return (
                    <div className="col-6" key={i}>
                      <div className="spls_style_two img-gallery-box mb24">
                        <Item
                          original={val.finalUri}
                          thumbnail={val.finalUri}
                          width={752}
                          height={450}
                        >
                          {({ ref, open }) => (
                            <div role="button" ref={ref} onClick={open}>
                              <Image
                                width={170}
                                height={133}
                                className="img-fluid w100 cover"
                                src={val.finalUri}
                                alt="Gallery image"
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* End  col-sm-5 col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* // End single item loop */}
      </Gallery>
    </>
  );
};

export default ListingGallery;
