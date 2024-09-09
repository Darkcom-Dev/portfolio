console.log("current_language: " + currentLanguage + "...");

function downloadPDF() {
  if (currentLanguage === "es") {
    //Download file static/docs/en-cv.pdf
    window.location.href = "static/docs/es-cv.pdf";
  } else {
    //Download file static/docs/en-cv.pdf
    window.location.href = "static/docs/en-cv.pdf";
  }
}