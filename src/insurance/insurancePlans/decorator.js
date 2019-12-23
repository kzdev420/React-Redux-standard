import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getInsurancePlan } from 'reducers';

import { find as findInsurancePlan } from './actions';

const insurancePlanDecorator = (DecoratedComponent) => {

  class InsurancePlanDecorator extends Component {
    componentDidMount() {
      this.fetchData();
    }

    componentDidUpdate(oldProps) {
      if (this.props.insurancePlanId !== oldProps.insurancePlanId) {
        this.fetchData();
      }
    }

    fetchData() {
      const { insurancePlanId, findInsurancePlan } = this.props;
      insurancePlanId && findInsurancePlan(insurancePlanId);
    }

    render() {
      const { children, findInsurancePlan, ...props } = this.props;

      return React.createElement(
        DecoratedComponent,
        props,
        children
      );
    }
  }

  const mapStateToProps = (state, { insurancePlanId }) => ({
    insurancePlan: getInsurancePlan(state, insurancePlanId),
  });

  const mapDispatchToProps = {
    findInsurancePlan,
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(InsurancePlanDecorator);
}

export default insurancePlanDecorator;
