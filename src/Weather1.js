import * as React from 'react';
import img1 from '../src/sky.avif';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, colors, Grid } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import axios from 'axios';
import ThermostatSharpIcon from '@mui/icons-material/ThermostatSharp';


export default function Weather1() {
    let cities= ["Nagpur","Pune","Wardha","mumbai"]
    
    const [cityData, setCityData] = React.useState([]);

    React.useEffect(()=>{ 
        console.log("call weather API") 

    cities.map((val)=>{
        axios.get(`https://api.weatherapi.com/v1/current.json?key=788622e6477449be823115129242606&q=${val},India&aqi=yes`)
            .then((res)=>{
                console.log("out put",res);
                cityData.push(res.data)
                setCityData([...cityData])
            })
            .catch((error)=>{

            })
        })
    },[])
    
    return(
        <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw'
        }} 
        >
    <Typography variant="h3" align="center" component={"div"} sx={{color:"red"}}>WEATHER FORECAST<hr></hr></Typography>
            
      
<br></br>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            {cityData.map((val,index)=>{
               return <Grid item sx ={3}>
                <Card sx ={{minWidth:275}} variant="outlined" align="left">
                    <br></br>
                    <CardContent style={{backgroundColor: "lightblue" , height:200}}>
                        <Typography sx={{fontSize:14}}  gutterBottom >
                            Weather Broadcast
                        </Typography>
                        <Typography variant='h5' component="div" >
                        {val.location.name}, {val.location.region} 
                        </Typography>
                        <Typography sx={{mb:1.5}} color="text.secoundary" >
                            Temp : {val.current.temp_c}
                        </Typography>
                        <Typography variant="body 2">
                        Wind Flow:{val.current.wind_kph}/kph
                        <br/><br/>
                        < WbSunnyIcon style={{color: val.current.temp_c>28.5?"red":"green"}} sx={{ fontSize: 40 }} />
                        </Typography>
                       
                    </CardContent>
                 
                 <CardActions >
                        <Button size="large">Weather</Button>
                        <ThermostatSharpIcon color='error' />
                        
                            
             


                 </CardActions>
                </Card>
            
            
            </Grid>   
        
            })}

</Grid> 
        </div>
    
    )
}

