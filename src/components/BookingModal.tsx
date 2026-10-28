"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import { BRAND } from "@/shared/constants/brand";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (open) setSent(false);
  }, [open]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-navy-deep/55 p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal
            aria-labelledby="booking-title"
            className="w-full max-w-md border border-[var(--line)] bg-cream-soft p-6 shadow-2xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.24em] text-gold">
                  Бронирование
                </p>
                <h2
                  id="booking-title"
                  className="mt-1 font-display text-2xl font-bold text-navy"
                >
                  Запросить дату
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-muted transition hover:text-navy"
                aria-label="Закрыть"
              >
                ✕
              </button>
            </div>

            {sent ? (
              <div className="mt-8 space-y-3">
                <p className="text-navy">
                  Заявка принята. Мы свяжемся с вами по указанному контакту.
                </p>
                <p className="text-sm text-muted">
                  Или напишите сразу:{" "}
                  <a className="underline" href={`mailto:${BRAND.email}`}>
                    {BRAND.email}
                  </a>
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 w-full bg-navy py-3 text-sm font-semibold text-cream"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <label className="block text-sm text-navy">
                  Имя
                  <input
                    required
                    name="name"
                    className="mt-1.5 w-full border border-[var(--line)] bg-white px-3 py-2.5 outline-none focus:border-navy"
                  />
                </label>
                <label className="block text-sm text-navy">
                  Телефон или email
                  <input
                    required
                    name="contact"
                    className="mt-1.5 w-full border border-[var(--line)] bg-white px-3 py-2.5 outline-none focus:border-navy"
                  />
                </label>
                <label className="block text-sm text-navy">
                  Формат
                  <select
                    name="format"
                    className="mt-1.5 w-full border border-[var(--line)] bg-white px-3 py-2.5 outline-none focus:border-navy"
                    defaultValue="masterclass"
                  >
                    <option value="masterclass">Мастер-класс</option>
                    <option value="seminar">Семинар</option>
                    <option value="b2b">B2B-встреча</option>
                    <option value="photo">Съёмка</option>
                  </select>
                </label>
                <label className="block text-sm text-navy">
                  Желаемая дата
                  <input
                    type="date"
                    name="date"
                    className="mt-1.5 w-full border border-[var(--line)] bg-white px-3 py-2.5 outline-none focus:border-navy"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full bg-navy py-3 text-sm font-semibold text-cream transition hover:bg-navy-deep"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
