import React from "react";
import LoadPDF from "./LoadPDF.js";
import SearchFormCard from "./SearchFormCard.js";
import ViewFormCard from "./ViewFormCard.js";
import Navigator from "./Navigator";

const Dashboard = () => {
  return (
    <div>
      <div className="forms-card-container">
        <Navigator />
        <SearchFormCard />
        <ViewFormCard />
      </div>
    </div>
  );
};

export default Dashboard;
