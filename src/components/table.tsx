import React, { ReactNode } from "react";
import { ColumnsType, ResultType } from "../utils/types";
import Trans from "./trans";

const Table = ({ columns, rows, extraClasses }: { columns: ColumnsType<ResultType>; rows: ResultType[]; extraClasses?: string }) => {
  return (
    <table className={extraClasses}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index} className="table-header">
              <Trans key={col.name + index}>{col.name}</Trans>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((col, index) => (
              <td className="table-rows" key={index}>
                {col.content(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
