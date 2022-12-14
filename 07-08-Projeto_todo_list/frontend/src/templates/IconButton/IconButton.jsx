import React from 'react';
import If from '../If/If';

export default props => (
  <If teste={!props.hide}>
    <button className={'btn btn-' + props.style} onClick={props.onClick}>
      <i className={'fa fa-' + props.icon}></i>
    </button>
  </If>
);
