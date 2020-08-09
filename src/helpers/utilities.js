import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@material-ui/core';

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
