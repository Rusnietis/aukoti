import { Link } from "react-router-dom";


export default function Home() {
  const stats = [
    { value: "12,430", label: "Aktyvių rėmėjų" },
    { value: "€1.2M", label: "Surinkta pagalbos" },
    { value: "318", label: "Projektų įgyvendinta" },
  ];

  const features = [
    {
      title: "Skaidrumas",
      text: "Visas paramos procesas matomas aiškiai ir realiu laiku.",
    },
    {
      title: "Greitis",
      text: "Pagalba pasiekia tikslą greitai ir saugiai.",
    },
    {
      title: "Pasitikėjimas",
      text: "Bendruomenė kuria realų poveikį kasdien.",
    },
  ];

  const stories = [
    { title: "Pagalba šeimai", progress: "78%" },
    { title: "Gyvūnų globa", progress: "64%" },
    { title: "Gamtos projektas", progress: "91%" },
  ];

  return (
    <main className="homepage">
      {/* HERO */}
      <section className="hero">
        <div className="hero__blur hero__blur--left"></div>
        <div className="hero__blur hero__blur--right"></div>
        <div className="hero__grid"></div>

        <div className="hero__content">
          <span className="hero__badge">Moderni paramos platforma</span>

          <h1>
            Kuriame <span>ateities paramą</span> kartu
          </h1>

          <p>
            Skaidri, greita ir moderni sistema, jungianti žmones, kuriems rūpi
            tikras poveikis.
          </p>

          <div className="hero__actions">
            <Link to="/istorijos" className="btn btn--primary">
              Prisidėti dabar
            </Link>

            <Link to="/apie-mus" className="btn btn--secondary">
              Sužinoti daugiau
            </Link>
          </div>

          <div className="stats">
            {stats.map((item, index) => (
              <div className="stats__card" key={index}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features container">
        <h2>Kodėl ši platforma kitokia</h2>

        <div className="features__grid">
          {features.map((item, index) => (
            <article className="card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STORIES */}
      <section className="stories container">
        <h2>Naujausios istorijos</h2>

        <div className="stories__grid">
          {stories.map((story, index) => (
            <article className="story-card" key={index}>
              <div className="story-card__progress"></div>
              <h3>{story.title}</h3>
              <p>Surinkta {story.progress} tikslo</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Prisijunk prie pokyčio šiandien</h2>
        <p>Kiekviena parama tampa realiu rezultatu.</p>

        <Link to="/istorijos" className="btn btn--primary">
          Pradėti dabar
        </Link>
      </section>
       {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Padėkime Kartu</p>
      </footer>
    </main>
  );
}