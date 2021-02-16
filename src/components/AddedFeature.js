import React from "react";
import { removeFeature } from "../actions/featureActions";

const AddedFeature = (props) => {
   return (
      <li>
         {/* Add an onClick to run a function to remove a feature */}
         <button
            className="button"
            onClick={() => props.dispatch(removeFeature(props.itemid))}
         >
            X
         </button>
         {props.feature.name}
      </li>
   );
};

export default AddedFeature;
