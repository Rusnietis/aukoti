import { useContext } from 'react';
//import { Stories } from '../../Contexts/Stories';
//import { SERVER_URL } from '../../Constants/main';
import '../../Style/StoryCard.scss';


export default function StoryCard() {

  //const { stories } = useContext(Stories)

  //console.log('stories', stories)

//   return (
//     <aside className="preview-col">
//       {stories.map((story) => (
//         <div key={story.id} className="preview-card">

//           {/* 🔹 Statuso indikatorius (pagal istorijos būseną) */}
//           {story.status === 'pending' && (
//             <div className="status-pill pending">
//               Ši istorija dar laukia administratoriaus patvirtinimo
//             </div>
//           )}

//           {story.status === 'approved' && (
//             <div className="status-pill approved">
//               Patvirtinta
//             </div>
//           )}

//           {story.status === 'rejected' && (
//             <div className="status-pill rejected">
//               Atmesta
//             </div>
//           )}

//           {story.status === 'finished' && (
//             <div className="status-pill finished">
//               Tikslas pasiektas 🎉
//             </div>
//           )}

//           {/* 🔹 Istorijos turinys */}
//           <div className="preview-title">
//             <h2 id="card-title">{story.title}</h2>
//           </div>

//           <div className="preview-photo">
//             {story?.image && <img src={story.image} alt={story.title} />}
//             {!story?.image && <img src={`${SERVER_URL}/images/no-image.jpg`} alt="no image" />}
//           </div>

//           <div className="field">{story.story}</div>

//           <div className="goal">
//             <div className="field">🎯 Tikslas</div>
//             <div className="amount-pill">€{story.goal}</div>
//           </div>
//         </div>
//       ))}
//     </aside>
//   );

}