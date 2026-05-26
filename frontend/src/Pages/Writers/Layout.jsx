import { useContext } from 'react';
import Nav from '../../Components/Nav';
import Create from './Create';
import List from './List';
import '../../Style/StoryCard.scss';
import { Stories } from '../../Contexts/Stories';




export default function Layout() {
   const { stories } = useContext(Stories);

  if (null === stories ) {
    return (
      <div className="loader">
        <div></div>
      </div>
    );
  }

  return (
     <div className="page-container">
      <div className="left-col">
        <Create />
      </div>
      <div className="right-col">
        <List />
      </div>
    </div>
  );

}