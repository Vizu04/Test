import Header from "./components/Header";
import BuildCard from "./components/BuildCard";
import { builds } from "./data/builds";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Header />

      <main className="main">
        <section className="hero">
          <p className="hero-eyebrow">Claude Code — Selected Works</p>
          <h1 className="hero-title">
            Things I've<br />
            <em>built.</em>
          </h1>
          <p className="hero-subtitle">
            A curated collection of projects created with Claude Code.
            Each one a small experiment in what's possible.
          </p>
        </section>

        <p className="section-label">All Builds — {builds.length} projects</p>

        <section className="builds-grid">
          {builds.map((build) => (
            <BuildCard key={build.id} {...build} />
          ))}
        </section>
      </main>

      <footer className="footer">
        <span className="footer-brand">Builds</span>
        <span className="footer-note">Made with Claude Code</span>
      </footer>
    </div>
  );
}
