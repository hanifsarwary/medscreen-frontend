import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography } from '@material-ui/core';
import banner from 'assets/images/banner.jpg';

export const Copyright = () => (
  <Box mt={8}>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/home">
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
};

export const Banner = (props) => {
  const imgLink = props.imgUrl ? props.imgUrl : banner;
  return (
    // <div style={{backgroundImage: "url("+imgLink+")", width: '100%', height: '100%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
    <img style={{ width: '100%' }} src={imgLink} alt="" />
  );
};

export const countBillValue = (obj) => {
  return obj.reduce((sum, item) => {
    if (item.price_type === 'RANGE') {
      const count = obj.filter((obj) => obj.price_type === 'RANGE').length;
      return rangeTypeTestBill(count, item);
    } else {
      return sum + item.price_handle.price;
    }
  }, 0);
};

export const rangeTypeAction = (obj) => {
  return obj.reduce((sum, item) => {
    const count = obj.filter((obj) => obj.price_type === 'RANGE').length;
    localStorage.setItem('range_type_bill', rangeTypeTestBill(count, item));
    return rangeTypeTestBill(count, item);
  }, 0);
};

export const rangeTypeTestBill = (count, item) => {
  if (count >= 8 && count <= 14) {
    return item.price_handle.start_price + item.price_handle.interval_price;
  } else if (count >= 15 && count <= 21) {
    return item.price_handle.start_price + item.price_handle.interval_price * 2;
  } else if (count >= 22) {
    return item.price_handle.start_price + item.price_handle.interval_price * 3;
  } else {
    return item.price_handle.start_price;
  }
};

export const CustomPopup = (props) => {
  return (
    <Grid container direction="column" style={{ textAlign: 'center' }} alignItems="center">
      <Grid item style={{ marginTop: '25px' }}>
        <p variant="success" style={{ fontSize: '16px', color: 'rgb(30, 70, 32)' }}>
          {props.title}
        </p>
      </Grid>
      <Link onClick={props.resetStatus} style={{ marginTop: '12px', width: '15rem' }} class="btn success-btn btn-sm">
        Continue
      </Link>
    </Grid>
  );
};
