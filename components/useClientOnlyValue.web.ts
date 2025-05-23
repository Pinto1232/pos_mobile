import { useEffect, useState } from 'react';

// `useEffect` is not invoked during server rendering, meaning
// we can use this to determine if we're on the server or not.
export function useClientOnlyValue<T>(
  server: T,
  client: T,
): T {
  const [value, setValue] = useState<T>(server);
  useEffect(() => {
    setValue(client);
  }, [client]);

  return value;
}
