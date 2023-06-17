import React from "react";
import { Link } from "react-router-dom";

const NewTestament = () => {
  return (
    <div className="w-full p-2 flex flex-wrap lg:flex-row">
      <Link to="/genesis" className="w-full lg:w-1/5 h-32 bg-secondary">
        Genesis
      </Link>
    </div>
  );
};

export default NewTestament;
