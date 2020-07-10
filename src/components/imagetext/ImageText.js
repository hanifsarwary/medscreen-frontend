import React, {Component} from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';

class ImageText extends Component {
    renderTextPart = (aniStyleIn, aniStyleOut) => (
        <ScrollAnimation animateIn={aniStyleIn} animateOnce={false}>
            <Grid direction="column" container spacing={1}>
                <Grid item>
                    <font className="bodyTitleText">{this.props.title}</font>
                </Grid>
                <Grid item>
                    <p className="bodySubTitleText">{this.props.description}</p>
                </Grid>
            </Grid>
        </ScrollAnimation>
    );
    renderImagePart = (aniStyleIn, aniStyleOut) => (
        <ScrollAnimation animateIn={aniStyleIn} animateOnce={false}>
            <div className="imageBox">
                <img src={this.props.imageUrl} alt="img" style={{height: "100%", width: 'auto'}}/>
            </div>
        </ScrollAnimation>
    );

    render() {
        return (
            <Container className="bodyCartContainer">
                {this.props.imagePosition === "right" ? (
                    <Grid direction="row" container spacing={2}>
                        <Grid item sm="6" className="colContainer">
                            {this.renderTextPart("slideInLeft", "slideOutLeft")}
                        </Grid>
                        <Grid item sm="6" className="colContainer">
                            {this.renderImagePart("slideInRight", "slideOutRight")}
                        </Grid>
                    </Grid>
                ) : (
                    <Grid direction="row" container spacing={2}>
                        <Grid item sm="6" className="colContainer">
                            {this.renderImagePart("slideInLeft", "slideOutLeft")}
                        </Grid>
                        <Grid item sm="6" className="colContainer">
                            {this.renderTextPart("slideInRight", "slideOutRight")}
                        </Grid>
                    </Grid>
                )}
            </Container>
        );
    }
}

export default ImageText;
