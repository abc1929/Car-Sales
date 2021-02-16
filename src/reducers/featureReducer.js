import {} from "../actions/featureActions";

export const initialState = {
   additionalPrice: 0,
   car: {
      price: 26395,
      name: "2019 Ford Mustang",
      image:
         "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: [],
   },
   additionalFeatures: [
      { id: 1, name: "V-6 engine", price: 1500 },
      { id: 2, name: "Racing detail package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 500 },
      { id: 4, name: "Rear spoiler", price: 250 },
   ],
};

export const featureReducer = (state = initialState, action) => {
   const addedFeature = (id) => {
      // remove the feature from additional feature
      // add it to car.features
      // return the new state
      const newAdditionalFeatures = state.additionalFeatures.filter(
         (i) => i.id !== id
      );
      const newFeatures = state.car.features.concat(
         state.additionalFeatures.filter((i) => i.id === id)
      );

      // console.log(state.car.features.reduce((a, b) => a + b.price, 0));
      return {
         ...state,
         car: { ...state.car, features: newFeatures },
         additionalFeatures: newAdditionalFeatures,
      };
   };

   const removedFeature = (id) => {
      // Inverse of the above
      const newAdditionalFeatures = state.additionalFeatures.concat(
         state.car.features.filter((i) => i.id === id)
      );

      const newFeatures = state.car.features.filter((i) => i.id !== id);

      return {
         ...state,

         car: { ...state.car, features: newFeatures },
         additionalFeatures: newAdditionalFeatures,
      };
   };

   switch (action.type) {
      case "ADD_FEATURE":
         return addedFeature(action.payload);

      case "REMOVE_FEATURE":
         return removedFeature(action.payload);

      default:
         return state;
   }
};
