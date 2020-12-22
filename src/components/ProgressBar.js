import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
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
        <motion.div
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        ></motion.div>
    );
};

export default ProgressBar;
