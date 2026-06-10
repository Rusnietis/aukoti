
import { SERVER_URL } from "../../Constants/main";
import useGet from '../../Hooks/useGet';
import '../../Style/StoriesList.scss';
import '../../Style/button18.scss';
import '../../Style/loader.scss';




export default function List() {


  const { data, loading } = useGet('/visitors/stories');
  console.log(data)
  if (loading) return (<div className="loader"><div></div></div>);

  return (
    <aside className="preview-col">
      {
        data.map(story => (
          <div className="list-card" key={story.id}>
            <div className="preview-title">
              <h2 id="card-title">{story.title}</h2>
            </div>
            <div className="preview-content">
              <div className="preview-photo">
                {story?.image ? (
                  <img src={SERVER_URL + '/' + story.image} alt={story.title} />
                ) : (
                  <img src="/images/no-image.jpg" alt="no image" />
                )}
              </div>
              <div className="list-story">{story.short_description}</div>
            </div>

          </div>
        ))
      }
    </aside>
  );

}


