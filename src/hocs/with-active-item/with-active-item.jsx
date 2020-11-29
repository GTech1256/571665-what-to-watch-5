
import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: 0,
      };
      this._handleActiveItemChange = this._handleActiveItemChange.bind(this);
    }

    _handleActiveItemChange(index) {
      this.setState({
        activeItem: index,
      });
    }

    render() {
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        activeItem={activeItem}
        onActiveItemChange={this._handleActiveItemChange}
      />;
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
