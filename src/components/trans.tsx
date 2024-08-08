import React from "react";
import useTranslate from "../hooks/useTranslate";

const Trans = ({ children }: { children: string }) => {
  const t = useTranslate();

  return <>{t(children)}</>;
};

export default Trans;
