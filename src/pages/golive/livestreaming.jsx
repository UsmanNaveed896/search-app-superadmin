import React from "react";
import {
  CallingState,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  useCall,
  useCallStateHooks,
  User,
  
} from "@stream-io/video-react-sdk";
import { MyUILayout } from "./uiLayout";


  //   const userId = localStorage.getItem("userid");

 
 
  export const MyUiLayout =() => {
    const call=useCall()

    const {useCallCallingState,useParticipantCount}=useCallStateHooks();
    const callingState=useCallCallingState()
    const participantCount=useParticipantCount()

    if(callingState !== CallingState.JOINED){
        return <div>Loading...</div>
    }
    return(
        <div>
            Call "{call?.id}" has {participantCount} participants
        </div>
    )
  }



