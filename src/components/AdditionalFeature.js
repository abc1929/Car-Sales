import React from "react";
import { addFeature } from "../actions/featureActions";

const AdditionalFeature = (props) => {
   return (
      <li>
         {/* Add an onClick that will let you add a feature to your car */}
         <button
            className="button"
            onClick={() => props.dispatch(addFeature(props.itemid))}
         >
            Add
         </button>
         {props.feature.name} (+{props.feature.price})
      </li>
   );
};

export default AdditionalFeature;
