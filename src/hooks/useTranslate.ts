import React from "react";
import fa from "../utils/fa.json";

const useTranslate = () => {
  const t = (text: string) => (fa as Record<string, string>)[text];
  return t;
};

export default useTranslate;
