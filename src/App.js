import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Header from "./components/header/header";
import SidebarDrawer from './layouts/sidebarDrawer'
import Routes from '../src/routes'
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      <Routes/>
    </div>
  );
}

export default App;
