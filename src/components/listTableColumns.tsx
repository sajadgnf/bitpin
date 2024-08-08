import { ColumnsType, ResultType } from "../utils/types";
import Trans from "./trans";

const listTableColumns = () => {
  const items: ColumnsType<ResultType> = [
    {
      name: "cryptocurrency_name",
      content: (row: ResultType) => (
        <div className="cryptocurrency_name_style">
          <img src={row.currency1.image} width={38} alt={row.title} />
          <div>
            <h4>{row.currency1.title_fa} </h4>
            <p>
              {row.currency1.code} / {row.currency2.code}
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "price",
      content: (row: ResultType) => (
        <>
          {row.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <Trans>toman</Trans>
        </>
      ),
    },
    {
      name: "24_hour_change",
      content: (row: ResultType) => (row.volume_24h),
    },
  ];

  return items;
};

export default listTableColumns;
