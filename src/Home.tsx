/* eslint-disable @typescript-eslint/no-unused-expressions */
//import { clickEvent } from "./Utils";
import { SegmentAnalytics } from "./Utils";

const Home = () => {
  const trackButton = () => {
    // clickEvent("Article Bookmarked", "click", {
    //   title: "Snow Fall",
    //   subtitle: "The Avalanche at Tunnel Creek",
    //   author: "John Branch",
    // });
    new SegmentAnalytics("Article Bookmarked", "click", {
      title: "Snow Fall",
      subtitle: "The Avalanche at Tunnel Creek",
      author: "John Branch",
    })?.event;

    new SegmentAnalytics("UserId", "indentify", "srivathsa", "srivathsakm@gmail.com")?.event;
  };

  return (
    <div>
      <button onClick={() => trackButton()}>Click Here</button>
    </div>
  );
};

export default Home;
