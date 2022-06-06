import { useState, useCallback, useEffect } from "react";
import Cropper from "react-easy-crop";
const b64toBlob = require("b64-to-blob");

const ProductImageCropper = (props) => {
  const file = props.file;
  const [loadedImageSrc, setLoadedImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropSize, setCropSize] = useState({ width: 0, height: 0 });

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCropSize(croppedAreaPixels);
  }, []);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setLoadedImageSrc(url);
    }
  }, [file]);

  const uploadHandler = async (e) => {
    e.preventDefault();
    try {
      // create a new image to display in the canvas
      const image = new Image();
      image.src = loadedImageSrc;
      const canvas = document.createElement("canvas");
      canvas.width = 400;
      canvas.height = 400;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        image,
        cropSize.x,
        cropSize.y,
        cropSize.width,
        cropSize.height,
        0,
        0,
        400,
        400
      );
      let base64Image = canvas.toDataURL("image/jpeg", 1);
      base64Image = base64Image.replace(/^data:image\/jpeg;base64,/, "");
      const contentType = file.type;
      const newFile = new File(
        [b64toBlob(base64Image, contentType)],
        file.name,
        {
          type: contentType,
        }
      );
      props.setNewFile(newFile);
      props.handleClose();
    } catch (err) {
      console.log(err.message);
    }
  };

  const closeHandler = () => {
    props.setNewFile(null);
    props.handleClose();
  };

  return (
    <>
      <div className='crop-container z-50'>
        <div className='absolute top-0 bottom-0 left-0 right-0 md:top-36 md:bottom-36 md:right-40 md:left-40'>
          <Cropper
            image={loadedImageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1 / 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
          <div className='flex items-center absolute bottom-0 right-0 left-0 md:right-40 md:left-40 bg-gray-50 rounded-lg p-2'>
            <input
              type='range'
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby='Zoom'
              onChange={(e) => {
                setZoom(e.target.value);
              }}
              className='zoom-range-control'
            />
            <button
              onClick={uploadHandler}
              className='ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'
            >
              Crop
            </button>
            <button
              onClick={closeHandler}
              className='ml-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImageCropper;
