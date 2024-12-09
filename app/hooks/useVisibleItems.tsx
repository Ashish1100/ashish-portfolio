import { useState } from "react";

function useVisibleItems<T>(items: T[], initialVisibleCount: number) {
  const [visibleItems, setVisibleItems] = useState(
    items.slice(0, initialVisibleCount)
  );

  function toggleVisibility() {
    if (visibleItems.length === items.length) {
      setVisibleItems(items.slice(0, initialVisibleCount)); // Show only the first N items
    } else {
      setVisibleItems(items); // Show the full list
    }
  }

  return {
    visibleItems,
    toggleVisibility,
  };
}

export default useVisibleItems;
