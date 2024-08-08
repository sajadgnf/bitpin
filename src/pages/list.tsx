import { useState } from "react";
import listTableColumns from "../components/listTableColumns";
import Loading from "../components/loading";
import Table from "../components/table";
import useFetch from "../hooks/useFetch";
import useTranslate from "../hooks/useTranslate";
import { api } from "../utils/constants";
import { ResultType } from "../utils/types";

const ListPage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const t = useTranslate();
  const { data, loading, error } = useFetch(api);

  if (loading) return <Loading />;

  const filterData = (code: string) => data?.results.filter((item) => item.currency2.code === code);

  const tabs = [
    { name: "toman_base", data: filterData("IRT") },
    { name: "teter_base", data: filterData("USDT") },
  ];

  return (
    <main>
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li key={index} className={currentTab === index ? "current-tab" : ""} onClick={() => setCurrentTab(index)}>
            {t(tab.name)}
          </li>
        ))}
      </ul>

      {tabs.map((tab, index) => (
        <Table columns={listTableColumns()} rows={tab.data as ResultType[]} extraClasses={currentTab !== index ? "hidden" : ""} />
      ))}
    </main>
  );
};

export default ListPage;
