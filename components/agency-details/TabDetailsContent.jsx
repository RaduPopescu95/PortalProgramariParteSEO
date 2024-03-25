import Team from "../agent-view/agent-v2/Team";
import Comments from "../blog-details/Comments";
import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";
import DescriptionsText from "./DescriptionsText";
import Listings from "./Listings";

const TabDetailsContent = () => {
  return (
    <>

      <div className="tab-content" id="myTabContent2">
        <div
          className="tab-pane fade show active"
          id="description"
          role="tabpanel"
        >
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="mbp_first media">
                <div className="media-body agent-desc">
                  <DescriptionsText />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Description details content*/}

      </div>
      {/* End tab-content */}
    </>
  );
};

export default TabDetailsContent;
