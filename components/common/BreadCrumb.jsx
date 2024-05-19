"use client";

import { formatPathname } from "@/utils/commonUtils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumb = ({ title = "", subTitle = "", csName }) => {
  const pathname = usePathname();
  const formattedPathname = formatPathname(pathname);
  return (
    <>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/" className={csName}>
            Acasă
          </Link>
        </li>
        <li className={`breadcrumb-item active ${csName}`} aria-current="page">
          {Array.isArray(formattedPathname)
            ? formattedPathname.join(" > ")
            : formattedPathname}
        </li>
      </ol>
    </>
  );
};

export default BreadCrumb;
