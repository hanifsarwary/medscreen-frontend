import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@material-ui/core';
import banner from 'assets/images/banner.jpg';

export const Copyright = () => (
	<Box mt={8}>
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' to='/home'>
				MedScreen Labs
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	</Box>
);

export const CurrentDateString = () => {
	var date = new Date();
	return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
}

export const Banner = (props) => (
  <div>
    <img style={{ width: '100%', height: '450px'}} src={props.imgUrl ? props.imgUrl : banner } alt="" />
  </div>
);

export const countBillValue = (obj) => {
    return obj.reduce( (sum, item) => {
		if(item.price_type === 'RANGE') {
			const count = obj.filter((obj) => obj.price_type === 'RANGE').length;
            return rangeTypeTestBill(count, item)
        } else {
           return  sum + item.price_handle.price
        }
    }, 0 )
}

export const rangeTypeAction = (obj) => {
	return obj.reduce( (sum, item) => {
		const count = obj.filter((obj) => obj.price_type === 'RANGE').length;
		localStorage.setItem('range_type_bill', rangeTypeTestBill(count, item))
		return rangeTypeTestBill(count, item)
    }, 0 )
}

export const rangeTypeTestBill = (count, item) => {
    
    if (count >= 8 && count <= 14) { 
        return item.price_handle.start_price + item.price_handle.interval_price; 
    }
    else if (count >= 15 && count <= 21) { 
        return item.price_handle.start_price + (item.price_handle.interval_price * 2); 
    }
    else if (count >= 22 ) { 
        return item.price_handle.start_price + (item.price_handle.interval_price * 3); 
    } else {
        return item.price_handle.start_price; 
    }
}
