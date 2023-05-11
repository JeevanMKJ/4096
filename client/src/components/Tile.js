import { useEffect } from "react";

export const useEvent = (event, handler, passive = false) => {
  useEffect(() => {
    window.addEventListener(event, handler, passive);

    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
};

export const getColors = (num) => {
  switch (num) {
    case 2:
      return "#F3E3D3";
    case 4:
      return "#EAC8AB";
    case 8:
      return "#C2C3A8";
    case 16:
      return "#DD8E75";
    case 32:
      return "#82713D";
    case 64:
      return "#CD7D44";
    case 128:
      return "#B6594C";
    case 256:
      return "#D3AD6B";
    case 512:
      return "#90AEB2";
    case 1024:
      return "#EA7346";
    case 2048:
      return "#E99E75";
    case 4096:
      return "#FFC988";
    default:
      return "#EEE6DE";
  }
};
