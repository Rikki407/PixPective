import React, { useState, createContext } from 'react';

export const UrlContext = createContext();

export const UrlProvider = (props) => {
    let init = [];
    if (JSON.parse(localStorage.getItem('urls'))) {
        init = JSON.parse(localStorage.getItem('urls'));
    }
    const [urlList, setUrlList] = useState(init);

    return (
        <UrlContext.Provider value={[urlList, setUrlList]}>
            {props.children}
        </UrlContext.Provider>
    );
};
