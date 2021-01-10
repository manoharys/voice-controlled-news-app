import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/newsCards/NewsCards";
import useStyles from "./styles";
import logo from "./images/news.png";
const alanKey = process.env.REACT_APP_ALAN_SDK_KEY;

function App() {
  const classes = useStyles();

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

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={logo} alt="newReader" className={classes.Logo} />
      </div>
      {<NewsCards articles={newsArticles} />}
    </div>
  );
}

export default App;
