import React, { useContext } from 'react';
import { UrlContext } from '../UrlContext';

const ImageGrid = ({ setSelectedImg }) => {
    const [urlList, setUrlList] = useContext(UrlContext);
    return (
        <div className="img-grid">
            {urlList.map((url) => (
                <div
                    className="img-wrap"
                    key={url}
                    onClick={() => setSelectedImg(url)}
                >
                    <img src={url} alt="uploaded pic" />
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
