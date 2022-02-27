import jsPDF from 'jspdf';
import { HeaderContentType } from '../types/content';

export default function showLogo(doc: jsPDF, logo: HeaderContentType['logo']) {
  if (logo) {
    const { align, image, size } = logo;
    const { w, h } = size;
    const { x, y } = getAlignmentCoordinates(align, size);
    doc.addImage(image, x, y, w, h);
  }
}

function getAlignmentCoordinates(
  align: 'left' | 'right' | 'center',
  size: { w: number; h: number }
) {
  switch (align) {
    case 'left':
      return { x: 0, y: 0 };
    case 'right':
      return { x: 210 - size.w, y: 0 };
    case 'center':
      return { x: (210 - size.w) / 2, y: 0 };
  }
}
