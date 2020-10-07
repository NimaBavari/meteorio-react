import React, { useState } from 'react';

export const ErrorTextShownContext = React.createContext(false);
export const LoadingImageContext = React.createContext(false);
export const SearchInputValueContext = React.createContext('');
export const SearchResultsContext = React.createContext({});

const Store = ({ children }) => (
    <SearchInputValueContext.Provider value={useState('')}>
        <LoadingImageContext.Provider value={useState(false)}>
            <ErrorTextShownContext.Provider value={useState(false)}>
                <SearchResultsContext.Provider value={useState({})}>
                    {children}
                </SearchResultsContext.Provider>
            </ErrorTextShownContext.Provider>
        </LoadingImageContext.Provider>
    </SearchInputValueContext.Provider>
);

export default Store;
