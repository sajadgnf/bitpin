import { useEffect, useRef, useState } from "react";
import listTableColumns from "../components/listTableColumns";
import Loading from "../components/loading";
import Table from "../components/table";
import useFetch from "../hooks/useFetch";
import useTranslate from "../hooks/useTranslate";
import { api } from "../utils/constants";
import { ResultType } from "../utils/types";

const ListPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [IRTLastIndex, setIRTLastIndex] = useState(10);
  const [USDTLastIndex, setUSDTLastIndex] = useState(10);

  const loaderRef = useRef(null);

  const t = useTranslate();
  const { data, loading, error } = useFetch(api);

  const filterData: (code: string) => ResultType[] = (code: string) => data?.results.filter((item) => item.currency2.code === code) as ResultType[];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (data && currentTab === 0 && target.isIntersecting && IRTLastIndex < filterData("IRT").length) setIRTLastIndex((prevI) => prevI + 10);
      if (data && currentTab === 1 && target.isIntersecting && USDTLastIndex < filterData("USDT").length) setUSDTLastIndex((prevI) => prevI + 10);
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [data, currentTab]);

  if (loading || !data) return <Loading />;

  const tabs = [
    { name: "toman_base", data: filterData("IRT").slice(0, IRTLastIndex) },
    { name: "teter_base", data: filterData("USDT").slice(0, USDTLastIndex) },
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
        <Table key={index} columns={listTableColumns()} rows={tab.data as ResultType[]} extraClasses={currentTab !== index ? "hidden" : ""} />
      ))}
      {((currentTab === 0 && IRTLastIndex < filterData("IRT").length) || (currentTab === 1 && USDTLastIndex < filterData("USDT").length)) && (
        <div ref={loaderRef} className="m-5">
          <p>loading...</p>
        </div>
      )}
    </main>
  );
};

export default ListPage;
