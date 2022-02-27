import jsPDF from 'jspdf';

export default function showFooter(doc: jsPDF) {
  doc.text('Footer', 100, doc.internal.pageSize.height - 20, {
    align: 'center',
    renderingMode: 'fill'
  });
}
