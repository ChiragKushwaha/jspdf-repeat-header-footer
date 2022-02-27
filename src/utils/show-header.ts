import jsPDF from 'jspdf';
import headerContent from '../constant/header-content';
import showLogo from './show-logo';
import showPatientDetails from './show-patient-details';

export default function showHeader(doc: jsPDF) {
  const { logo, patient_details } = headerContent;

  showLogo(doc, logo);
  showPatientDetails(doc, patient_details);

  doc.setFontSize(11);
  doc.text('DEPARTMENT OF HEMATOLOGY', 100, 72, { align: 'center', renderingMode: 'fill' });
  doc.text(' COMPREHENSIVE FULL BODY CHECKUP WITH VITAMIN D & B12', 100, 77, {
    align: 'center',
    renderingMode: 'fill'
  });
}
