
import { CardMedia, Card, CardContent, Typography, Button } from '@mui/material';
import { useState } from 'react';
import {Link} from 'react-router-dom';


const Qard = () => {
const [cartValue,setCartValue]=useState(0);


const incrementCartValue= () => {
  if(cartValue>=0){
    setCartValue(cartValue+1);
  }
}
const decrementCartValue= () => {
  if(cartValue>0){
    setCartValue(cartValue-1);
  }
}
  return (
  
      <div>
        <div>
          <Link to="/">Go Back</Link>
        </div>
      <Card 
        sx={{ maxWidth: 345, float:'left', margin:'10px' }} 
        variant="outlined"
       
      >
        <CardMedia
          component="img"
          height="140"
          image="../img.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography 
            variant='h5' 
            component="div"
            align="center">
              Lizard
          </Typography>
          <Typography
            variant="h7"
            component="div"
            align="justify"
          >
            This is the product that can be added to cart which will be checked out later. Also the price will remain same here and in the cart.
          </Typography>
          <div align="center">
            <Button
              variant="contained"
              onClick={decrementCartValue}
            >
                -
            </Button>
            <span 
              align="center"
              fontSize="40"
              >
              
                {cartValue} 
             
            </span>
            <Button
               variant="contained"
               onClick={incrementCartValue}
            >
              +
            </Button>
          </div>
        </CardContent>
      </Card>
      </div>

  );
}

export default Qard;