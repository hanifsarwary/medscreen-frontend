import React from 'react';


function PDFRenderer(props) {
    const { file, width, height } = props;
    // const filepath = file + '#zoom=50';
    const filepath = file + '#zoom=FitH';

    return <div>{file && <iframe src={filepath} width={width} height={height} />}</div>;
}

PDFRenderer.defaultProps = {
  width: '650',
  height: '650',
};

export default PDFRenderer;
