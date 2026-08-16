'use client';

import React, { useState } from 'react';
import { useShop } from '@/context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sparkles } from 'lucide-react';

export default function BookingModal() {
  const { isBookingOpen, setIsBookingOpen, bookingPreselectedSku, t } = useShop();
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    date: '',
    timeSlot: '14:00 - 15:30',
    guests: '1',
    fullName: '',
    email: '',
    phone: '',
    notes: '',
  });

  if (!isBookingOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsBookingOpen(false);
      setStep(1);
    }, 2800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsBookingOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-[#FBF9F5] p-8 md:p-10 z-10 border border-black/[0.08] shadow-2xl"
        >
          <button
            onClick={() => setIsBookingOpen(false)}
            className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-[#111111] hover:text-[#C5A059] p-1"
          >
            <X size={20} />
          </button>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 bg-[#C5A059] text-white mx-auto flex items-center justify-center">
                <Check size={24} />
              </div>
              <h3 className="font-serif text-2xl text-[#111111]">
                {t('fittingReserved')}
              </h3>
              <p className="text-xs text-[#737373] max-w-sm mx-auto leading-relaxed">
                {t('fittingConfirmation')}
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A059] flex items-center space-x-1 rtl:space-x-reverse mb-1">
                  <Sparkles size={12} />
                  <span>{t('vipExperience')}</span>
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#111111] font-light">
                  {t('reserveFitting')}
                </h3>
                {bookingPreselectedSku && (
                  <p className="text-[11px] font-mono text-[#737373] mt-1">
                    Silhouette SKU: {bookingPreselectedSku}
                  </p>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-[#737373] mb-2">
                        {t('preferredDate')}
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full p-3 bg-transparent border border-black/[0.15] text-xs font-mono focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-[#737373] mb-2">
                        {t('timeSlot')}
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full p-3 bg-transparent border border-black/[0.15] text-xs focus:border-[#C5A059] focus:outline-none"
                      >
                        <option>11:00 AM - 12:30 PM</option>
                        <option>02:00 PM - 03:30 PM</option>
                        <option>05:00 PM - 06:30 PM</option>
                        <option>08:00 PM - 09:30 PM</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-[#737373] mb-2">
                        {t('guests')}
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full p-3 bg-transparent border border-black/[0.15] text-xs focus:border-[#C5A059] focus:outline-none"
                      >
                        <option value="1">{t('justMyself')}</option>
                        <option value="2">{t('twoGuests')}</option>
                        <option value="3">{t('threeGuests')}</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-3.5 bg-[#111111] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#C5A059] transition-colors mt-4 rounded-none shadow-md"
                    >
                      {t('continueDetails')}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-[#737373] mb-2">
                        {t('fullName')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="H.E. Princess Sarah"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full p-3 bg-transparent border border-black/[0.15] text-xs focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.25em] text-[#737373] mb-2">
                          {t('email')}
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="client@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full p-3 bg-transparent border border-black/[0.15] text-xs focus:border-[#C5A059] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.25em] text-[#737373] mb-2">
                          {t('phone')}
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+966 50 000 0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-3 bg-transparent border border-black/[0.15] text-xs focus:border-[#C5A059] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-[#737373] mb-2">
                        {t('specialRequests')}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={t('specialRequests')}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full p-3 bg-transparent border border-black/[0.15] text-xs focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-1/3 py-3.5 border border-black/[0.15] text-xs uppercase tracking-widest text-[#111111] hover:bg-black/[0.05]"
                      >
                        {t('back')}
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 py-3.5 bg-[#111111] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#C5A059] transition-colors rounded-none shadow-md"
                      >
                        {t('confirmBooking')}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}