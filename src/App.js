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
// import {
//   StreamVideoClient,
//   StreamVideo,
//   User,
//   StreamCall,
// } from "@stream-io/video-react-sdk";
// import LivestreamViews from "./pages/golive/livestreaming";
// const apiKey = "mmhfdzb5evj2";
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiTm9tX0Fub3IiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL05vbV9Bbm9yIiwiaWF0IjoxNzE4MzA1ODcwLCJleHAiOjE3MTg5MTA2NzV9.2tGPTCroQM04hFWFFCMkDkjmCfFmVWU7zjOI0CTMf5Q";
// const userId = "Nom_Anor";
// const callId = "NiBm7zYutEs4";

// const user: User = { id: userId, name: "Tutorial" };
// const client = new StreamVideoClient({ apiKey, user, token });
// const call = client.call("livestream", callId);
// call.join({ create: true });

// export default function App() {
//   return (
//     <StreamVideo client={client}>
//       <StreamCall call={call}>
//         <LivestreamViews call={call}/>
//       </StreamCall>
//     </StreamVideo>
//   );
// }

