import React, { Component } from 'react';
import Resources from 'components/resources';

class ResourcesTab extends Component {
  render() {
    return (
      <div>
        <Resources handleClose={() => this.props.match.params.visible = false} index={Number(this.props.match.params.index)} visible={this.props.match.params.visible} />
      </div>
    );
  }
}

export default ResourcesTab;
