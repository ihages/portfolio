import { useState, useCallback } from 'react';

interface ParsedDateResult {
  text: string;
  index: number;
  date: string;
  start: number | Date;
  end?: number | Date;
}

interface ParseDateResponse {
  results: ParsedDateResult[];
  error?: string;
}

export function useDateParser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parseDate = useCallback(async (text: string): Promise<ParsedDateResult[]> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/portfolio/api/parse-date', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ParseDateResponse = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      return data.results;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    parseDate,
    loading,
    error,
  };
}
