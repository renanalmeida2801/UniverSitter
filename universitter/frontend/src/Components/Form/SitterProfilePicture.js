import imageProfile from "../../img/fotoPerfilCuidador.png";
import { useRef, useState } from "react";
import styles from './SitterProfilePicture.module.css';

function SitterProfilePicture({ callback, imgUrl }) {
    const inputRef = useRef(null);
    const [image, setImage] = useState(imgUrl);

    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = new Image();
                img.src = e.target.result;

                img.onload = function () {
                    // Create a canvas element to draw the resized image
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    const maxSize = 180; // Define the maximum size for the profile picture

                    // Calculate the new dimensions while maintaining the aspect ratio
                    let width = img.width;
                    let height = img.height;
                    if (width > height) {
                        if (width > maxSize) {
                            height = Math.round(height * (maxSize / width));
                            width = maxSize;
                        }
                    } else {
                        if (height > maxSize) {
                            width = Math.round(width * (maxSize / height));
                            height = maxSize;
                        }
                    }

                    // Set the canvas dimensions to the new size
                    canvas.width = width;
                    canvas.height = height;

                    // Draw the resized image on the canvas
                    ctx.drawImage(img, 0, 0, width, height);

                    // Convert the canvas to a data URL and set it as the image source
                    const resizedImageURL = canvas.toDataURL('image/jpeg');
                    setImage(resizedImageURL);
                };
            };
            reader.readAsDataURL(file);
            callback(file);

            // Pass the file to the callback for uploading
        }
    };

    return (
        <div className={styles.picture} onClick={handleImageClick}>
            <img className={styles.img} src={image || imageProfile} alt="Profile" />
            <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
        </div>
    );
}

export default SitterProfilePicture;
