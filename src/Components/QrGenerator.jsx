

const QrGenerator = ({value ,Setvalue,handleClick}) => {

   


  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-4 bg-zinc-200">
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] h-[85%] border-none rounded-lg bg-purple-100 shadow-lg p-6">
        {/* Heading */}
        <div className="heading w-full mt-4">
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] text-center text-gray-800 font-bold">
            Create Your QR Code Instantly
          </h1>
          <p className="w-full sm:w-[80%] md:w-[60%] text-[3.8vw] sm:text-[2rem] md:text-[1rem] m-auto text-center mt-4 text-gray-700">
            Generate QR codes quickly and easily! Whether it's a link, text,
            image, or contact info — create your custom QR code in seconds and
            share it with the world 😛.
          </p>
        </div>

        {/* Form */}
        <div className="form w-full sm:w-[80%] md:w-[60%] lg:w-[40%] m-auto mt-8">
          <div className="flex flex-col items-center gap-5">
            <input
     value={value}
              type="text"
              onChange={(e)=>{
                Setvalue(e.target.value)}
                }
              placeholder="Enter URL Here To Generate QR"
              className="border border-gray-500 rounded-md w-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400 transition placeholder:text-sm"
            />
            <button onClick={handleClick}
              disabled={!value} 
            className={`w-full bg-blue-400 sm:w-[80%] text-white px-6 py-2 rounded-lg transition ${
    value ? 'hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
  }`}>
              Generate QR Code
            </button>
          </div>
        </div>
   
      </div>

      <div>
        <p className="copy">@Bcoder | 2025</p>
      </div>
    </div>
  );
};

export default QrGenerator;
