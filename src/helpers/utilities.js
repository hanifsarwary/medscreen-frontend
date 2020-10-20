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
    <img style={{ width: '100%', height: '550px'}} src={props.imgUrl ? props.imgUrl : banner } alt="" />
  </div>
);
