import React, { Component } from 'react';
import cn from 'classnames';
import { home } from 'app/routes';

import Link from '../Link';
import styles from './index.module.css';
import home_icon from './home_icon.svg';

export class Menu extends Component { 
  state = {
    showMenu: false
  }

  toggleMenu = () => {
    const showMenu = !this.state.showMenu;
    this.setState({ showMenu });
  }

  hideMenu = () => {
    this.setState({ showMenu: false });
  }

  render() {
    const { children } = this.props;

    return (
      <div className={styles.Menu}>
        <div className={styles.container}>
          <div onClick={this.hideMenu} className={styles.home}>
            <Link to={home()}>
              <img src={home_icon} alt="Home" />
            </Link>
          </div>

          <div className={cn(styles.items, styles.desktop)}>
            {children}
          </div>

          <button
            className={
              this.state.showMenu ?
                cn(styles.hamburger, styles.hamburger__squeeze, styles.is_active) :
                cn(styles.hamburger, styles.hamburger__squeeze)
            }
            onClick={this.toggleMenu}
            type="button"
          >
            <span className={styles.hamburger_box}>
              <span className={styles.hamburger_inner}></span>
            </span>
          </button>

          {this.state.showMenu &&
            <div onClick={this.hideMenu} className={cn(styles.items, styles.mobile)}>
              {children}
            </div>
          }
        </div>
      </div>
    )
  }
}
export default Menu;
