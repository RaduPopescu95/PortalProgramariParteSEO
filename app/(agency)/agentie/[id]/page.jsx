

import agenceis from "@/data/agency";
import AgencyDetails from "@/components/agency-details";

const AgencyDetailsDynamic = ({params}) => {
 
    const id = params.id;
    const agency = agenceis.find((item) => item.id == id) || agenceis[0]

  

  return (
    <>
      <AgencyDetails />
    </>
  );
};

export default AgencyDetailsDynamic;
