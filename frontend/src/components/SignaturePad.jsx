import React, { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = ({ isOpen = true }) => {
  const sigCanvas = useRef(null);
  const containerRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 300, height: 200 });

  useEffect(() => {
    if (!isOpen && sigCanvas.current) {
      sigCanvas.current.off();
    }
  }, [isOpen]);

  useEffect(() => {
    const updateCanvasSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth - 32;
        const width = Math.min(Math.max(containerWidth, 250), 600); 
        const height = Math.min(width * 0.6, 300);
        setCanvasSize({ width, height });
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  const clear = () => {
    sigCanvas.current?.clear();
  };

  const save = () => {
    if (sigCanvas.current && !sigCanvas.current.isEmpty()) {
      const dataUrl = sigCanvas.current.toDataURL("image/png");
      console.log("Saved Signature:", dataUrl);
    } else {
      alert("Please sign before saving.");
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-2xl mx-auto p-4 bg-white rounded-xl flex flex-col items-center space-y-4"
    >
      <h3 className="text-md font-semibold text-gray-700">Sign below</h3>

      <div className="w-full flex justify-center">
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{
            width: canvasSize.width,
            height: canvasSize.height,
            className: "border border-gray-300 rounded-md shadow-sm bg-gray-50",
          }}
        />
      </div>

      {isOpen && (
        <div className="flex gap-4">
          <button
            onClick={clear}
            className="px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200 transition"
          >
            Clear
          </button>
          <button
            onClick={save}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default SignaturePad;
