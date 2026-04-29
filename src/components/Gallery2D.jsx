import { projects } from '../data/projects'

export default function Gallery2D({ onOpen }) {
  return (
    <div style={styles.container}>
      <h1>Selected Works</h1>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div key={p.id} style={styles.card} onClick={() => onOpen(i)}>
            <img src={p.image} style={styles.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: { padding: '40px', background: '#fff' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  card: { cursor: 'pointer' },
  image: { width: '100%', borderRadius: '8px' }
}
