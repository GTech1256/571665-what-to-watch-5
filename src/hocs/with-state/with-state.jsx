import React, {PureComponent} from "react";
import {extend} from "../../utils/extend";

export const withState = (initialState, mapHandlersToProps) => {
  return (Component) =>
    class WithState extends PureComponent {
      constructor(props) {
        super(props);

        this.state = extend({}, initialState);

        this.setState = this.setState.bind(this);
      }

      render() {
        return (
          <Component
            {...this.props}
            {...mapHandlersToProps.call(null, this.setState, this.props, this.state)}
            state={this.state}
          />
        );
      }
    };
};
