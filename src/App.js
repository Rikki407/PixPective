import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import { UrlProvider } from './UrlContext';
import Background from './bg.png';

function App() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div
            className="App"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <UrlProvider>
                <Title />
                <UploadForm />
                <ImageGrid setSelectedImg={setSelectedImg} />
                {selectedImg && (
                    <Modal
                        selectedImg={selectedImg}
                        setSelectedImg={setSelectedImg}
                    />
                )}
            </UrlProvider>
        </div>
    );
}

export default App;
