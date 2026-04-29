import { useProgress } from '@react-three/drei'

export default function Loader() {
  const { progress } = useProgress()

  return (
    <div style={styles.container}>
      <p>Loading Experience</p>
      <div style={styles.bar}>
        <div style={{ ...styles.fill, width: `${progress}%` }} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    position: 'fixed',
    inset: 0,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000
  },
  bar: {
    width: '200px',
    height: '4px',
    background: '#eee',
    borderRadius: '999px',
    overflow: 'hidden'
  },
  fill: {
    height: '100%',
    background: '#ff2b2b'
  }
}
