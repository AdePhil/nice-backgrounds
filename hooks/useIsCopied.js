import { useState, useEffect } from "react";

export function useIsCopied(defaultValue = false) {
  const [isCopied, setIsCopied] = useState(defaultValue);

  useEffect(() => {
    if (isCopied) {
      window.setTimeout(() => {
        setIsCopied(false);
      }, [1000]);
    }
  }, [isCopied]);

  return [isCopied, setIsCopied];
}
