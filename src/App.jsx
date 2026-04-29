import { useState, useEffect } from 'react'
import Gallery from './components/Gallery'
import Gallery2D from './components/Gallery2D'
import ProjectModal from './components/ProjectModal'
import Loader from './components/Loader'
import { projects } from './data/projects'
import { isMobile } from './utils/device'

export default function App() {
  const [mode, setMode] = useState('3D')
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (isMobile()) setMode('2D')
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <div style={styles.top}>
        <button onClick={() => setMode('3D')}>3D</button>
        <button onClick={() => setMode('2D')}>2D</button>
      </div>

      {mode === '3D' ? (
        <Gallery onOpen={(i) => setSelected(i)} />
      ) : (
        <Gallery2D onOpen={(i) => setSelected(i)} />
      )}

      {selected !== null && (
        <ProjectModal
          project={projects[selected]}
          onClose={() => setSelected(null)}
          onNext={() => setSelected((current) => (current === null ? 0 : (current + 1) % projects.length))}
          onPrev={() => setSelected((current) => (current === null ? 0 : (current - 1 + projects.length) % projects.length))}
        />
      )}
    </>
  )
}

const styles = {
  top: {
    position: 'fixed',
    top: 10,
    left: 10,
    zIndex: 10,
    display: 'flex',
    gap: '10px'
  }
}
