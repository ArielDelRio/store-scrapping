"use client";
import styles from "./InfoContainer.module.css";
import { JSONTree } from "react-json-tree";

const darkTheme = {
  scheme: "dark",
  author: "Your Name",
  base00: "#1c1c1c",
  base01: "#303030",
  base02: "#454545",
  base03: "#808080",
  base04: "#a0a0a0",
  base05: "#d0d0d0",
  base06: "#e0e0e0",
  base07: "#f5f5f5",
  base08: "#ff6666",
  base09: "#ff9966",
  base0A: "#ffd966",
  base0B: "#99ff99",
  base0C: "#66cccc",
  base0D: "#6699ff",
  base0E: "#cc66ff",
  base0F: "#ffcc66",
};

interface InfoContainerProps {
  product: unknown;
  loading: boolean;
}

const InfoContainer = ({ product, loading }: InfoContainerProps) => {
  return (
    <div
      className={`lg:w-6/12 md:w-10/12 min-h-20 min-h-64 p-4 ${styles.infoContainer}`}
    >
      {loading && (
        <div className="flex justify-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-sky-300 "
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
      {!product && !loading ? (
        <p>Data will be displayed here</p>
      ) : (
        <JSONTree data={product} theme={darkTheme} />
      )}
    </div>
  );
};

export default InfoContainer;
