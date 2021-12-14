import React, { useEffect, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import * as sc from "./styles";

import { useDispatch, useSelector } from "react-redux";
import {
  CreateShelf,
  getProductName,
} from "@redux/features/physical-inventory/services";
import { RootState } from "@redux/store";
import {
  IDataPostCreate,
  ProductsArr,
} from "@redux/features/physical-inventory/interfaces";
import { toast } from "react-toastify";
import {
  clearProductDetail,
  deleteProduct,
  setProductsArr,
  setShowModal,
} from "@redux/features/physical-inventory/physicalInventorieSlice";

type DataForm = {
  shelfName: string;
  productCode: string;
  productName: string;
};

const ModalForm = () => {
  const dispatch = useDispatch();
  const { productDetail, productsArray } = useSelector(
    (store: RootState) => store.physicalInventorie.modalStates
  );
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const {
    register,
    handleSubmit,

    reset,
    watch,
    formState: { errors },
  } = useForm<DataForm>({
    mode: "all",
    defaultValues: {
      shelfName: "",
    },
  });

  const handleGetProductName = (e: React.FocusEvent<HTMLInputElement>) => {
    dispatch(getProductName(e.target.value));
  };

  const onSubmit = (data: DataForm) => {
    const productsId = productsArray.map((product) => product.id);

    if (productsId.length === 0) {
      toast.error("Aún no tiene productos en la lista");
      return;
    }

    const dataPost: IDataPostCreate = {
      shelfName: data.shelfName,
      productIds: productsId,
    };
    reset();

    dispatch(CreateShelf(dataPost));
    dispatch(clearProductDetail());
    console.log(dataPost);
  };

  const handleAddProduc = () => {
    if (!productCode.trim() || !productName.trim()) {
      toast.error("Debes agregar un código valído");
      return;
    }
    const productArrDetail: ProductsArr = {
      code: productCode,
      name: productName,
      id: productDetail!.id,
    };
    dispatch(setProductsArr(productArrDetail));
    setProductCode("");
    setProductName("");
  };

  useEffect(() => {
    if (productDetail) {
      setProductName(productDetail.name);
    }
  }, [productDetail]);

  return (
    <sc.ModalFormContainer onSubmit={handleSubmit(onSubmit)}>
      <sc.CloseBtn onClick={() => dispatch(setShowModal())}>x</sc.CloseBtn>
      <sc.FieldContainer>
        <h6>Nombre Estante</h6>
        <input
          type="text"
          {...register("shelfName", {
            required: {
              value: true,
              message: "Debe digitar un nombre para el estante",
            },
          })}
        />
      </sc.FieldContainer>

      <sc.ProductsField>
        <sc.FieldContainer>
          <h6>Productos</h6>
          <input
            type="text"
            placeholder="Ingresa código"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
            onBlur={(e) => handleGetProductName(e)}
          />
        </sc.FieldContainer>
        <sc.FieldContainer>
          <input
            disabled={true}
            type="text"
            placeholder="Nombre"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </sc.FieldContainer>
        <sc.Btn
          type="button"
          onClick={handleAddProduc}
          disabled={!productName.trim()}
        >
          <FaPlus />
        </sc.Btn>
      </sc.ProductsField>
      <sc.TableProductsContainer>
        {productsArray.map((product) => (
          <sc.TablListContainer key={product.code}>
            <sc.ListDesc>{product.code}</sc.ListDesc>
            <sc.ListDesc>{product.name}</sc.ListDesc>
            <sc.ListDesc
              cursorPointer={true}
              onClick={() => dispatch(deleteProduct(product.id))}
            >
              <FaTrash color="#FF4848" />
            </sc.ListDesc>
          </sc.TablListContainer>
        ))}
      </sc.TableProductsContainer>
      <sc.Btn>Listo</sc.Btn>
    </sc.ModalFormContainer>
  );
};

export default ModalForm;
