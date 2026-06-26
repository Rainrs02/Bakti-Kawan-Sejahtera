// lib/store/consultationStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ConsultationState } from '@/types/consultation'

export const useConsultationStore = create<ConsultationState>()(
  persist(
    (set) => ({
      formData: {},
      step: 1,
      isSubmitting: false,
      isSubmitted: false,

      setFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),

      setStep: (step) => set({ step }),

      setSubmitting: (isSubmitting) => set({ isSubmitting }),

      setSubmitted: (isSubmitted) => set({ isSubmitted }),

      reset: () =>
        set({
          formData: {},
          step: 1,
          isSubmitting: false,
          isSubmitted: false,
        }),
    }),
    {
      name: 'bks-consultation',
      partialize: (state) => ({ formData: state.formData, step: state.step }),
    }
  )
)
