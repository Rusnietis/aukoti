import useAdminStories from '../../Hooks/useAdminStories';
import '../../Style/adminHome.scss';



export default function HomePage() {

  const { status } = useAdminStories();


  const pending = status.find(item => item.status === 'pending')?.count || 0;
  const approved = status.find(item => item.status === 'approved')?.count || 0;
  const rejected = status.find(item => item.status === 'rejected')?.count || 0;


  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div>
          <h1>Sveiki sugrįžę 👋</h1>
          <p>Štai jūsų sistemos apžvalga šiandienai.</p>
        </div>

      </header>

      <div className="users-box">
        <div className="admin-dashboard__stats">
          <div className="card pending">
            <h2>Laukiančios istorijos</h2>
            <p>{pending}</p>
          </div>

          <div className="card approved">
            <h2>Patvirtintos istorijos</h2>
            <p>{approved}</p>
          </div>
        </div>
      </div>

    </div>
  );
};


