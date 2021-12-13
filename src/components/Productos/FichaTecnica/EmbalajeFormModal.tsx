import { RootState } from "@redux/store";
import Aos from "aos";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import * as sc from "./styles";
import { IPackingDataPost } from "../../../redux/features/products/interface";
import { postPacking } from "../../../redux/features/products/services";
import { toast } from "react-toastify";
export type DataFormPacking = {
  code: string | null;
  quantity: number | null;
  packingTypeId: { value: number; label: string } | null;
  providerId: number;
  productCode: string;
};
const EmbalajeFormModal = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  const dispatch = useDispatch();
  const { contractSelected } = useSelector(
    (store: RootState) => store.products.packingsData
  );

  const {
    register,
    handleSubmit,
    control,
    reset,

    formState: { errors },
  } = useForm<DataFormPacking>({
    mode: "all",
    defaultValues: {
      code: null,
      quantity: null,
      packingTypeId: null,
      providerId: contractSelected?.providerId,
      productCode: contractSelected?.productCode,
    },
  });

  const { packingTypes } = useSelector(
    (store: RootState) => store.products.packingsData
  );
  const onSubmit: SubmitHandler<DataFormPacking> = (data) => {
    const dataForm: IPackingDataPost = {
      code: data.code!,
      packingTypeId: +data.packingTypeId?.value!,
      quantity: +Number(data.quantity!),
      providerId: data.providerId,

      productId: contractSelected!.productId,
    };

    console.log(dataForm);
    dispatch(postPacking(dataForm));
    toast.success("Embalaje agregado con exito");
    reset();
  };
  return (
    <sc.EmbalajeFormContainer
      data-aos="fade-down"
      onSubmit={handleSubmit(onSubmit)}
    >
      <sc.FieldsContainer>
        <sc.inputsContainer>
          <h6>Código</h6>
          <input
            type="text"
            {...register("code", {
              required: {
                value: true,
                message: "Debe digitar un código válido",
              },
            })}
          />
        </sc.inputsContainer>
        <sc.inputsContainer>
          <h6>Tipo</h6>
          <sc.SelectContainer>
            <Controller
              name="packingTypeId"
              control={control}
              render={({ field }) => (
                <Select {...field} options={packingTypes} />
              )}
              rules={{ required: true }}
            />
          </sc.SelectContainer>
        </sc.inputsContainer>
        <sc.inputsContainer grid={true}>
          <h6>Cantidad</h6>
          <input
            type="number"
            min="0"
            {...register("quantity", {
              required: {
                value: true,
                message: "Debe digitar una cantifdad valida",
              },
            })}
          />
        </sc.inputsContainer>
        <button type="submit">Agregar</button>
      </sc.FieldsContainer>
    </sc.EmbalajeFormContainer>
  );
};

export default EmbalajeFormModal;
