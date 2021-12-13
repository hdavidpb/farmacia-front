import NextIcon from "@assets/Icons/NextIcon";
import PreviusIcon from "@assets/Icons/PreviusIcon";
import useGetNextPreviousSuggestions from "@hooks/useGetNextPreviousSuggestions";
import { RootState } from "@redux/store";
import React from "react";
import { useSelector } from "react-redux";
import * as sc from "../styles";

const SugeridoBtnsOptions = () => {
  const { handleGetNextPage, handleGetPreviousPage, page } =
    useGetNextPreviousSuggestions();
  const { suggestions, loading } = useSelector(
    (store: RootState) => store.orders.suggestionsData
  );
  return (
    <sc.FooteerBtnsContainer>
      {!loading ? (
        <sc.Registers>{`Total registros: ${suggestions?.totalResults}`}</sc.Registers>
      ) : null}
      <sc.BtnsOptionsContainer>
        <sc.ButtonOption
          disabled={page === 1 || loading}
          style={{ opacity: page === 1 || loading ? "0.4" : "1" }}
          onClick={handleGetPreviousPage}
        >
          <PreviusIcon />
        </sc.ButtonOption>
        <sc.ButtonOption
          disabled={page === suggestions?.totalPages || loading}
          style={{
            opacity: page === suggestions?.totalPages || loading ? "0.4" : "1",
          }}
          onClick={handleGetNextPage}
        >
          <NextIcon />
        </sc.ButtonOption>
      </sc.BtnsOptionsContainer>
    </sc.FooteerBtnsContainer>
  );
};

export default SugeridoBtnsOptions;
