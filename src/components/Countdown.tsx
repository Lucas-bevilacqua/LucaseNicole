'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: string; // ISO string: "2026-11-07T18:00:00"
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetDate).getTime();

    const update = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="text-center py-8">
        <p className="font-serif text-2xl text-olive-dark">Carregando contagem...</p>
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: 'Dias' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Seg' },
  ];

  return (
    <motion.div
      className="card-luxe"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <p className="font-serif text-2xl md:text-3xl text-olive-950 text-center mb-8">
        Faltam <span className="font-semibold text-gold-premium">{timeLeft.days}</span> dias para o grande dia!
      </p>
      <div className="flex justify-center gap-5 md:gap-10 flex-wrap">
        {units.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-olive-950/5 flex items-center justify-center border border-olive-dark/15">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-olive-950">
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <span className="block mt-2 text-body text-gray-warm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
