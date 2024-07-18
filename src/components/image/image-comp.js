import image from './image.png';
import "./image.scss";

class Image {
    render() {
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Image';
        img.classList.add('image');
        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default Image;