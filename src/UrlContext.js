import React, { useState, createContext } from 'react';

export const UrlContext = createContext();

export const UrlProvider = (props) => {
    let init = [
        'https://i.imgur.com/jwrT7ig.jpg',
        'https://i.imgur.com/drw85q3.jpg',
        'https://i.imgur.com/JAd9Wjf.jpg',
        'https://i.imgur.com/xQbpaDC.jpg',
        'https://i.imgur.com/xIFPaOo.jpg',
        'https://i.imgur.com/faLrovD.jpg',
        'https://i.imgur.com/jYqN5HX.jpg',
        'https://i.imgur.com/x8RTgjW.jpg',
        'https://i.imgur.com/h5s4WnW.jpg',
    ];
    if (JSON.parse(localStorage.getItem('urls'))) {
        init = JSON.parse(localStorage.getItem('urls'));
    } else {
        localStorage.setItem('urls', JSON.stringify(init));
    }
    const [urlList, setUrlList] = useState(init);

    return (
        <UrlContext.Provider value={[urlList, setUrlList]}>
            {props.children}
        </UrlContext.Provider>
    );
};
