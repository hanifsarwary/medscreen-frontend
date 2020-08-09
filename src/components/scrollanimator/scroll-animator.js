import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Grid } from '@material-ui/core';

class ScrollAnimator extends Component {
	renderComponent = (styleIn, styleOut, component, noAnimation) => {
		return (
            component &&
            noAnimation ? (
				<ScrollAnimation
					animateIn={styleIn}
					animateOut={styleOut}
					animateOnce={false}
					offset={260}
					duration={2}
					animatePreScroll={false}
				>
					<Grid direction='column' container spacing={1}>
						<Grid item>{component}</Grid>
					</Grid>
				</ScrollAnimation>
            ) :
            <Grid direction='column' container spacing={1}>
                <Grid item>{component}</Grid>
            </Grid>
		);
	};

	render() {
		const { leftComponent, rightComponent, noAnimation } = this.props;
		return (
			<Container>
				<Grid direction='row' container spacing={2}>
					{leftComponent && (
						<Grid item xs>
							{this.renderComponent('slideInLeft', 'slideOutLeft', leftComponent, noAnimation)}
						</Grid>
					)}
					{rightComponent && (
						<Grid item xs>
							{this.renderComponent('slideInRight', 'slideOutRight', rightComponent)}
						</Grid>
					)}
				</Grid>
			</Container>
		);
	}
}

export default ScrollAnimator;
