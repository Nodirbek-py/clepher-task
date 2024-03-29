import { AxiosPromise } from "axios";
import apiService from ".";

export const getTimeSeries = async (): AxiosPromise => {
  const response = await apiService.get(
    "query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min",
  );
  return response;
};
