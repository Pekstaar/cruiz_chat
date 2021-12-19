import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div style={{ position: "relative" }}>
      <h2
        className="text-gray-600"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress color="inherit" />
      </h2>
    </div>
  );
};

export default Loading;
