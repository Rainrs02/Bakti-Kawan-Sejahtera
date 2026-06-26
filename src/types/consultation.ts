// types/consultation.ts

export interface ConsultationFormData {
  nama: string;
  instansi: string;
  email: string;
  whatsapp: string;
  jenisLayanan: string[];
  layananLainnya?: string;
  lokasi: string;
  pesan: string;
  foto?: FileList;
}

export interface ConsultationState {
  formData: Partial<ConsultationFormData>;
  step: number;
  isSubmitting: boolean;
  isSubmitted: boolean;
  setFormData: (data: Partial<ConsultationFormData>) => void;
  setStep: (step: number) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  setSubmitted: (isSubmitted: boolean) => void;
  reset: () => void;
}
