import jsPDF from 'jspdf';

export default function showPdfPreview(doc: jsPDF) {
  const string = doc.output('datauristring');
  const embed = `<embed width='100%' height='100%' src='${string}'/>`;
  const x = document.getElementById('preview') as HTMLElement;
  x.innerHTML = embed;
}
