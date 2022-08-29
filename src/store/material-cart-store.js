import React from "react";

const MaterialCartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addMaterialItem: (materialItem) =>{},
    removeMaterialItem: (id) => {}
})

export default MaterialCartContext