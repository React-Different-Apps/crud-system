import './App.css';
import Navbar from './Components/UI/Navbar';
import LandingSection from './Components/UI/LandingSection';
import DataTable from './Components/DataTable/Table'
import AddNote from './Components/Notes/AddNote'
import EditNote from './Components/Notes/EditNote'
import ShowNote from './Components/Notes/ShowNote'
import NotFound from './Components/Notes/NotFound'
import {Route, Switch} from 'react-router-dom'
import {GlobalProvider} from './Components/Context/GlobalState'
function App() {
  return (
    <div>
      <Navbar/>
      <GlobalProvider>
      <Switch>
        <Route path='/' exact>
          <LandingSection/>
          <DataTable/>
        </Route>
        <Route path='/add-note'>
          <AddNote/>
        </Route>
        <Route path='/show-note/:id'>
          <ShowNote/>
        </Route>
        <Route path='/edit-note/:id'>
          <EditNote/>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </GlobalProvider>
    </div>
  );
}

export default App;
