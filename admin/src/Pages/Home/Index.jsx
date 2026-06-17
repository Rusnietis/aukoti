//import { StoriesProvider } from '../../Contexts/Stories';
//import { WritersProvider } from '../../Contexts/Writers';
import { HomeProvider } from '../../Contexts/Home';
import Layout from './Layout';


export default function Index() {

    return (
        <HomeProvider>
            <Layout />
        </HomeProvider>

    )
}