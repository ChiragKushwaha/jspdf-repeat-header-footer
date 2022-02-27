import jsPDF from 'jspdf';
import showContent from './show-content';
import showFooter from './show-footer';
import showHeader from './show-header';
import showPdfPreview from './show-pdf-preview';

export default function jsPdfGenerator() {
  const doc = new jsPDF('portrait');
  //   const docHeight = doc.internal.pageSize.height;
  //   const docWidth = doc.internal.pageSize.width;
  // const totalPages = doc.internal.pages.length;
  // for (let page = 0; page < totalPages; page++) {
  showHeader(doc);
  showContent(doc);
  showFooter(doc);
  // }
  showPdfPreview(doc);
}
