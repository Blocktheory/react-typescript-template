import { clickEvent } from "./Utils";

const Home = () => {
  const trackButton = () => {
    clickEvent("Article Bookmarked", "click", {
      title: "Snow Fall",
      subtitle: "The Avalanche at Tunnel Creek",
      author: "John Branch",
    });
  };
  return (
    <div>
      <button onClick={() => trackButton()}>Click Here</button>
    </div>
  );
};

export default Home;
