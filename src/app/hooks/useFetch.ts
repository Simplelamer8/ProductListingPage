import { useState, useEffect } from "react";
import axios from "axios";

function useFetch<T>(url: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false); // Initially not loading
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) {
      return; // Skip fetching if URL is not valid
    }

    const fetchData = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset error before new fetch

      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData();
  }, [url]); // Fetch data whenever the URL changes

  return { data, loading, error };
}

export default useFetch;
