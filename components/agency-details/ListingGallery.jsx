'use client'

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import propertiesContent from "../../data/properties";
import Image from "next/image";

const ListingGallery = () => {
  return (
    <>
      <Gallery>
        {propertiesContent.slice(1,2).map((singleItem) => (
          <div key={singleItem.id}>
   
            <div className="row">
              <div className="col-sm-7 col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="spls_style_two mb30-520">
                      <Item
                        original={singleItem.img}
                        thumbnail={singleItem.img}
                        width={752}
                        height={450}
                      >
                        {({ ref, open }) => (
                          <div role="button" ref={ref} onClick={open}>
                            <Image
                              width={752}
                              height={450}
                              className="img-fluid w100 lds-1 cover h-100"
                              src={singleItem.img}
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
                  {singleItem.imgList.map((val, i) => (
                    <div className="col-6" key={i}>
                      <div className="spls_style_two img-gallery-box mb24">
                        <Item
                          original={val}
                          thumbnail={val}
                          width={752}
                          height={450}
                        >
                          {({ ref, open }) => (
                            <div role="button" ref={ref} onClick={open}>
                              <Image
                                width={170}
                                height={133}
                                className="img-fluid w100  cover"
                                src={val}
                                alt="2.jpg"
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* End  col-sm-5 col-lg-4 */}
            </div>
            {/* End .row */}
          </div>
          // End single item loop
        ))}
      </Gallery>
    </>
  );
};

export default ListingGallery;
