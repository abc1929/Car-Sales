import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";

const AdditionalFeatures = (props) => {
   return (
      <div className="content">
         <h4>Additional Features</h4>
         {props.additionalFeatures.length ? (
            <ol type="1">
               {props.additionalFeatures.map((item) => (
                  <AdditionalFeature
                     key={item.id}
                     itemid={item.id}
                     feature={item}
                     dispatch={props.dispatch}
                  />
               ))}
            </ol>
         ) : (
            <p>Nice looking car!</p>
         )}
      </div>
   );
};

export default AdditionalFeatures;
