import React, { useState } from "react";
import useTranslate from "../hooks/useTranslate";
import useFetch from "../hooks/useFetch";
import { api } from "../constants";
import Loading from "../components/loading";
import TabContent from "../components/tabContent";

const tabs = ["toman_base", "teter_base"];
const ListPage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const t = useTranslate();
  const { data, loading, error } = useFetch(api);

  if (loading) return <Loading />;
  console.log(data);

  return (
    <main>
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li key={index} className={currentTab === index ? "current-tab" : ""} onClick={() => setCurrentTab(index)}>
            {t(tab)}
          </li>
        ))}
      </ul>
      <TabContent />
    </main>
  );
};

export default ListPage;
