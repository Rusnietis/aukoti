import Nav from '../../Components/Nav';
import Story from './Story';
import '../../Style/StoriesList.scss';





export default function Layout() {

  
  // const { editCustomer, customers } = useContext(Customers);

  // if (customers === null) {
  //   return (
  //     <div className="loader">
  //       <div></div>
  //     </div>
  //   );
  // }




  return (
    <div>
      <div className="page-box" >
        <div>
          <Story />
        </div>
      </div>
    </div>
  );

}