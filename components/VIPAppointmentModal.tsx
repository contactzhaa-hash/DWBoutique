// components/VIPAppointmentModal.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedGown?: string;
}

const WHATSAPP_RAW = '966535962115';
const PHONE_DISPLAY = '+966 53 596 2115';

export default function VIPAppointmentModal({ isOpen, onClose, selectedGown }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('Bridal Suite Consultation');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*طلب موعد قياس خاص - DW Boutique*
--------------------------------
• الاسم: ${name}
• رقم التواصل: ${phone}
• التاريخ المفضل: ${date || 'مرن'}
• الوقت المفضل: ${time || 'مرن'}
• نوع الجلسة: ${type}
${selectedGown ? `• الفستان المطلوب: ${selectedGown}` : ''}
${notes ? `• ملاحظات إضافية: ${notes}` : ''}
--------------------------------
تم الإرسال عبر الموقع الإلكتروني لبوتيك دابليو (Buraydah Atelier).`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-lg bg-[#FAF9F7] text-neutral-900 border border-neutral-200 p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[94vh]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black text-2xl w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#8C7A6B] font-medium">
                VIP Fitting Reservation // حجز موعد خاص
              </span>
              <h2 className="text-2xl font-serif font-light text-neutral-900 mt-1">
                Private Atelier Consultation
              </h2>
              {selectedGown && (
                <p className="text-xs text-[#C5A880] mt-2 font-medium">
                  Regarding: {selectedGown}
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block uppercase tracking-wider text-neutral-500 mb-1 text-[10px]">
                  Full Name // الاسم الكريم *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Nouf Al-Mansoor"
                  className="w-full bg-white border border-neutral-300 p-3 text-neutral-900 focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-neutral-500 mb-1 text-[10px]">
                  Phone Number // رقم التواصل *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="053 596 2115"
                  className="w-full bg-white border border-neutral-300 p-3 text-neutral-900 focus:outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-neutral-500 mb-1 text-[10px]">
                    Preferred Date // التاريخ
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-neutral-300 p-3 text-neutral-900 focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-neutral-500 mb-1 text-[10px]">
                    Preferred Time // الوقت
                  </label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-white border border-neutral-300 p-3 text-neutral-900 focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-neutral-500 mb-1 text-[10px]">
                  Consultation Type // نوع الجلسة
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full bg-white border border-neutral-300 p-3 text-neutral-900 focus:outline-none focus:border-black"
                >
                  <option value="Bridal Suite Consultation">Bridal Suite Consultation (جلسة عرائس)</option>
                  <option value="Evening Couture Fitting">Evening Couture Fitting (فساتين سهرة)</option>
                  <option value="Bespoke Silhouette Design">Bespoke Silhouette Design (تصميم خاص)</option>
                  <option value="Petite Couture">Petite Couture (أطفال ومناسبات)</option>
                </select>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-neutral-500 mb-1 text-[10px]">
                  Special Requests / Measurements // ملاحظات
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Event date, specific silhouette preferences, or color requirements..."
                  className="w-full bg-white border border-neutral-300 p-3 text-neutral-900 focus:outline-none focus:border-black resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#1A1A1A] text-white hover:bg-[#C5A880] hover:text-black transition-colors duration-300 text-xs uppercase tracking-[0.25em] font-medium shadow-md mt-4"
              >
                Confirm & Dispatch to WhatsApp ({PHONE_DISPLAY})
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}