import React from 'react';

const Section = (
  props: React.PropsWithChildren<{ type: 'left' | 'right'; className?: string }>
) => {
  return (
    <div
      style={{ float: 'left', width: props.type === 'left' ? '30%' : '70%', height: '100%' }}
      className={props.className}>
      {props.children}
    </div>
  );
};

Section.defaultProps = {
  type: 'right'
};

export default Section;
