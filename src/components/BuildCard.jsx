export default function BuildCard({ id, title, description, tags, url, status }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="build-card"
    >
      <div className="build-card-top">
        <span className="build-card-number">№ {String(id).padStart(2, "0")}</span>
        <span className={`build-status build-status--${status}`}>
          {status === "live" ? "Live" : "In Progress"}
        </span>
      </div>

      <h2 className="build-card-title">{title}</h2>
      <p className="build-card-description">{description}</p>

      <ul className="build-tags">
        {tags.map((tag) => (
          <li key={tag} className="build-tag">{tag}</li>
        ))}
      </ul>

      <span className="build-card-arrow" aria-hidden="true">↗</span>
    </a>
  );
}
