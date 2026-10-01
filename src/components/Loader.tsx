import { motion } from 'framer-motion';

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--background)] backdrop-blur-2xl"
    >
      <div className="relative flex items-center justify-center">
        {/* Pulsing Liquid Ring */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], rotate: [0, 180, 360], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-28 h-28 rounded-full border-2 border-dashed border-[var(--accent-cyan)] shadow-[0_0_40px_rgba(56,189,248,0.3)]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-36 h-36 rounded-full border border-solid border-[var(--accent-violet)]"
        />

        {/* DS Logo */}
        <div className="absolute flex items-center justify-center">
          <span className="text-3xl font-extrabold tracking-widest text-gradient font-sans">
            DS
          </span>
        </div>
      </div>

      {/* Loading Text */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-center"
      >
        <div className="font-mono text-xs tracking-widest text-[var(--accent-cyan)] uppercase font-semibold">
          DION STACEY SELLAR
        </div>
        <div className="text-sm text-[var(--text-muted)] font-mono mt-1 flex items-center gap-2">
          <span>Initializing Liquid Glass System</span>
          <span className="inline-flex w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-ping" />
        </div>
      </motion.div>
    </motion.div>
  );
}
