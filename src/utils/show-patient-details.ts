import { HeaderContentType } from './../types/content';
import jsPDF from 'jspdf';

export default function showPatientDetails(
  doc: jsPDF,
  patient_details: HeaderContentType['patient_details']
) {
  doc.rect(0, 28, doc.internal.pageSize.width, 40);
  const halfWay = Object.keys(patient_details).length / 2;
  const multiplier = 6;
  const offset = 28;
  doc.setFont('serif');
  doc.setFontSize(8);
  patient_details.forEach((curr, index) => {
    if (index < halfWay) {
      doc.text(curr.key, 10, 34 + index * multiplier, { maxWidth: 100 });
      doc.text(`: ${curr.value}`, 10 + offset, 34 + index * multiplier, { maxWidth: 100 });
    } else {
      doc.text(curr.key, doc.internal.pageSize.width / 2, 34 + (index - halfWay) * multiplier, {
        maxWidth: 100
      });
      doc.text(
        `: ${curr.value}`,
        doc.internal.pageSize.width / 2 + offset,
        34 + (index - halfWay) * multiplier,
        {
          maxWidth: 100
        }
      );
    }
  });
}
