import React from 'react';

const SearchContext = React.createContext({
    location : "Seattle, WA",
    animal : "",
    breed : "",
    breeds : [],
    handleAnimalChange(){},
    handleBreedChange(){},
    getBreeds(){},
    handleLocationChange(){}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;