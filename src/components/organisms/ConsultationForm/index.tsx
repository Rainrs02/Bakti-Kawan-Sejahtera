'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Upload, ArrowRight, Send, ChevronDown } from 'lucide-react'
import { consultationSchema, JENIS_LAYANAN_OPTIONS, type ConsultationSchema } from '@/lib/validations/consultationSchema'
import { getWALink } from '@/lib/utils/whatsapp'
import { useConsultationStore } from '@/lib/store/consultationStore'
import { X } from 'lucide-react'

const groupedOptions = JENIS_LAYANAN_OPTIONS.reduce((acc, opt) => {
  if (!acc[opt.category]) acc[opt.category] = []
  acc[opt.category].push(opt)
  return acc
}, {} as Record<string, typeof JENIS_LAYANAN_OPTIONS>)

interface ConsultationFormProps {
  initialCategory?: string
}

export default function ConsultationForm({ initialCategory }: ConsultationFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(initialCategory || 'Alat Kesehatan')
  const [files, setFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState<string>('')
  const [isUploading, setIsUploading] = useState(false)
  const { setFormData } = useConsultationStore()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    watch,
  } = useForm<ConsultationSchema>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      jenisLayanan: [],
    }
  })

  const watchJenisLayanan = watch('jenisLayanan') || []

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;

    let validFiles: File[] = [];
    let errorMessage = "";

    Array.from(selectedFiles).forEach(file => {
      const isVideo = file.type.startsWith('video/');
      const maxSize = isVideo ? 20 * 1024 * 1024 : 5 * 1024 * 1024;
      
      if (file.size > maxSize) {
        errorMessage = `File ${file.name} terlalu besar. Maks. ${isVideo ? '20MB untuk Video' : '5MB untuk Foto/PDF'}.`;
      } else {
        validFiles.push(file);
      }
    });

    if (errorMessage) {
      setFileError(errorMessage);
    } else {
      setFileError('');
    }

    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
    }
    
    e.target.value = ''; // Reset input
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: ConsultationSchema) => {
    setIsUploading(true);
    let uploadedFileUrls: string[] = [];

    try {
      if (files.length > 0) {
        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

        if (!cloudName || !uploadPreset) {
          console.error("Cloudinary credentials missing");
        } else {
          const uploadPromises = files.map(async (file) => {
            try {
              const uploadData = new FormData();
              uploadData.append("file", file);
              uploadData.append("upload_preset", uploadPreset);
              uploadData.append("folder", "bakti-kawan-sejahtera");

              const cloudRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
                method: "POST",
                body: uploadData,
              });

              if (!cloudRes.ok) {
                console.error(`Failed to upload ${file.name}`);
                return null;
              }

              const cloudData = await cloudRes.json();
              const originalUrl = cloudData.secure_url;
              
              try {
                const tinyUrlRes = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalUrl)}`);
                if (tinyUrlRes.ok) {
                  return await tinyUrlRes.text();
                }
              } catch (err) {
                console.error("TinyURL error:", err);
              }
              
              return originalUrl;
            } catch (err) {
              console.error(`Error uploading ${file.name}:`, err);
              return null;
            }
          });

          const results = await Promise.all(uploadPromises);
          uploadedFileUrls = results.filter((url): url is string => url !== null);
          
          if (uploadedFileUrls.length === 0 && files.length > 0) {
            console.error("Semua file gagal diunggah.");
          }
        }
      }

      setFormData(data)
      const waUrl = getWALink(data as any, uploadedFileUrls)
      window.open(waUrl, '_blank')
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("Terjadi kesalahan saat mengunggah file. Silakan coba lagi.");
    } finally {
      setIsUploading(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center max-w-lg px-6 mx-auto py-12">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h2 className="text-display-md text-primary mb-4">Pesan Terkirim!</h2>
        <p className="text-secondary mb-8">
          WhatsApp Anda akan terbuka otomatis dengan pesan konsultasi terstruktur. Jika tidak, klik tombol di bawah untuk membuka manual.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={getWALink(getValues() as any)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg w-full justify-center"
          >
            Buka WhatsApp
          </a>
          <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary">
            Kirim Konsultasi Lagi
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Nama */}
        <div className="form-group">
          <label className="form-label" htmlFor="nama">Nama Lengkap *</label>
          <input
            id="nama"
            type="text"
            placeholder="Dr. Budi Santoso"
            className={`form-input ${errors.nama ? 'error' : ''}`}
            {...register('nama')}
          />
          {errors.nama && <p className="form-error">{errors.nama.message}</p>}
        </div>

        {/* Instansi */}
        <div className="form-group">
          <label className="form-label" htmlFor="instansi">Nama Instansi / Perusahaan *</label>
          <input
            id="instansi"
            type="text"
            placeholder="RS Cipto Mangunkusumo"
            className={`form-input ${errors.instansi ? 'error' : ''}`}
            {...register('instansi')}
          />
          {errors.instansi && <p className="form-error">{errors.instansi.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Email */}
        <div className="form-group">
          <label className="form-label" htmlFor="email">Alamat Email *</label>
          <input
            id="email"
            type="email"
            placeholder="budi@rscm.go.id"
            className={`form-input ${errors.email ? 'error' : ''}`}
            {...register('email')}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        {/* WhatsApp */}
        <div className="form-group">
          <label className="form-label" htmlFor="whatsapp">Nomor WhatsApp *</label>
          <input
            id="whatsapp"
            type="tel"
            placeholder="08123456789"
            className={`form-input ${errors.whatsapp ? 'error' : ''}`}
            {...register('whatsapp')}
          />
          {errors.whatsapp && <p className="form-error">{errors.whatsapp.message}</p>}
        </div>
      </div>

      {/* Lokasi */}
      <div className="form-group">
        <label className="form-label" htmlFor="lokasi">Lokasi / Kota *</label>
        <input
          id="lokasi"
          type="text"
          placeholder="Kabupaten Bogor, Jawa Barat"
          className={`form-input ${errors.lokasi ? 'error' : ''}`}
          {...register('lokasi')}
        />
        {errors.lokasi && <p className="form-error">{errors.lokasi.message}</p>}
      </div>

      {/* Jenis Layanan (Accordion Multi-Select) */}
      <div className="form-group">
        <label className="form-label font-bold text-base mb-2">Jenis Layanan (Bisa pilih lebih dari satu) *</label>
        <div className="space-y-3 mt-2">
          {Object.entries(groupedOptions).map(([category, opts]) => {
            const isExpanded = expandedSection === category
            return (
              <div key={category} className="border border-border rounded-xl bg-white overflow-hidden transition-all shadow-sm">
                <button
                  type="button"
                  onClick={() => setExpandedSection(isExpanded ? null : category)}
                  className="w-full flex items-center justify-between p-4 bg-bg-section/55 font-semibold text-primary hover:bg-bg-section transition-colors text-left"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">
                      {category === 'Alat Kesehatan' ? '🏥' : category === 'Furniture Kantor' ? '🏢' : category === 'Furniture Komersial' ? '☕' : '💬'}
                    </span>
                    {category}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-secondary transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>

                {isExpanded && (
                  <div className="p-5 border-t border-border bg-bg/25 grid sm:grid-cols-2 gap-3 transition-all duration-300">
                    {opts.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white border border-border/60 hover:border-accent/40 cursor-pointer transition-colors select-none group"
                      >
                        <input
                          type="checkbox"
                          value={opt.label}
                          className="w-4 h-4 rounded text-accent focus:ring-accent border-border mt-0.5"
                          {...register('jenisLayanan')}
                        />
                        <span className="text-secondary text-sm font-medium group-hover:text-primary transition-colors">
                          {opt.label}
                        </span>
                      </label>
                    ))}

                    {/* Custom input for Lainnya */}
                    {category === 'Lainnya' && watchJenisLayanan.includes('Lainnya (Kustom)') && (
                      <div className="col-span-full mt-2 p-4 bg-accent-light rounded-xl border border-accent/20">
                        <label className="block text-xs font-semibold text-accent uppercase tracking-wider mb-2" htmlFor="layananLainnya">
                          Tuliskan Barang/Layanan Kustom Anda:
                        </label>
                        <input
                          id="layananLainnya"
                          type="text"
                          placeholder="misal: Ranjang bersalin, Kursi tunggu bandara"
                          className={`form-input bg-white ${errors.layananLainnya ? 'error' : ''}`}
                          {...register('layananLainnya')}
                        />
                        {errors.layananLainnya && (
                          <p className="form-error mt-1">{errors.layananLainnya.message}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        {errors.jenisLayanan && <p className="form-error mt-2">{errors.jenisLayanan.message}</p>}
      </div>

      {/* Pesan */}
      <div className="form-group">
        <label className="form-label" htmlFor="pesan">Deskripsi Kerusakan / Kebutuhan *</label>
        <textarea
          id="pesan"
          rows={5}
          placeholder="Contoh: Bed pasien ICU kami mengalami kerusakan pada sistem hydraulic, sudah tidak bisa diatur posisinya. Merek ABC model XYZ, ada 3 unit yang perlu diperbaiki..."
          className={`form-input resize-none ${errors.pesan ? 'error' : ''}`}
          {...register('pesan')}
        />
        {errors.pesan && <p className="form-error">{errors.pesan.message}</p>}
      </div>

      {/* Persiapan Foto/Video Card */}
      <div className="form-group">
        <label className="form-label" htmlFor="foto">Foto/Video/PDF Referensi (Opsional)</label>
        
        {files.length > 0 && (
          <div className="mt-3 space-y-2 mb-4">
            {files.map((file, index) => (
              <div key={index} className="flex justify-between items-center p-3 rounded-xl border border-border bg-white shadow-sm">
                <span className="text-sm truncate mr-2 text-secondary font-medium">{file.name}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index)}
                  className="text-xs font-semibold px-2 py-1 rounded transition-colors text-red-500 hover:bg-red-50 flex items-center gap-1"
                >
                  <X size={14} /> Hapus
                </button>
              </div>
            ))}
          </div>
        )}
        
        <label className="flex items-center justify-center p-6 mt-2 rounded-xl cursor-pointer transition-all bg-bg-section/55 border-2 border-dashed border-border hover:border-accent hover:bg-accent/5 group">
          <Upload size={20} className="text-accent mr-3 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium text-primary">
            Tambah Foto / Video / PDF
          </span>
          <input type="file" multiple className="hidden" accept="image/*,application/pdf,video/*" onChange={handleFileChange} />
        </label>
        {fileError && <p className="form-error mt-2">{fileError}</p>}
        
        <p className="text-sm font-semibold text-accent mt-3">
          Maks. 5MB untuk Foto/PDF, 20MB untuk Video. <br />
          Harap lampirkan beberapa Foto & Video Kerusakan untuk analisa lebih lanjut
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || isUploading}
        className="btn btn-primary btn-lg w-full justify-center glow-orange disabled:opacity-60"
      >
        {isSubmitting || isUploading ? (
          <>{isUploading ? 'Mengunggah File...' : 'Memproses...'}</>
        ) : (
          <>
            <Send size={18} />
            Kirim via WhatsApp
            <ArrowRight size={18} />
          </>
        )}
      </button>
      <p className="text-xs text-center text-muted">
        Dengan mengklik tombol di atas, pesan terstruktur akan otomatis tergenerate dan membuka WhatsApp Anda.
        Tidak ada data yang disimpan di server kami.
      </p>
    </form>
  )
}
