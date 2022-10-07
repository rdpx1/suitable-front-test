import React, { useState, useEffect } from "react";
import useFetch from "./fetch/useFetch";
import { header_data } from "../lib/paths";
import useSWR from "swr";

const useHeaderData = () => {
  const { data, isValidating, error } = useSWR(header_data);
  const results = data ? data.results[0] : [];

  return {
    results,
    isValidating,
    error,
  };
};

export default useHeaderData;
