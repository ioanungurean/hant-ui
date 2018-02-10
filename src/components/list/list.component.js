import React from 'react';

import './list.style.scss';

const List = (props) => {
  const className = `ui middle aligned ${props.type} list`;
  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

List.displayName = 'List';
export default List;
