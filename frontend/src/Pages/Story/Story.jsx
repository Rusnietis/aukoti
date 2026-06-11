
import { SERVER_URL } from "../../Constants/main";
import useGet from '../../Hooks/useGet';
import { useParams } from "react-router-dom";
import '../../Style/StoriesList.scss';
import '../../Style/button18.scss';
import '../../Style/loader.scss';




export default function Story() {

  const { id } = useParams();
  const { data, loading } = useGet('/visitors/stories/' + id || '0');

  console.log(data)
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

    </aside>
  );

}


