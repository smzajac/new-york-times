import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: 345,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    media: {
      height: 140,
    },
  });

function Articles(props) {
    const classes = useStyles();
    const theme = useTheme();

    let news = props.news

    return(
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {news && news.map(article => 
            <div key={article.title} style={{width: "350px", height: "450px"}}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={article.multimedia[3].url}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {article.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {article.abstract}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <a style={{textDecoration: "none", color: theme.palette.primary.main}} href={article.url}>Learn More</a>
                        </Button>
                    </CardActions>
                </Card> 
            </div>
            )}
        </div>
    )
}

export default Articles;