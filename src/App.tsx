import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';
import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

/*
The Switch tag is used to not make conflicts between the path "rooms/new" and the
"rooms/id"
When the Swtich tag finds a route that satisfies it will only load the specific route
and stop looking for others
*/
function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>

  );
}
export default App;
