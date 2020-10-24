import React, {PureComponent} from 'react';


const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.setInitActiveItem()
      };

      this.handleActiveItem = this.handleActiveItem.bind(this);
      this.setInitActiveItem = this.setInitActiveItem.bind(this);
    }

    setInitActiveItem() {
      return Object.entries(this.props)[0][1][0];
    }

    handleActiveItem(item) {
      this.setState({activeItem: item});
    }

    render() {
      return (
        <Component
          {...this.props}
          onActiveItemChange={this.handleActiveItem}
          activeItem={this.state.activeItem}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
