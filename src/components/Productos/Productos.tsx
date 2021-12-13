import React, { useEffect } from "react";
import * as sc from "./styles";
import "./styles.css";
import Select from "react-select";
import TableContainer from "./TableContainer";
import { useForm, Controller } from "react-hook-form";
import {
  getFilterProductsArray,
  getOptions,
  clearFilter,
  clearShowPacking,
} from "../../redux/features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { DataOptionsForm } from "./interfaces";
import { AiOutlineClear } from "react-icons/ai";
import { clearInventorieState } from "../../redux/features/inventorie/inventorieSlice";
import { clearShowMovementsDoneState } from "../../redux/features/movements/movementsSlice";
import { BiSearchAlt } from "react-icons/bi";

const Productos = () => {
  const dispatch = useDispatch();

  const { results } = useSelector(
    (store: RootState) => store.products.productsData.products
  );
  const { options } = useSelector(
    (store: RootState) => store.products.productsData
  );
  const { control, reset, watch, register, handleSubmit } =
    useForm<DataOptionsForm>({
      defaultValues: {
        category: null,
        code: null,
        name: null,
      },
    });

  const onSubmit = (data: DataOptionsForm) => {
    if (data.name && data.name.trim()) {
      dispatch(getFilterProductsArray(data.name));
      return;
    }
    if (data.code && data.code.trim()) {
      console.log("Se envio el codigo");
      dispatch(getFilterProductsArray(data.code));
      return;
    }
    if (data.category) {
      console.log(data.category?.value);
      dispatch(getFilterProductsArray(data.category.value));
      return;
    }

    console.log("Click ====>", data);
  };

  const handleClearSelects = () => {
    dispatch(clearFilter());
    reset();
  };

  useEffect(() => {
    /* CLEAN STATES*/
    dispatch(clearInventorieState());
    dispatch(clearShowMovementsDoneState());
    dispatch(clearShowPacking());
  }, []);

  useEffect(() => {
    dispatch(getOptions());
  }, [results]);
  return (
    <sc.ProductosContainer>
      <sc.FilterContainer>
        <sc.InputsContainer>
          <sc.Label>Filtrar Categoría</sc.Label>
          <sc.SelectImputContainer>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select {...field} options={options.categories} />
              )}
            />
          </sc.SelectImputContainer>
        </sc.InputsContainer>
        <sc.InputsContainer>
          <sc.Label>Filtro de Código</sc.Label>
          <input type="text" {...register("code")} />
        </sc.InputsContainer>
        <sc.InputsContainer>
          <sc.Label>Filtro de Nombre</sc.Label>

          <input type="text" {...register("name")} />
        </sc.InputsContainer>

        <sc.InputsContainer onClick={handleSubmit(onSubmit)}>
          <sc.ClearInputsContainer>
            <BiSearchAlt />
          </sc.ClearInputsContainer>
        </sc.InputsContainer>
        <sc.InputsContainer onClick={handleClearSelects}>
          <sc.ClearInputsContainer>
            <AiOutlineClear />
          </sc.ClearInputsContainer>
        </sc.InputsContainer>
      </sc.FilterContainer>
      {/*TABLE CONTAINER*/}
      <TableContainer />
    </sc.ProductosContainer>
  );
};

export default Productos;
