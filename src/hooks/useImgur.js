import { useEffect, useState } from 'react';
import instance from '../axiosCongig';

const useImgur = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        if (file) {
            let data = new FormData();
            data.append('image', file);
            const options = {
                onUploadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;
                    let percent = Math.floor((loaded * 100) / total);
                    console.log(`${loaded}kb of ${total}kb | ${percent}%`);
                    setProgress(percent);
                },
            };
            instance
                .post('/image', data, options)
                .then(function (response) {
                    setUrl(response.data.data.link);
                    console.log(response.data.data.link);
                })
                .catch(function (error) {
                    setError(error);
                    console.log(error);
                });
        }
    }, [file]);

    return { progress, url, error };
};

export default useImgur;
