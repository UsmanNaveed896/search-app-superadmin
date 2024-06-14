import React, { useEffect } from 'react';
import { ParticipantView, useCallStateHooks } from '@stream-io/video-react-sdk';

const LivestreamView = ({ call }) => {
  const {
    useCameraState,
    useMicrophoneState,
    useParticipantCount,
    useIsCallLive,
    useParticipants,
  } = useCallStateHooks();

  const { camera: cam, isEnabled: isCamEnabled, stream: camStream } = useCameraState();
  const { microphone: mic, isEnabled: isMicEnabled } = useMicrophoneState();
  
  const participantCount = useParticipantCount();
  const isLive = useIsCallLive();

  const [firstParticipant] = useParticipants();

  useEffect(() => {
    console.log("Camera Enabled:", isCamEnabled);
    if (camStream) {
      console.log("Camera Stream:", camStream);
    } else {
      console.log("No camera stream available");
    }
  }, [isCamEnabled, camStream]);

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

  return (
    <div style={{ display: "flex", flexDirection: 'column', gap: '4px' }}>
      <div>{isLive ? `Live: ${participantCount}` : `In Backstage`}</div>
      {firstParticipant ? (
        <ParticipantView participant={firstParticipant} />
      ) : (
        <div>The host hasn't joined yet</div>
      )}
      <div style={{ display: 'flex', gap: '4px'}}>
        <button className='border-2' onClick={handleGoLive}>
          {isLive ? "Stop Live" : "Start Live Stream"}
        </button>
        <button className='border-2' onClick={() => cam.toggle()}>
          {isCamEnabled ? "Disable camera" : "Enable camera"}
        </button>
        <button className='border-2' onClick={() => mic.toggle()}>
          {isMicEnabled ? "Mute Mic" : "Unmute Mic"}
        </button>
      </div>
    </div>
  );
};

export default LivestreamView;
