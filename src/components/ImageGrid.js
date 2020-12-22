import React, { useContext } from 'react';
import { UrlContext } from '../UrlContext';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    const [urlList, setUrlList] = useContext(UrlContext);
    return (
        <div className="img-grid">
            {urlList.map((url) => (
                <motion.div
                    className="img-wrap"
                    key={url}
                    onClick={() => setSelectedImg(url)}
                    layout
                    whileHover={{ opacity: 1 }}
                >
                    <motion.img
                        src={url}
                        alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default ImageGrid;
