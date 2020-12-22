import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import { UrlProvider } from './UrlContext';

function App() {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <div className="App">
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
