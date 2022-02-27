import React from 'react';

const Page = (props: React.PropsWithChildren<{ className?: string }>) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Page;
