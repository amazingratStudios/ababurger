import React from 'react';
import './Pages.css';
import {Gallery, GalleryImage} from 'react-gesture-gallery';

const images = [process.env.PUBLIC_URL + "./img/gallery/1.png", process.env.PUBLIC_URL + "./img/gallery/2.png",
                process.env.PUBLIC_URL + "./img/gallery/3.png", process.env.PUBLIC_URL + "./img/gallery/4.png",
                process.env.PUBLIC_URL + "./img/gallery/5.png"];

function GalleryComp(props) {
  const [index, setIndex ] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
        if (index !== images.length - 1)
          setIndex(index + 1);
        else 
          setIndex(0);
      }
    , 2500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Gallery style={{width:props.w, height:props.h, marginTop:"3rem"}} index={index} onRequestChange={i => {
      setIndex(i);
    }}>
      {images.map(image => (
        <GalleryImage src={image} />
      ))}
    </Gallery>
  );
}

export default GalleryComp;