import Link from "next/link";
import blogs from "../../data/blogs";
import Image from "next/image";

const SectiuneIncredere = () => {
  return (
    <>
      {blogs.slice(0, 3).map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className="for_blog feat_property">
            <div className="p10">
              <Image
                src="/assets/images/pasurmat.svg" // Calea relativă la directorul public
                alt="Tooth Icon" // Adaugă un text alternativ pentru accesibilitate
                width={50} // Specifică lățimea dorită
                height={50} // Specifică înălțimea dorită
              />
            </div>
            <div className="details">
              <div className="tc_content p10">
                <h4>
                  {/* <Link href={`/blog-details/${item.id}`}>Test title</Link> */}
                  <Link href={`/`}>Test title</Link>
                </h4>
                <p className="text-thm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              {/* <div className="fp_footer">
                <ul className="fp_meta float-end pr10">
                  <li className="list-inline-item">
                    <Link href="/">{item.posterName} <span className="flaticon-right-arrow ml10"/></Link>
                  </li>
                </ul>
              
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SectiuneIncredere;
