import { getAllSuggestions } from "@redux/features/orders/services";
import { RootState } from "@redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetNextPreviousSuggestions = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const { suggestions } = useSelector(
    (store: RootState) => store.orders.suggestionsData
  );
  const handleGetNextPage = () => {
    if (page < suggestions!.totalPages) {
      dispatch(getAllSuggestions(page + 1));
      setPage((page) => page + 1);
    } else {
      dispatch(getAllSuggestions(suggestions!.totalPages));
    }
  };
  const handleGetPreviousPage = () => {
    if (page > 1) {
      dispatch(getAllSuggestions(page - 1));
      setPage((page) => page - 1);
    } else {
      dispatch(getAllSuggestions(1));
    }
  };

  return {
    handleGetNextPage,
    handleGetPreviousPage,
    page,
  };
};

export default useGetNextPreviousSuggestions;
