import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page home-page">
      <p className="eyebrow">Welcome</p>
      <h1>Team Collaboration Workspace</h1>
      <p className="lead">
        A shared React app for project updates, analytics, and team bios.
      </p>

      <div className="cta-row">
        <Link to="/dashboard" className="primary-btn">Open Dashboard</Link>
        <Link to="/about" className="secondary-btn">Meet the Team</Link>
      </div>
    </section>
  )
}

export default Home



























































































































































