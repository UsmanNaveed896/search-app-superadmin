import React, { useEffect, useState } from "react";
import { ParticipantView, useCallStateHooks } from "@stream-io/video-react-sdk";
import { FaVideo, FaVideoSlash, FaMicrophone, FaMicrophoneSlash, FaPlay, FaStop } from 'react-icons/fa';

const LivestreamView = ({ call }) => {
  const {
    useCameraState,
    useMicrophoneState,
    useParticipantCount,
    useIsCallLive,
    useParticipants,
  } = useCallStateHooks();

  const { camera: cam, stream: camStream } = useCameraState();
  const { microphone: mic, isEnabled: isMicEnabled } = useMicrophoneState();

  const participantCount = useParticipantCount();
  const isLive = useIsCallLive();

  const [firstParticipant] = useParticipants();
  const [cameraOn, setCameraOn] = useState(false);
  

  const handleCamera = () => {
    setCameraOn(!cameraOn);
    cam.toggle();
  };

  const handleGoLive = async () => {
    try {
      if (isLive) {
        await call.stopLive();
      } else {
        await call.goLive();
      }
    } catch (error) {
      console.error("Failed to toggle live status:", error);
    }
  };
console.log(cameraOn,"camera on")
  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-800 text-white">
      <div className="text-lg font-semibold">
        {isLive ? `Live: ${participantCount}` : `In Backstage`}
      </div>
      {firstParticipant ? (
        <ParticipantView participant={firstParticipant} />
      ) : (
        <div>The host hasn't joined yet</div>
      )}
      <div className="flex gap-4 mt-4 justify-center">
        <button
          className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleGoLive}
        >
          {isLive ? <FaStop className="text-white w-6 h-6" /> : <FaPlay className="text-white w-6 h-6" />}
        </button>
        <button
          className="p-2 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={handleCamera}
        >
          {cameraOn ? <FaVideoSlash className="text-white w-6 h-6" /> : <FaVideo className="text-white w-6 h-6" />}
        </button>
        <button
          className="p-2 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={() => mic.toggle()}
        >
          {isMicEnabled ? <FaMicrophoneSlash className="text-white w-6 h-6" /> : <FaMicrophone className="text-white w-6 h-6" />}
        </button>
      </div>
    </div>
  );
};

export default LivestreamView;
