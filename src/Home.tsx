import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const trackButton = () => {
    window.analytics?.track("Article Bookmarked", {
      title: "Snow Fall",
      subtitle: "The Avalanche at Tunnel Creek",
      author: "John Branch",
    });
  };

  useEffect(() => {
    window.analytics.page(location.pathname);
    console.log("hi");
  }, [location]);

  return (
    <div>
      <button onClick={() => trackButton()}>Click Here</button>
    </div>
  );
};

export default Home;
