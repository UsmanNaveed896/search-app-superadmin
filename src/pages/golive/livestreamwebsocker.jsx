import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { FiCamera, FiMic, FiVideo, FiVideoOff, FiCameraOff, FiMicOff } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';

const AdminLiveStream = () => {
  const videoRef = useRef(null);
  const [socket, setSocket] = useState(null);
  const [stream, setStream] = useState(null);
  const [streaming, setStreaming] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    setSocket(ws);

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);
  console.log(socket,"socketadmin")

  const startStreaming = async () => {
    setLoading(true)
    try {
      const response = await axios.post('https://cors-anywhere.herokuapp.com/https://searchapp.ai/api/v1/live/start-Stream', );

      if (response.status === 200) {
        toast.success("Stream started successfully!");
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setStream(mediaStream);
        setStreaming(true);
        setLoading(false)
        const video = videoRef.current;
        video.srcObject = mediaStream;
        video.play();

        const newMediaRecorder = new MediaRecorder(mediaStream);
        setMediaRecorder(newMediaRecorder);

        newMediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0 && socket.readyState === WebSocket.OPEN) {
            socket.send(event.data);
          }
        };

        newMediaRecorder.start(1000); // Send data every 1 second
      } else {
        toast.error("Failed to start the stream");
        setLoading(false)
      }
    } catch (error) {
      console.error("Error starting the stream:", error);
      setLoading(false) 
      toast.error("Error starting the stream! Please allow camera access.");
    }
  };

  const stopStreaming = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setStreaming(false);
      toast.success("Stream stopped successfully!");
    }
    if (mediaRecorder) {
      mediaRecorder.stop();
      setMediaRecorder(null);
    }
  };

  const toggleCamera = () => {
    if (stream) {
      stream?.getVideoTracks()?.forEach(track => track.enabled = !track.enabled);
      setCameraEnabled(!cameraEnabled);
    }
  };

  const toggleMic = () => {
    if (stream) {
      stream?.getAudioTracks()?.forEach(track => track.enabled = !track.enabled);
      setMicEnabled(!micEnabled);
    }
  };

  return (
    <div className='flex justify-center'>
      <div className="flex flex-col items-center justify-center mt-16 bg-gray-900 text-white w-[75%] rounded-xl">
        <div className="relative w-full max-w-3xl">
          <video ref={videoRef} className="w-full rounded-lg" autoPlay />
          {loading && 
          <div className="absolute top-2 left-2 flex space-x-2">
          <button
            className={`p-2 rounded-full ${cameraEnabled ? 'bg-green-500' : 'bg-red-500'}`}
            onClick={toggleCamera}
          >
            {cameraEnabled ? <FiCamera size={24} /> : <FiCameraOff size={24} />}
          </button>
          <button
            className={`p-2 rounded-full ${micEnabled ? 'bg-green-500' : 'bg-red-500'}`}
            onClick={toggleMic}
          >
            {micEnabled ? <FiMic size={24} /> : <FiMicOff size={24} />}
          </button>
        </div>
          }
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-4">
            {!streaming ? (
              <button
                onClick={startStreaming}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
                disabled={loading}
              >
                <FiVideo className="mr-2" size={24} />
               {loading ? "Starting Stream..." : "Start Streaming"} 
              </button>
            ) : (
              <button
                onClick={stopStreaming}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
              >
                <FiVideoOff className="mr-2" size={24} />
                Stop Streaming
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLiveStream;
