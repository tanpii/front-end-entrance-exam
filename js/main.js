document.getElementById('download-btn').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF('p', 'mm', 'a4');

  html2canvas(document.querySelector('#resume'), {
    useCORS: true,
    scale: 2
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    doc.save('resume.pdf');
  });
});