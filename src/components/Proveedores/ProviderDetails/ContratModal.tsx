import Aos from "aos";
import React, { useEffect, useState } from "react";
import * as sc from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  getProductDetailByCode,
  postNewContract,
} from "../../../redux/features/providers/services";
import { RootState } from "@redux/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router";
import { DataGetDetailProduct } from "@redux/features/products/interface";
import { DataToCalculate, getPromNegotiation } from "./constants";
import { ContractPostData } from "@redux/features/providers/interface";
type DataForm = {
  providerId: string;
  productCode: string;
  expirationDate: string;
  productGenericName: string;
  productComercialName: string;
  previousPrice: string;
  minorPrice: string;
  regulatedPrice: string;
  listPrice: string;
  discountPercentage: string;
  unitsNumberForApplyDiscount: string;
  giftedUnits: string;
  unitsNumberForApplyGiftedUnits: string;
  unitPrice: string;
  priceAfterNegotiation: string;
  observation: string;
};

const ContratModal = () => {
  const [name, setName] = useState<string>("");
  const [previousPrice, setPreviousPrice] = useState<string>("");
  const [minorPrice, setMinorPrice] = useState<string>("");
  const [regulatedPrice, setRegulatedPrice] = useState<string>("");
  const [unitsNumberForApplyDiscount, setUnitsNumberForApplyDiscount] =
    useState<string>("");
  const [giftedUnits, setGiftedUnits] = useState<string>("");
  const [unitsNumberForApplyGiftedUnits, setUnitsNumberForApplyGiftedUnits] =
    useState<string>("");
  const [unitPrice, setUnitPrice] = useState<string>("");

  const [discountPercentage, setDiscountPercentage] = useState<string>("");

  const [priceAfterNegotiation, setPriceAfterNegotiation] =
    useState<string>("");

  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { product, error } = useSelector(
    (store: RootState) =>
      store.providers.providersData.contractsData.productDetail
  );
  const { providerData, loading } = useSelector(
    (store: RootState) => store.providers.providersData.contractsData
  );

  const {
    register,
    handleSubmit,

    reset,
    watch,
    formState: { errors },
  } = useForm<DataForm>({
    mode: "all",
    defaultValues: {
      providerId: "",
      productCode: "",
      expirationDate: "",
      productGenericName: "",
      productComercialName: "",
      previousPrice: "",
      minorPrice: "",
      regulatedPrice: "",
      listPrice: "",
      discountPercentage: "",
      unitsNumberForApplyDiscount: "",
      giftedUnits: "",
      unitsNumberForApplyGiftedUnits: "",
      unitPrice: "",
      priceAfterNegotiation: "",
      observation: "",
    },
  });

  const onSubmit: SubmitHandler<DataForm> = (data) => {
    if (!unitPrice) {
      toast.warn("Debes digitar un precio por unidad");
      return;
    }
    if (!priceAfterNegotiation) {
      toast.warn("Aún no ha calculado el precio despúes de negociación");
      return;
    }
    if (error) {
      toast.error("Debes agregar un código válido");
      return;
    }

    const formData: ContractPostData = {
      providerId: +id,
      productCode: data.productCode,
      expirationDate: dayjs(data.expirationDate, "YYYY-MM-DD").toISOString(),
      productGenericName: name,
      productComercialName: name,
      previousPrice: previousPrice ? +previousPrice : 0,
      minorPrice: minorPrice ? +minorPrice : 0,
      regulatedPrice: regulatedPrice ? +regulatedPrice : 0,
      listPrice: +data.listPrice,
      discountPercentage: discountPercentage ? +discountPercentage : 0,
      unitsNumberForApplyGiftedUnits: unitsNumberForApplyGiftedUnits
        ? +unitsNumberForApplyGiftedUnits
        : 0,
      giftedUnits: giftedUnits ? +giftedUnits : 0,
      unitsNumberForApplyDiscount: unitsNumberForApplyDiscount
        ? +unitsNumberForApplyDiscount
        : 0,
      unitPrice: +unitPrice,
      priceAfterNegotiation: +priceAfterNegotiation,
      observation: data.observation,
    };

    dispatch(postNewContract(formData));
    setTimeout(() => {
      reset();
      setName("");
      setPreviousPrice("");
      setMinorPrice("");
      setRegulatedPrice("");
      setUnitsNumberForApplyDiscount("");
      setGiftedUnits("");
      setUnitsNumberForApplyGiftedUnits("");
      setUnitPrice("");
      setDiscountPercentage("");
      setPriceAfterNegotiation("");
      toast.success("¡Contrato agregado con exito!");
    }, 1500);
  };

  const handleGetPriceAfterNegociation = () => {
    if (discountPercentage && !unitsNumberForApplyDiscount) {
      toast.error("Debe agregar unidades para porcentaje");
      return;
    }
    if (giftedUnits && !unitsNumberForApplyGiftedUnits) {
      toast.error("Debe agregar unidades para obsequio");
      return;
    }
    if (!discountPercentage && unitsNumberForApplyDiscount) {
      toast.error("Debe agregar total de porcentaje");
      return;
    }
    if (!giftedUnits && unitsNumberForApplyGiftedUnits) {
      toast.error("Debe agregar cantidad de obsequio");
      return;
    }

    if (unitPrice) {
      const data: DataToCalculate = {
        discountPercentage: discountPercentage,
        unitsNumberForApplyDiscount: unitsNumberForApplyDiscount,
        giftedUnits: giftedUnits,
        unitsNumberForApplyGiftedUnits: unitsNumberForApplyGiftedUnits,
        unitPrice: unitPrice,
      };

      setPriceAfterNegotiation(String(getPromNegotiation(data).toFixed(2)));
    } else {
      toast.error("Debe agregar precio unidad");
    }
  };

  const handleGetProductName = (e: React.FocusEvent<HTMLInputElement>) => {
    const data: DataGetDetailProduct = {
      providerId: id,
      productCode: e.target.value,
    };

    dispatch(getProductDetailByCode(data));
  };

  useEffect(() => {
    if (product) {
      setName(product.productName);
      setMinorPrice(product.minorPrice ? String(product.minorPrice) : "0");
      setPreviousPrice(
        product.previousPrice ? String(product.previousPrice) : "0"
      );
      setRegulatedPrice(
        product.regulatedPrice ? String(product.regulatedPrice) : "0"
      );
      console.log(product.productName);
    }
  }, [product]);

  useEffect(() => {
    if (error) {
      setName("");

      return;
    }
  }, [error]);

  useEffect(() => {
    Aos.init({ duration: 400 });
  }, [product]);

  return (
    <sc.ContratsContainer data-aos="fade-down">
      <sc.FieldsContainer onSubmit={handleSubmit(onSubmit)}>
        <sc.inputsContainer>
          <h6>Código</h6>
          <input
            type="text"
            {...register("productCode", {
              required: {
                value: true,
                message: "Debe digitar un código válido",
              },
            })}
            onBlur={(e) => handleGetProductName(e)}
          />
          {errors.productCode ? (
            <sc.ErrorMsj>{errors.productCode.message}</sc.ErrorMsj>
          ) : null}
        </sc.inputsContainer>
        <sc.inputsContainer>
          <h6>Fecha</h6>
          <input
            type="date"
            {...register("expirationDate", {
              required: {
                value: true,
                message: "Debe seleccionar una fecha",
              },
            })}
          />
          {errors.expirationDate ? (
            <sc.ErrorMsj>{errors.expirationDate.message}</sc.ErrorMsj>
          ) : null}
        </sc.inputsContainer>
        <sc.inputsContainer>
          <h6>Nombre</h6>
          <input
            disabled={true}
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </sc.inputsContainer>
        <sc.inputsContainer>
          <h6>Nombre comercial:</h6>
          <input
            disabled={true}
            type="text"
            {...register("productGenericName")}
            value={name}
          />
        </sc.inputsContainer>
        <sc.SecondaryFieldsContainer>
          <sc.inputsContainer>
            <h6>Precio Anterior:</h6>
            <input
              type="number"
              value={previousPrice!}
              onChange={(e) => setPreviousPrice(e.target.value)}
            />
          </sc.inputsContainer>
          <sc.inputsContainer>
            <h6>Precio Lista:</h6>
            <input
              type="number"
              {...register("listPrice", {
                required: {
                  value: true,
                  message: "Debe digitar un precio de lista",
                },
              })}
            />
            {errors.listPrice ? (
              <sc.ErrorMsj>{errors.listPrice.message}</sc.ErrorMsj>
            ) : null}
          </sc.inputsContainer>
          <sc.inputsContainer>
            <h6>Precio menor:</h6>
            <input
              type="number"
              value={minorPrice!}
              onChange={(e) => setMinorPrice(e.target.value)}
            />
          </sc.inputsContainer>
          <sc.inputsContainer>
            <h6>Precio regulado:</h6>
            <input
              type="number"
              value={regulatedPrice!}
              onChange={(e) => setRegulatedPrice(e.target.value)}
            />
          </sc.inputsContainer>
        </sc.SecondaryFieldsContainer>
        <sc.CalculingContainer>
          <sc.inputsContainer absolute={true}>
            <h6>Descuento</h6>
            <input
              type="number"
              min="1"
              onChange={(e) => setDiscountPercentage(e.target.value)}
              value={discountPercentage}
            />
          </sc.inputsContainer>
          <sc.SecondaryIconContainer>
            <h6>%</h6>
          </sc.SecondaryIconContainer>
          <sc.SecondaryIconContainer>
            <span>X</span>
          </sc.SecondaryIconContainer>
          <sc.inputsContainer>
            <input
              type="number"
              min="1"
              onChange={(e) => setUnitsNumberForApplyDiscount(e.target.value)}
              value={unitsNumberForApplyDiscount}
            />
          </sc.inputsContainer>
          <sc.SecondaryIconContainer>
            <h6>Und</h6>
          </sc.SecondaryIconContainer>
        </sc.CalculingContainer>
        <h1></h1>
        <sc.CalculingContainer>
          <sc.inputsContainer absolute={true}>
            <h6>Obsequio</h6>
            <input
              type="number"
              min="1"
              value={giftedUnits}
              onChange={(e) => setGiftedUnits(e.target.value)}
            />
          </sc.inputsContainer>
          <sc.SecondaryIconContainer>
            <h6>Und</h6>
          </sc.SecondaryIconContainer>
          <sc.SecondaryIconContainer>
            <span>X</span>
          </sc.SecondaryIconContainer>
          <sc.inputsContainer>
            <input
              type="number"
              min="1"
              value={unitsNumberForApplyGiftedUnits}
              onChange={(e) =>
                setUnitsNumberForApplyGiftedUnits(e.target.value)
              }
            />
          </sc.inputsContainer>
          <sc.SecondaryIconContainer>
            <h6>Und</h6>
          </sc.SecondaryIconContainer>
        </sc.CalculingContainer>
        <sc.CalculatePromBtn onClick={handleGetPriceAfterNegociation}>
          Calcular
        </sc.CalculatePromBtn>
        <sc.inputsContainer>
          <h6>Precio Unidad:</h6>
          <input
            type="number"
            min="1"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </sc.inputsContainer>
        <sc.inputsContainer>
          <h6>Precio Después de negociacón</h6>
          <input disabled={true} type="number" value={priceAfterNegotiation} />
        </sc.inputsContainer>
        <sc.inputsContainer grid={true}>
          <h6>Observación:</h6>
          <input type="text" {...register("observation")} />
        </sc.inputsContainer>

        <button disabled={loading} type="submit">
          {!loading ? "Agregar" : <ClipLoader size={18} color={"white"} />}
        </button>
      </sc.FieldsContainer>
    </sc.ContratsContainer>
  );
};

export default ContratModal;
