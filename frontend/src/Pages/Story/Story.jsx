import { useState, useContext } from 'react';
import { SERVER_URL } from '../../Config/config';
import useGet from '../../Hooks/useGet';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import * as s from '../../Actions/stories';
import { Donors } from '../../Contexts/Donors';
import '../../Style/StoriesList.scss';
import '../../Style/button18.scss';
import '../../Style/loader.scss';

const defaultInputs = {
  name: '',
  amount: '',
  date: ''

}

export default function Story() {

  const [inputs, setInputs] = useState(defaultInputs);
  const { donors, setStoreDonor } = useContext(Donors);

  const { id } = useParams();
  const { data, loading } = useGet('/visitors/stories/' + id || '0');


  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const addMoney = (story) => {
    const donationData = {
      id: uuidv4(),
      name: inputs.name,
      amount: parseFloat(inputs.amount),
      story_id: story.id,
      date: new Date().toISOString(),
    };

    console.log('💸 Siunčiu donaciją per context:', donationData);

    // Vietoj axios — naudojam kontekstą
    setStoreDonor(donationData);

    // Vietoje atskiro axios — surinkta suma atsinaujins per reducerį
    dispatchStories(s.updateCollected(story.id, donationData.amount));

    setInputs(defaultInputs);
  };

  if (loading) return (<div className="loader"><div></div></div>);

  return (
    <aside className="preview-col">

      <div className="list-card" >
        <div className="preview-title">
          <h2 id="card-title">{data.title}</h2>
        </div>
        <div className="preview-content">
          <div className="preview-photo">
            {
              data?.image ? (
                <img src={SERVER_URL + '/' + data.image} alt={data.title} />
              ) : (
                <img src="/images/no-image.jpg" alt="no image" />
              )
            }
          </div>
          <div className="list-story">{data.story}</div>
         
        </div>
      </div>
      {
        data.collected < data.goal ? (
          <div className="donate-section">
            {/* Aukojimo forma */}
            <div className="form-col">
              <div className="one" style={{ fontSize: '18px' }}>Aukokite dabar</div>
              <hr />
              <div className="list-field">
                <label htmlFor="name">Vardas</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Įveskite vardą"
                  value={inputs.name}
                  onChange={handleChange}
                />
              </div>

              <div className="list-field">
                <label htmlFor="amount">Suma (EUR)</label>
                <input
                  type="number"
                  id="amount"
                  placeholder="Įveskite sumą"
                  value={inputs.amount}
                  onChange={handleChange}
                />
              </div>

              <div className="list-actions">
                <button
                  type="button"
                  className="button-18"
                  onClick={() => addMoney(data)}
                >
                  Aukoti
                </button>
              </div>
            </div>

            {/* Tikslai ir aukotojai */}
            <div className="money">
              <div className="one" style={{ fontSize: '18px' }}>Kaip mums sekasi</div>
              <hr />
              <div className="goal">
                <div className="list-field">🎯 Tikslas</div>
                <div className="amount-pill">{data?.goal || "0"} €</div>
              </div>

              <div className="collected">
                <div className="list-field">🎯 Jau surinkta</div>
                <div className="amount-pill">{data?.collected} €</div>
              </div>

              <div className="remaining">
                <div className="list-field">🎯 Dar liko surinkti</div>
                <div className="amount-pill">
                  {(data?.goal || 0) - (data?.collected || 0)} €
                </div>
              </div>
            </div>

            <div className="donors-list">
              <div className="one" style={{ fontSize: '18px' }}>Aukotojų sąrašas</div>
              <hr />

              {donors
                ?.filter(d => d.story_id === data.id)
                .map(donor => (

                  <div key={donor.id} className="donor-list">
                    <li>{donor.name} – {donor.amount} €</li>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="thanks-message">
            🎉 Tikslas pasiektas! <b>Paukota {data.collected} €</b>. Dėkojame visiems aukotojams ❤️
          </div>
        )}
    </aside>
  );

}


