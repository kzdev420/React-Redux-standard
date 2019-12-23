import React from 'react';
import { connect } from 'react-redux';

import * as routes from 'app/routes';
import { logout } from 'auth/actions';
import { getUser } from 'reducers';

import Menu from 'common/Menu';
import Link from 'common/Link';

export const MainMenu = ({ user }) => (
  <Menu>
  </Menu>
);

const mapStateToProps = (state) => ({
  user: getUser(state)
});

export default connect(
  mapStateToProps,
)(MainMenu);
