import ContactWithAgent from "../../components/common/agent-view/ContactWithAgent";
import Categorie from "../../components/common/listing/Categorie";
import FeaturedListings from "../../components/common/listing/FeaturedListings";
import FeatureProperties from "../../components/common/listing/FeatureProperties";

const SidebarListings = () => {
  return (
    <div className="sidebar_listing_grid1">
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <h4 className="fz40 ml5">Contact</h4>
          <ContactWithAgent />
        </div>
      </div>
      {/* End filter and search area */}

    </div>
  );
};

export default SidebarListings;
