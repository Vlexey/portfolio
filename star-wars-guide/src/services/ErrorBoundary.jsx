import React, { Component } from 'react';
import { ErrorPage } from '../ErrorPages/ErrorPage/ErrorPage';

export class ErrorBoundary extends Component {

  state = {
    hasError: false
  }
  componentDidCatch() {
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />
    }
    return this.props.children
  }
}
