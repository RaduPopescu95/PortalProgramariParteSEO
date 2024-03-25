import Link from "next/link";
import featureContent from "../../../data/properties";
import Image from "next/image";
import blogContent from "../../../data/blogs";

const FeaturedListings = () => {
  return (
    <>
      {blogContent.slice(1, 3).map((item) => (
        <div className="media d-flex" key={item.id}>
          <Link href={`/listing-details-v1/${item.id}`}>
            <Image
              width={102}
              height={80}
              className="align-self-start me-3 w-100 h-100 cover"
              src={item.img}
              alt="featured listing image"
            />
          </Link>

          <div className="media-body">
            <h5 className="mt-0 post_title">
              <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
            </h5>
            <Link href={`/blog-details/${item.id}`} className="txt-color-secondary">
              {item.postedDate}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
