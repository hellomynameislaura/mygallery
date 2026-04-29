import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        style={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          style={styles.modal}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button style={styles.close} onClick={onClose} aria-label="Close modal">×</button>

          <img src={project.image} style={styles.image} alt={project.title} />

          <p style={styles.category}>{project.category}</p>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p style={{ color: '#666' }}>{project.details}</p>

          <div style={styles.nav}>
            <button onClick={onPrev}>←</button>
            <button onClick={onNext}>→</button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(255,255,255,0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    zIndex: 1000
  },
  modal: {
    position: 'relative',
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '800px',
    width: '100%',
    boxShadow: '0 20px 60px rgba(0,0,0,0.12)'
  },
  image: { width: '100%', borderRadius: '8px' },
  category: { color: '#ff2b2b', marginTop: '16px' },
  close: {
    position: 'absolute',
    top: 20,
    right: 30,
    background: 'transparent',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer'
  },
  nav: { display: 'flex', justifyContent: 'space-between', marginTop: '24px' }
}
