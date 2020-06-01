import React from 'react';
import {Cra,cardContents,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
const Cards = (props) => {
    console.log(props);
    return(
        <div className={Styles.container}>
            <Grid container spacing={3} justify = 'center'>
                <Grid item component = {card}>
                    <cardContent>
                        <Typography color='textSecondary' gutterBottom>infected</Typography>
                        <Typography variant ='h5'>Data</Typography>
                        <Typography color = 'textSecondary'>Real Date</Typography>
                        <Typography variant = 'body2'>Number of Active Cases</Typography>
                        
                    </cardContent>

                </Grid>
                
                


            </Grid>

        </div>
    )
}
export default Cards;
