import { DataFilterProviders } from "@redux/features/providers/interface";
import {
  getAllProviders,
  getAllProvidersByFilter,
} from "@redux/features/providers/services";
import { useState } from "react";
import { useDispatch } from "react-redux";

const useFilterStates = () => {
  const [filterNit, setFilterNit] = useState<string>("");
  const [filterName, setFilterName] = useState<string>("");
  const [disabledClear, setDisabledClear] = useState<boolean>(true);
  const [dataFilter, setDataFilter] = useState<DataFilterProviders>({
    name: "",
    nit: "",
  });
  const dispatch = useDispatch();
  const handleFilterNit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisabledClear(false);
    setFilterNit(e.target.value);
    setFilterName("");
    setDataFilter({
      name: filterName,
      nit: e.target.value,
    });
  };
  const handleFilterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisabledClear(false);
    setFilterNit("");
    setFilterName(e.target.value);
    setDataFilter({
      name: e.target.value,
      nit: filterNit,
    });
  };

  const handleOnSubmit = () => {
    if (filterNit.trim() || filterName.trim()) {
      dispatch(getAllProvidersByFilter(dataFilter));
      console.log(dataFilter);
      return;
    }
  };
  const handleClearFields = () => {
    setDataFilter({
      name: "",
      nit: "",
    });
    setFilterNit("");
    setFilterName("");
    if (filterName !== "" || filterNit !== "") {
      dispatch(getAllProviders());
      setDisabledClear(true);
      return;
    }
  };

  return {
    filterName,
    filterNit,
    dataFilter,
    handleFilterName,
    handleFilterNit,
    handleClearFields,
    handleOnSubmit,
    disabledClear,
  };
};

export default useFilterStates;
