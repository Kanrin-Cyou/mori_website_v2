import React from 'react';
import {Box,Button, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function LearningCard({items}){

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Card 
            elevation={1} 
            style={{height:"100%"}}
            data-aos="fade-up"
            data-aos-duration="700"
        >
            <CardContent>
                <CardHeader 
                    avatar={items.icon}
                    title={items.title}
                    titleTypographyProps={{color:"primary.main",variant:"h5", fontWeight:'bold',pt:2}}
                />
                <Typography variant='h6' sx={{pl:2}}>
                    {items.content}
                </Typography>
            </CardContent>

            <Box textAlign='center' sx={{pt:2,pb:2}}>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="詳細"
                >
                    <ExpandMoreIcon color="primary.main"/>
                </ExpandMore>
            </Box>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                        {items.detail.map(item2 => (
                            <Box>
                                <Typography align="left" sx={{pt:2,pr:2, color:"primary.main"}} fontWeight='bold' variant="h5">
                                    {item2.title}
                                </Typography>
                                <Typography align="left" sx={{pt:2,pr:2,pb:5, color:"text.secondary"}} variant="h6">
                                    {item2.note}
                                </Typography>
                            </Box>
                        ))}
                </CardContent>
            </Collapse>
        </Card>
    )
}
