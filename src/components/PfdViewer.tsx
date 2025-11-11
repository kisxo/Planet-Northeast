import { useEffect } from "react";

const PfdViewer = () => {
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf";

    // Ensure pdfjsLib exists
    const { pdfjsLib } = window.globalThis;
    if (!pdfjsLib) {
      console.error("pdfjsLib not found. Make sure PDF.js script is included in index.html");
      return;
    }

    // Correct worker
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/5.4.296/pdf.worker.min.js";

    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(
      function (pdf) {
        console.log("PDF loaded");

        const pageNumber = 1;
        pdf.getPage(pageNumber).then(function (page) {
          console.log("Page loaded");

          const scale = 1.3;
          const viewport = page.getViewport({ scale });

          const canvas = document.getElementById("the-canvas");
          const context = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          page.render(renderContext).promise.then(() => {
            console.log("Page rendered");
          });
        });
      },
      function (reason) {
        console.error("Error loading PDF:", reason);
      }
    );
  }, []);

  return (
    <div className="w-full flex justify-center overflow-auto">
      <canvas id="the-canvas" className="shadow-xl border rounded"></canvas>
    </div>
  );
};

export default PfdViewer;
