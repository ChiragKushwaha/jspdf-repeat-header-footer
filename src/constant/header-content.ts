import { HeaderContentType } from '../types/content';

const headerContent: HeaderContentType = {
  logo: {
    align: 'left',
    image: 'clinic.png',
    size: {
      w: 210,
      h: 28
    }
  },
  patient_details: [
    { key: 'Patient Name', value: 'Mr. Chirag Kushwaha' },
    { key: 'Age Gender', value: '22 Y 0 M 0 D/M' },
    { key: 'Order Id', value: '9761932' },
    { key: 'Referred By', value: '' },
    { key: 'Sample Type', value: 'WHOLE BLOOD EDTA' },
    { key: 'Visit Number', value: 'MED001.3156446' },
    { key: 'Barcode', value: 'E0100974' },
    { key: 'Sample Collected On', value: '27/Oct/2021 07:30AM' },
    { key: 'Sample Received On', value: '27/Oct/2021 07:30AM' },
    { key: 'Report Generated On', value: '27/Oct/2021 07:30AM' },
    { key: 'Sample Temprature', value: 'Maintained' },
    { key: 'Rate Type', value: 'PHARMEASY-BANGALORE' }
  ]
};

export default headerContent;
