import { useEffect, useState } from 'react';
import instance from '../axiosCongig';

const useImgur = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        let data = new FormData();
        data.append('image', file);
        const options = {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total);
                setProgress(percent);
            },
        };

        instance
            .post('/image', data, options)
            .then(function (response) {
                const imgUrl = response.data.data.link;
                setUrl(imgUrl);
            })
            .catch(function (error) {
                setError(error);
                console.log(error);
            });
    }, [file]);

    return { progress, url, error };
};

export default useImgur;
