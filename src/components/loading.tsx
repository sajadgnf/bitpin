import React from "react";

const Loading = ({ extraClasses }: { extraClasses?: string }) => {
  return <div className={`lds-hourglass ${extraClasses}`}></div>;
};

export default Loading;
