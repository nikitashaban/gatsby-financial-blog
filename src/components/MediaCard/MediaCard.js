import React from "react"
import { navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  card: {
    margin: "0 0 15px 0",
  },
  media: {
    height: 140,
  },
})

export default function MediaCard({ title, publishedDate, imgUrl, slug }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => navigate(`project/${slug}`)}>
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {publishedDate}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button
          onClick={() => navigate(`project/${slug}`)}
          size="small"
          color="primary"
        >
          Подробнее
        </Button>
      </CardActions>
    </Card>
  )
}
