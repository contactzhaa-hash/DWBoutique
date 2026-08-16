// components/VIPAppointmentModal.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedGown?: string;
}

export default function VIPAppointmentModal({ isOpen, onClose, selectedGown }: Props) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    date: '',
    fittingType: 'Bespoke Bridal Gown Fitting',
    notes: selectedGown ? `Interested in: ${selectedGown}` : '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*طلب حجز موعد خاص - DW Boutique*%0A%0A*الاسم:* ${encodeURIComponent(formData.fullName)}%0A*رقم التواصل:* ${encodeURIComponent(formData.phone)}%0A*التاريخ المفضل:* ${encodeURIComponent(formData.date)}%0A*نوع الخدمة:* ${encodeURIComponent(formData.fittingType)}%0A*ملاحظات / الفستان المختار:* ${encodeURIComponent(formData.notes)}`;
    
    // Live WhatsApp routing to official boutique number
    window.open(`https://wa.me/966535962115?text=${whatsappMessage}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white border border-neutral-200 p-8 md:p-12 shadow-2xl text-neutral-900"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-neutral-400 hover:text-black text-xl font-light"
            >
              ✕
            </button>

            <div className="text-center mb-8">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C7A6B]">Private Atelier // بريدة</span>
              <h2 className="text-2xl md:text-3xl font-serif font-light mt-1">Reserve a VIP Fitting</h2>
              <p className="text-xs text-neutral-500 mt-2 font-light">
                6161 Western Ring Rd, Al Hazm, Buraydah | الطريق الدائري الغربي، حي الحزم، بريدة
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Full Name / الاسم الكريم</label>
                <input
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Noura Al-Harbi"
                  className="w-full bg-[#FAF9F7] border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Contact Number / رقم الجوال</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05X XXX XXXX"
                    className="w-full bg-[#FAF9F7] border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Preferred Date / تاريخ الزيارة</label>
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#FAF9F7] border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Consultation Service / نوع الخدمة</label>
                <select
                  value={formData.fittingType}
                  onChange={(e) => setFormData({ ...formData, fittingType: e.target.value })}
                  className="w-full bg-[#FAF9F7] border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-black"
                >
                  <option>Bespoke Bridal Gown Fitting (تفصيل فستان زفاف خاص)</option>
                  <option>Haute Couture Evening Wear (فساتين سهرة راقية)</option>
                  <option>Private Showroom Suite Walkthrough (جولة خاصة في الأتيليه)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Notes / ملاحظات إضافية</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any specific requests or design preferences..."
                  className="w-full bg-[#FAF9F7] border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-neutral-900 text-white text-xs uppercase tracking-[0.25em] hover:bg-[#C5A880] transition-colors duration-300 font-medium"
              >
                Send VIP Appointment via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}