'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

// Leaflet makes direct DOM calls, so it must be dynamically imported with ssr: false
const MapContainer = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(m => m.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then(m => m.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then(m => m.Popup), { ssr: false })

export default function IndonesiaMap() {
  const [mounted, setMounted] = useState(false)
  const [leaflet, setLeaflet] = useState<any>(null)

  useEffect(() => {
    setMounted(true)
    import('leaflet').then((L) => {
      setLeaflet(L)
      // Fix Leaflet's default icon paths issue with Webpack/Next.js
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });
    })
  }, [])

  if (!mounted || !leaflet) {
    return (
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden p-4 border border-border shadow-sm animate-pulse">
        <p className="text-sm text-zinc-400">Loading Map...</p>
      </div>
    )
  }

  // Coordinates for center of Indonesia
  const position: [number, number] = [-2.5489, 118.0149]

  const locations = [
    { name: 'Jabodetabek (Pusat)', pos: [-6.2088, 106.8456], desc: 'Kantor Pusat & Tim Fast Response' },
    { name: 'Surabaya', pos: [-7.2504, 112.7688], desc: 'Coverage Area' },
    { name: 'Medan', pos: [3.5952, 98.6722], desc: 'Coverage Area' },
    { name: 'Makassar', pos: [-5.1477, 119.4327], desc: 'Coverage Area' },
    { name: 'Balikpapan', pos: [-1.2379, 116.8529], desc: 'Coverage Area' },
    { name: 'Bandung', pos: [-6.9147, 107.6098], desc: 'Coverage Area' },
    { name: 'Semarang', pos: [-6.9667, 110.4167], desc: 'Coverage Area' },
    { name: 'Yogyakarta', pos: [-7.7956, 110.3695], desc: 'Coverage Area' },
    { name: 'Palembang', pos: [-2.9909, 104.7566], desc: 'Coverage Area' },
    { name: 'Pekanbaru', pos: [0.5071, 101.4451], desc: 'Coverage Area' },
    { name: 'Denpasar', pos: [-8.6500, 115.2167], desc: 'Coverage Area' },
    { name: 'Banjarmasin', pos: [-3.3167, 114.5901], desc: 'Coverage Area' },
    { name: 'Pontianak', pos: [-0.0263, 109.3425], desc: 'Coverage Area' },
    { name: 'Manado', pos: [1.4748, 124.8421], desc: 'Coverage Area' },
    { name: 'Ambon', pos: [-3.6954, 128.1814], desc: 'Coverage Area' },
    { name: 'Jayapura', pos: [-2.5337, 140.7181], desc: 'Coverage Area' }
  ]

  return (
    <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-border shadow-sm z-0">
      <MapContainer 
        center={position} 
        zoom={4} 
        scrollWheelZoom={false}
        className="w-full h-full z-0"
        style={{ zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.webp"
        />
        {locations.map((loc, idx) => (
          <Marker key={idx} position={loc.pos as [number, number]}>
            <Popup>
              <strong>{loc.name}</strong><br/>
              {loc.desc}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
