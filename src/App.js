import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/newsCards/NewsCards";

const alanKey = process.env.REACT_APP_ALAN_SDK_KEY;

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return <div>{<NewsCards articles={newsArticles} />}</div>;
}

export default App;
