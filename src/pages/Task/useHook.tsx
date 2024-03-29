import { useEffect, useState } from "react";
import { getTimeSeries } from "../../services/getTimeSeries";

const useHook = () => {
  const [timeSeries, setTimeSeries] = useState({});
  const [metaData, setMetaData] = useState<{ title: string; value: string }[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const meta: { title: string; value: string }[] = [];
    setLoading(true);
    getTimeSeries().then((res) => {
      console.log(res);
      if (res.status === 200 && !res.data.Information) {
        setTimeSeries(res.data["Time Series (5min)"]);
        for (const key in res.data["Meta Data"]) {
          meta.push({ title: key, value: res.data["Meta Data"][key] });
        }
        setMetaData(meta);
        setError(null);
      } else {
        setError(res.data.Information);
      }
      setLoading(false);
    });
  }, []);

  return { timeSeries, metaData, error, loading };
};

export default useHook;
