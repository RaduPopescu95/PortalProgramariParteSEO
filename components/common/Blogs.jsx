import Link from "next/link";
import blogs from "../../data/blogs";
import Image from "next/image";
import { replaceSpacesWithDashes } from "@/utils/strintText";

const Blogs = ({ articole }) => {
  console.log("blog....test...", articole);
  return (
    <>
      {articole.slice(0, 3).map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link
                href={`/blog/${item.id}-${replaceSpacesWithDashes(
                  item.siteName
                )}`}
              >
                <Image
                  width={343}
                  height={220}
                  className="img-whp cover"
                  src={item.image.finalUri}
                  alt="bh1.jpg"
                />
              </Link>
            </div>
            <div className="details">
              <div className="tc_content p15">
                <h4>
                  <Link
                    href={`/blog/${item.id}-${replaceSpacesWithDashes(
                      item.siteName
                    )}`}
                  >
                    {item?.siteName}
                  </Link>
                </h4>
                <ul className="bpg_meta">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="flaticon-calendar"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{item?.firstUploadDate}</a>
                  </li>
                </ul>
                <p>{item?.metaDescription.slice(0, 65)}</p>
              </div>
              {/* End . tc_content */}

              <div className="fp_footer">
                <ul className="fp_meta float-start mb0"></ul>
                <Link
                  className="fp_pdate float-end text-thm"
                  href={`/blog/${item.id}-${replaceSpacesWithDashes(
                    item.siteName
                  )}`}
                >
                  Citește mai mullt <span className="flaticon-next ml10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
