
import { QRCodeCanvas } from "qrcode.react";
import { IoMdClose } from "react-icons/io";
import React, { useRef } from "react";

const Qrwindow = ({value,handleClose}) => {
  const qrRef = useRef(null);

  const handleDownload = () => {
   

    const canvas = qrRef.current;
   
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = 'qrcode.png';
      link.click();
    }
  };
  return (
    <div
      id="Qrwindow"
      className="h-[90vh] w-[90%] md:w-[70%] lg:w-[50%] border-none rounded-md bg-zinc-200 backdrop-blur-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-6 md:p-10 shadow-lg"
    >
      {/* Close Button */}
      <div
        className="absolute top-4 right-4 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-red-600 transition-transform duration-300 hover:rotate-180"

        onClick={handleClose}
      >
        <IoMdClose size={28} />
      </div>

      {/* QR Code */}
      <div className="p-4 border-2 rounded-md">
        <QRCodeCanvas value={value} size={220}  ref={qrRef} />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full  justify-center">
        <button
         className="bg-blue-500 w-full lg:w-1/4 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
         onClick={()=>handleDownload()}
         >
          Download
        </button>
        <button className="bg-blue-500 w-full lg:w-1/4 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        
        onClick={handleClose}>
          Close
        </button>
      </div>


    
    </div>
  );
};

export default Qrwindow;
