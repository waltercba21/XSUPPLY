import React from "react";
import LastProductInDb from "./LastProductInDb";
import BrandCard from "./BrandCard";

function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      <LastProductInDb />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}
      <BrandCard />
    </div>
  );
}

export default ContentRowCenter;
