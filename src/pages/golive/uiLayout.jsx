import React from 'react';
import {
  StreamVideoClient,
  StreamVideo,
  User,
  StreamCall,
} from "@stream-io/video-react-sdk";
import LivestreamView from "./livestreaming";

const getToken = localStorage.getItem('token'); // Retrieve token from localStorage
const getUserId = localStorage.getItem('userid'); 
const apiKey = "mmhfdzb5evj2";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiTm9tX0Fub3IiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL05vbV9Bbm9yIiwiaWF0IjoxNzE4MzA1ODcwLCJleHAiOjE3MTg5MTA2NzV9.2tGPTCroQM04hFWFFCMkDkjmCfFmVWU7zjOI0CTMf5Q";
const userId = "Nom_Anor";
const callId = "NiBm7zYutEs4";

const user: User = { id: userId, name: "Tutorial" };
const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("livestream", callId);
call.join({ create: true });

export default function LiveStreaming() {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <LivestreamView call={call} />
      </StreamCall>
    </StreamVideo>
  );
}
