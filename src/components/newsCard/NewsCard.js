import React from 'react'
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import useStyles from "./Style";

const NewsCard = ({article:{description, publishedAt, source, title, url, urlToImage}, i}) => {
  const classes = useStyles();
    return (
        <Card>
            <CardActionArea>
             <CardMedia className={classes.media} image={urlToImage} />
             <div>
                 <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                 <Typography variant="body2" color="textSecondary" component="h2">{source.name} </Typography>
             </div>
             <Typography gutterBottom variant="h5">{title}</Typography>
             <CardContent>
                 <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
             </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="prime">Learn more</Button>
            </CardActions>
            <Typography variant="body2" component="h5" color="textSecondary">{i+1}</Typography>
        </Card>
    )
}

export default NewsCard
