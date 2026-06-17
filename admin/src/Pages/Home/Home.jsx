import { useContext } from 'react';
import { Home } from '../../Contexts/Home';
import { Link } from 'react-router-dom';


export default function HomePage() {

  const { home } = useContext(Home);

  // console.log(home)

  const stats = [

    { value: home?.donoru_kiekis ?? 0, label: "Aktyvių rėmėjų" },
    {
      value: `€${(home?.bendra_surinkta_suma ?? 0).toLocaleString("lt-LT", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`, label: "Surinkta pagalbos"
    },
    {
      value: home?.patvirtintu_istoriju_kiekis ?? 0,
      label: "Projektų įgyvendinta",
    },
  ];

  const features = [
    {
      title: "Skaidrumas",
      text: "Visas paramos procesas aiškus ir matomas realiu laiku.",
    },
    {
      title: "Greitis",
      text: "Pagalba pasiekia žmones ten, kur jos labiausiai reikia.",
    },
    {
      title: "Pasitikėjimas",
      text: "Bendruomenė kuria realų pokytį kiekvieną dieną.",
    },
  ];

  return (
    <main className="homepage">
      {/* HERO */}
      <section className="hero">
        <div className="hero__blur hero__blur--left"></div>
        <div className="hero__blur hero__blur--right"></div>

        <div className="hero__content">
          <span className="hero__badge">Moderni paramos platforma</span>

          <h1>
            Kartu kuriame <span>geresnį rytojų</span>
          </h1>

          <p>
            Prisidėk prie istorijų, kurios keičia gyvenimus. Skaidri ir moderni
            sistema padeda pagalbai pasiekti tikslą greitai.
          </p>

          <div className="hero__actions">
            <Link to="/istorijos" className="btn btn--primary">
              Prisidėti dabar
            </Link>

            <Link to="/apie" className="btn btn--secondary">
              Sužinoti daugiau
            </Link>
          </div>

          <div className="stats">
            {
              stats !== null
                ?
                (
                  stats.map((item, index) => (
                    <div className="stats__card" key={index}>
                      <h3>{item.value}</h3>
                      <p>{item.label}</p>
                    </div>
                  ))
                ) : (<div className="element-loader"><div></div></div>)
            }
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features container">
        <h2>Kodėl žmonės renkasi mus</h2>

        <div className="features__grid">
          {features.map((item, index) => (
            <article className="card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Prisijunk prie pokyčio šiandien</h2>
        <p>Kiekviena auka tampa realia pagalba.</p>

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

