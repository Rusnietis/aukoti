import { SERVER_URL } from "../../Constants/main";
import { Link } from "react-router-dom";
import useGet from '../../Hooks/useGet';
import '../../Style/StoriesList.scss';
import '../../Style/button18.scss';
import '../../Style/loader.scss';




export default function List() {


  const { data, loading } = useGet('/visitors/stories');
  
  console.log(data)

  
 const approvedStories = data?.filter(
    story => story.status === "approved"
  );

  if (loading) return (<div className="loader"><div></div></div>);

  return (
    <aside className="preview-col">
      {
        approvedStories.map(story => (
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
            <div className="preview-button">
              <Link to={`/istorijos/${story.url}`} className="button18">Daugia čia</Link>
            </div>
          </div>
        ))
      }
    </aside>
  );

}


