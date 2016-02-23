/*
 * mill - src/components/Sidebar.jsx
 *
 * Authors:
 *   rockdai <rockdai@qq.com>
 */

/**
 * Module dependencies.
 */
import React from 'react';

export default class Sidebar extends React.Component {

  static propTypes = {
    appLogo: React.PropTypes.string,
    config: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  renderAppLogo() {
    if (!this.props.appLogo) {
      return '';
    }
    return (
      <a className="app-logo" href="/#/">
        <img src={this.props.appLogo} alt="{this.props.config.title || ''}" />
      </a>
    );
  }

  render() {
    const currentYear = new Date().getUTCFullYear();
    const copyright = `${currentYear} ${this.props.config.title}`;
    return (
      <div id="sidebar">
        <div id="sidebar-content">
          {this.renderAppLogo()}
          <h2 className="app-title">
            <a href="#/">{this.props.config.title}</a>
          </h2>
          <footer className="site-footer">
            <section className="copyright">
              &copy; {copyright}. All rights reserved.
            </section>
          </footer>
        </div>
      </div>
    );
  }
}
