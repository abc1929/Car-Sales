import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {
   return (
      <div className="boxes">
         <div className="box">
            <Header car={props.car} />
            <AddedFeatures
               car={props.car}
               addedFeatures={props.addedFeatures}
               dispatch={props.dispatch}
            />
         </div>
         <div className="box">
            <AdditionalFeatures
               additionalFeatures={props.additionalFeatures}
               dispatch={props.dispatch}
            />
            <Total car={props.car} additionalPrice={props.additionalPrice} />
         </div>
      </div>
   );
};

const mapStateToProps = (s) => {
   return {
      additionalPrice: s.car.features.reduce((a, b) => a + b.price, 0),
      car: s.car,
      additionalFeatures: s.additionalFeatures,
      addedFeatures: s.addedFeatures,
   };
};

export default connect(mapStateToProps)(App);
