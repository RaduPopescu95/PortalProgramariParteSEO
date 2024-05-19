"use client";

import { usePathname } from "next/navigation";
import BreadCrumb from "../../common/BreadCrumb";
import { formatPathname } from "@/utils/commonUtils";

const BreadCrumbBanner = () => {
  const pathname = usePathname();
  const formattedPathname = formatPathname(pathname);
  return (
    <section className="inner_page_breadcrumb py-3 color-primary">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              <BreadCrumb
                csName={"color-white"}
                title="Acasă"
                subTitle={
                  Array.isArray(formattedPathname)
                    ? formattedPathname.join(" > ")
                    : formattedPathname
                }
              />
              <h4 className="mt10 fz30 color-white">
                {Array.isArray(formattedPathname)
                  ? formattedPathname.join(" > ")
                  : formattedPathname}
              </h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
