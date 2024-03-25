import Link from "next/link";
import MobileMenuContent from "./MobileMenuContent";
import Image from "next/image";

const MobileMenu = () => {
  return (
    // <!-- Main Header Nav For Mobile -->
    <div className="stylehome1 h0 mega-menu-wrapper">
      <div className="mobile-menu">
        <div className="header stylehome1">
          <div className="main_logo_home2 text-center">
            <span className="mt20">Portal</span>
          </div>
          {/* main_logo_home2 */}

          <ul className="menu_bar_home2"></ul>
          {/* menu_bar_home2 */}
        </div>
      </div>
      {/* <!-- /.mobile-menu --> */}
    </div>
  );
};

export default MobileMenu;
