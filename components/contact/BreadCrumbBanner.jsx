"use client";

import { usePathname } from "next/navigation";
import BreadCrumb from "../common/BreadCrumb";
import { formatPathname } from "@/utils/commonUtils";

const BreadCrumbBanner = () => {
  const pathname = usePathname();
  const formattedPathname = formatPathname(pathname);
  return (
    <section className="inner_page_breadcrumb py-3">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              <BreadCrumb
                title="Acasă"
                subTitle={
                  Array.isArray(formattedPathname)
                    ? formattedPathname.join(" > ")
                    : formattedPathname
                }
              />
              <h4 className="breadcrumb_title">Contact</h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
