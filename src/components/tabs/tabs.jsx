import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Tab from "../tab/tab.jsx";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }

  handleTabClick(idx) {
    this.setState({
      activeTab: idx
    });
  }

  render() {
    const {activeTab} = this.state;
    const {children} = this.props;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {children.map((it, idx) => (
              <Tab
                key={it.props.title}
                title={it.props.title}
                isActive={activeTab === idx}
                onClick={this.handleTabClick.bind(this, idx)}
              />
            ))}
          </ul>
        </nav>
        {children[activeTab].props.children}
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(
      PropTypes.element.isRequired
  ).isRequired
};

export default Tabs;
