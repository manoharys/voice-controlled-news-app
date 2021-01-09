import React from "react";
import NewsCard from "../newsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./Style";

const NewsCards = ({ articles }) => {
    const classes = useStyles();
  return (
    <Grid>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard key={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default NewsCards;
