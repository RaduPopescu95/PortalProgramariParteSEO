import Link from "next/link";
import blogs from "../../data/blogs";
import Image from "next/image";

const Blogs = () => {
  return (
    <>
      {blogs.slice(0, 3).map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/blog-details/${item.id}`}>
                <Image
                  width={343}
                  height={220}
                  className="img-whp w-100 h-100 cover"
                  src={item.img}
                  alt="bh1.jpg"
                />
              </Link>
            </div>
            <div className="details">
              <div className="tc_content p10">
                <h4>
                  <Link href={`/blog-details/${item.id}`}>Test title</Link>
                </h4>
                <p className="text-thm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="fp_footer">
                <ul className="fp_meta float-end pr10">
                  <li className="list-inline-item">
                    <Link className="fp_pdate float-end text-thm" href={`/blog-details/${item.id}`}>{item.posterName} <span className="flaticon-next ml10"/></Link>
                  </li>

                </ul>
              
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
