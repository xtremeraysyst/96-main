import React, { useEffect, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = ({ isOpen = true }) => {
  const sigCanvas = useRef(null);

  useEffect(() => {
    if (!isOpen && sigCanvas.current) {
      sigCanvas.current.off();
    }
  }, [isOpen]);

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
    <div className="w-full sm:w-[280px] p-4 bg-white rounded-xl flex flex-col items-center space-y-4">
      <h3 className="text-md font-semibold text-gray-700">Sign below</h3>

      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{
          width: 300,
          height: 300,
          className: "border border-gray-300 rounded-md shadow-sm bg-gray-50",
        }}
      />

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
