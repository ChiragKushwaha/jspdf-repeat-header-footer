import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import showFooter from './show-footer';
import showHeader from './show-header';

export default function showContent(doc: jsPDF) {
  autoTable(doc, {
    // html: '#my-table',
    theme: 'grid',
    margin: { top: 80, bottom: 30 },
    startY: 80,
    didDrawPage: () => {
      showHeader(doc);
      showFooter(doc);
    },
    styles: {
      fontSize: 12,
      cellWidth: 'wrap'
    },
    columnStyles: {
      1: { cellWidth: 'auto' }
    },
    head: [['Test Name', 'Result', 'Unit', 'Bio. Ref. IntervalPage 1 of 15']],
    body: [
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain'],
      ['David', 'david@example.com', 'Sweden', 'Spain']
    ]
  });
}
