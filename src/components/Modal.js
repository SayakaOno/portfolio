import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  // const Modal = props => {
  constructor(props) {
    super(props);

    this.modals = React.createRef();
  }

  componentDidUpdate() {
    this.modals.current.scrollTo(0, 0);
  }
  render() {
    return ReactDOM.createPortal(
      <div
        ref={this.modals}
        onClick={this.props.onDismiss}
        className='ui dimmer modals visible active'
      >
        <div
          onClick={e => e.stopPropagation()}
          className='ui standard modal visible active'
        >
          {this.props.children}
        </div>
      </div>,
      document.getElementById('modal')
    );
  }
}

export default Modal;
