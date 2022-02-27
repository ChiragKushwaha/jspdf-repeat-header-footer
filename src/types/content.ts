export type HeaderContentType = {
  logo?: {
    align: 'left' | 'right' | 'center';
    image: string;
    size: {
      w: number;
      h: number;
    };
  };
  patient_details: Array<{ key: string; value: string }>;
};
