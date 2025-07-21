import React from "react";


export const useEventListeners = (handlers) => {
  React.useLayoutEffect(() => {
    const { handleAppFocus, handleVisibilityChange } = handlers;
    
    window.addEventListener("focus", handleAppFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      window.removeEventListener("focus", handleAppFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [handlers]);
};