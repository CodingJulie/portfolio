'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-2xl"
    >
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
    </motion.div>
  );
}
