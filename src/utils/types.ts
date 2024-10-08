import { ReactNode } from "react";

export type DataType = {
  count: 558;
  next: null;
  previous: null;
  results: ResultType[];
};

export type ResultType = {
  id: 1;
  currency1: {
    id: 1;
    title: string;
    title_fa: string;
    code: string;
    tradable: boolean;
    for_test: boolean;
    image: string;
    decimal: number;
    decimal_amount: number;
    decimal_irt: number;
    color: string;
    high_risk: boolean;
    show_high_risk: boolean;
    withdraw_commission: string;
    tags: [
      {
        id: number;
        name: string;
        name_en: string;
        has_chart: boolean;
      },
      {
        id: number;
        name: string;
        name_en: string;
        has_chart: boolean;
      }
    ];
    etf: boolean;
    for_binvest: boolean;
    for_loan: boolean;
    for_stake: boolean;
    recommend_for_deposit_weight: number;
  };
  currency2: {
    id: number;
    title: string;
    title_fa: string;
    code: string;
    tradable: boolean;
    for_test: boolean;
    image: string;
    decimal: number;
    decimal_amount: number;
    decimal_irt: number;
    color: string;
    high_risk: boolean;
    show_high_risk: boolean;
    withdraw_commission: string;
    tags: [];
    etf: boolean;
    for_binvest: boolean;
    for_loan: boolean;
    for_stake: boolean;
    recommend_for_deposit_weight: 0;
  };
  tradable: boolean;
  otc_tradable: boolean;
  coming_soon: boolean;
  for_test: boolean;
  otc_sell_percent: string;
  otc_buy_percent: string;
  otc_max_buy_amount: string;
  otc_max_sell_amount: string;
  order_book_info: {
    created_at: null;
    price: string;
    change: -0.0017;
    min: string;
    max: string;
    time: string;
    mean: string;
    value: string;
    amount: string;
  };
  internal_price_info: {
    created_at: number;
    price: string;
    change: number;
    min: string;
    max: string;
    time: null;
    mean: null;
    value: null;
    amount: null;
  };
  price_info: {
    created_at: number;
    price: string;
    change: 0;
    min: string;
    max: string;
    time: null;
    mean: null;
    value: null;
    amount: null;
  };
  price: string;
  title: string;
  code: string;
  title_fa: string;
  trading_view_source: string;
  trading_view_symbol: string;
  otc_market: boolean;
  text: string;
  volume_24h: string;
  market_cap: string;
  circulating_supply: string;
  all_time_high: string;
  popularity_weight: number;
  freshness_weight: number;
  price_increment: null;
};

export type ColumnsType<T> = { name: string; content: (row: T) => any }[];
