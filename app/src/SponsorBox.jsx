import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

export function SponsorBox(props) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 100 }}
                image={props.image}
            />
            <CardContent sx={{ backgroundColor: '#9ec80d' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.text}
                </Typography>
            </CardContent>
        </Card>
    )
}