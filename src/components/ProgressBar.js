import React, { useContext, useEffect } from 'react';
import useImgur from '../hooks/useImgur';
import { UrlContext } from '../UrlContext';

const ProgressBar = ({ file, setFile }) => {
    const [urlList, setUrlList] = useContext(UrlContext);
    console.log(urlList, setUrlList);
    const { url, progress } = useImgur(file);
    useEffect(() => {
        if (url) {
            setUrlList((prevList) => {
                localStorage.setItem(
                    'urls',
                    JSON.stringify([url, ...prevList])
                );
                return [url, ...prevList];
            });
            setFile(null);
        }
    }, [url, setFile]);
    return (
        <div className="progress-bar" style={{ width: progress + '%' }}></div>
    );
};

export default ProgressBar;
