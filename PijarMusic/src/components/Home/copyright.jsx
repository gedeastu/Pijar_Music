import React from "react";
import "./copyright.css";
import { useState, useEffect } from "react";
import { FooterGetPosts } from "../../../api/api";
const Copyright = () => {
  return (
    <>
      <div className="bg-[#FF6002] w-full h-96 py-3">
        <p className="text-center font-bold text-sm md:text-base">
          Pijar Music © 2023 Jakarta Inc. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Copyright;
