import React, { useState, useEffect } from "react";
import {
  StreamVideoClient,
  StreamVideo,
  User,
  StreamCall,
} from "@stream-io/video-react-sdk";
import Modal from "react-modal";
import LivestreamView from "./livestreaming";
import Img from '../../assets/Group 48095826.png';

// Modal.setAppElement("#root"); // Set the root element for accessibility
const apiKey = "mmhfdzb5evj2";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUHJpbmNlX1hpem9yIiwiaXNzIjoiaHR0cHM6Ly9wcm9udG8uZ2V0c3RyZWFtLmlvIiwic3ViIjoidXNlci9QcmluY2VfWGl6b3IiLCJpYXQiOjE3MTg5NDMxMDUsImV4cCI6MTcxOTU0NzkxMH0.cRHylcjf9AFonWuRA_WWOfV6dZNmofRwDyD737wrWic";
const userId = "Prince_Xizor";
const callId = "eLxKMCEhAxRD";

const user: User = { id: userId, name: "Tutorial" };
const client = new StreamVideoClient({ apiKey, user, token });

export default function LiveStreaming() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [call, setCall] = useState(null);

  const openModal = async () => {
    const callInstance = client.call("livestream", callId);
    await callInstance.join({ create: true });
    setCall(callInstance);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    if (call) {
      call.leave().catch((error) => {
        console.error("Error leaving the call:", error);
      });
      call.stopLive();
      setCall(null);
    }
    setModalIsOpen(false);
  };

  useEffect(() => {
    return () => {
      if (call) {
        call.leave().catch((error) => {
          console.error("Error leaving the call on unmount:", error);
        });
      }
    };
  }, [call]);

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-16">
          <img className="h-[300px]" src={Img} alt="screen" />
          <div className="flex justify-center mt-5">
            <button
              className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white font-semibold"
              onClick={openModal}
            >
              Start Livestream
            </button>
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
          >
            <div className="relative bg-white rounded-lg p-6 max-w-2xl w-full">
              <button
                className="absolute top-2 right-2 p-2 text-white rounded-full bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={closeModal}
              >
                Close
              </button>
              {call && (
                <StreamVideo client={client}>
                  <StreamCall call={call}>
                    <LivestreamView call={call} />
                  </StreamCall>
                </StreamVideo>
              )}
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}
