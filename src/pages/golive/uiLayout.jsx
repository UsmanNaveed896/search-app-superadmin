import { CallingState, LivestreamPlayer, StreamCall, StreamVideo, StreamVideoClient, useCall, useCallStateHooks, User } from '@stream-io/video-react-sdk';
import { MyUiLayout } from './livestreaming';



export const Video = () => {
    const apiKey = "nej8e6k9uufh";
  const userId = "Padm__Amidala";
  const callId = "livestream_9d001268-7747-41b6-8fac-5bb859b1dfb5";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJAc3RyZWFtLWlvL2Rhc2hib2FyZCIsImlhdCI6MTcxODI5OTUxOSwiZXhwIjoxNzE4Mzg1OTE5LCJ1c2VyX2lkIjoiIWFub24iLCJyb2xlIjoidmlld2VyIiwiY2FsbF9jaWRzIjpbImxpdmVzdHJlYW06bGl2ZXN0cmVhbV85ZDAwMTI2OC03NzQ3LTQxYjYtOGZhYy01YmI4NTliMWRmYjUiXX0.xNwwk6sahW_YeY9VFXWp_JQuj74Xj460YtrfmSBuR7I";
  const user = {
    id: userId,
    name: "Oliver",
    image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
  };

  const client=new StreamVideoClient({apiKey,token});
  const call=client.call('default',callId);
  
    return (
      <div>
        <StreamVideo client={client}>
        <LivestreamPlayer callType="livestream" callId={callId} />
        </StreamVideo>
      </div>
    );
  };