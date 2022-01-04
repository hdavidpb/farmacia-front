import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import ButtonsLinks from "../ButtonsLinks";
import { OrdenesContainer } from "../styles";
import { titles } from "./const";
import * as sc from "./styles";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {
  deletePurchaseOrderProduct,
  getOrderDetail,
  updateOrderStatus,
} from "../../../redux/features/orders/services";
import { RootState } from "@redux/store";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { LoaderContainer } from "@components/Inventario/styles";
import GridLoader from "react-spinners/GridLoader";
import { FaTrashAlt } from "react-icons/fa";
import { UpdateOrderData } from "../../../redux/features/orders/interfaces";
import Swal from "sweetalert2";
import { ApproveOrderSignPath } from "@routes/routes";
dayjs.extend(customParseFormat);

const DetailsOrders = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [colorStatus, setColorStatus] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const { orderDetail, loading } = useSelector(
    (store: RootState) => store.orders.orderDetailData
  );
  useEffect(() => {
    dispatch(getOrderDetail(id));
  }, [id]);

  useEffect(() => {
    if (orderDetail?.status === "PENDIENTE") {
      setColorStatus("#9779FE");
    } else if (orderDetail?.status === "ENVIADA") {
      setColorStatus("#86E97F");
    } else if (
      orderDetail?.status === "RECHAZADA" ||
      orderDetail?.status === "CANCELADA"
    ) {
      setColorStatus("#FF5A5A");
    } else if (orderDetail?.status === "RECIBIDO PARCIALMENTE") {
      setColorStatus("#F3A949");
    } else if (orderDetail?.status === "ATRASADA") {
      setColorStatus("#131AE3");
    } else if (orderDetail?.status === "APROBADA") {
      setColorStatus("#6DD7FF");
    }
  }, [orderDetail]);

  const handleChangeStatusOrder = (id: number, status: string) => {
    console.log(status);
    let title = "";
    if (status === "PENDIENTE") {
      title = "APROBADA";
    } else if (status === "APROBADA") {
      title = "ENVIADA";
    } else if (status === "RECHAZADA") {
      title = "RECHAZADA";
    }

    const dataOrder: UpdateOrderData = {
      id: id,
      status: status,
    };
    Swal.fire({
      title: `¿Deseas dar como ${title} esta orden?`,

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5533eeca",
      cancelButtonColor: "#d33",
      confirmButtonText: `Si, dar como ${title}`,
    }).then((result) => {
      if (result.isConfirmed && status === "PENDIENTE") {
        history.push(`/farmacia/orders/sign/${id}`);
        console.log("GO TO SIGN");
        return;
      }
      if (result.isConfirmed) {
        dispatch(updateOrderStatus(dataOrder));
        Swal.fire(
          `¡Orden ${title}!`,
          `La orden ha sido ${title} con exito.`,
          "success"
        );
      }
    });
  };
  const handleDeletePurchaseOrderProduct = (purchaseOrderPruductId: number) => {
    Swal.fire({
      title: `¿Deseas eliminar este producto?`,

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5533eecf",
      cancelButtonColor: "#d33",
      confirmButtonText: `Si, eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePurchaseOrderProduct(purchaseOrderPruductId));
        Swal.fire(`Producto eliminado!`, "", "success");
      }
    });
  };
  return (
    <OrdenesContainer>
      {!loading ? (
        <>
          <sc.GoBackContainer>
            <sc.BtnBack to="/farmacia/ordenes-compra/ordenes-table">
              <MdKeyboardArrowLeft />
              <p>Regresar</p>
            </sc.BtnBack>
          </sc.GoBackContainer>
          <ButtonsLinks view={1} />
          <sc.DetailsContainer>
            <sc.OrderNumberTitle>
              {` Detalles de la Orden No. ${orderDetail?.orderNumber}`}
            </sc.OrderNumberTitle>
            <sc.DescriptionsContainer>
              <sc.HeaderDescriptions>
                <sc.DescContainer>
                  <h6>Empresa:</h6>
                  <p>Organización Clínica Bonnadona Prevenir S.A.S</p>
                </sc.DescContainer>
                <sc.DescContainer>
                  <h6>Sede:</h6>
                  <p>Sede Única</p>
                </sc.DescContainer>
                <sc.DescContainer>
                  <h6>Documento:</h6>
                  <p>Orden de Compra</p>
                </sc.DescContainer>
                <sc.DescContainer>
                  <h6>Fecha:</h6>
                  <p>
                    {dayjs(orderDetail?.date).format("DD/MM/YYYY hh:mm:ss")}
                  </p>
                </sc.DescContainer>
                <sc.DescContainer>
                  <h6>Concepto:</h6>
                  <p>Orden de Compra</p>
                </sc.DescContainer>
                <sc.DescContainer>
                  <h6>Proveedor:</h6>
                  <p>
                    {`${orderDetail?.providerCode} ${orderDetail?.providerName}`}
                  </p>
                </sc.DescContainer>
                <sc.DescContainer>
                  <h6>Vía:</h6>
                  <p>Aérea</p>
                </sc.DescContainer>
                <sc.DescContainer>
                  <h6>Bodega:</h6>
                  <p>{`${orderDetail?.warehouseCode} - ${orderDetail?.warehouseDescription}`}</p>
                </sc.DescContainer>
                <sc.DescContainer>
                  <h6>Plazo:</h6>
                  <p>{orderDetail?.paymentDeadline.trim()}</p>
                </sc.DescContainer>
              </sc.HeaderDescriptions>
              <sc.FooterDescriptions>
                <sc.DescContainer>
                  <h6>Observaciones:</h6>
                  <p>{orderDetail?.observation}</p>
                </sc.DescContainer>
                <sc.DescContainer
                  style={{
                    background: colorStatus,
                    color: colorStatus === "#131AE3" ? "#ffffff" : "black",
                  }}
                >
                  <h6>Estado:</h6>
                  <p>{orderDetail?.status}</p>
                </sc.DescContainer>
              </sc.FooterDescriptions>
            </sc.DescriptionsContainer>
            <sc.TitlesTableContainer>
              {titles.map((title: string, index) => (
                <sc.TitleDesc key={index}>{title}</sc.TitleDesc>
              ))}
            </sc.TitlesTableContainer>
            <sc.TableContainer>
              {orderDetail?.products.map((product) => (
                <sc.ListaContainer key={product.productCode}>
                  <sc.DescList>{product.productCode}</sc.DescList>
                  <sc.DescList>{product.productName}</sc.DescList>
                  <sc.DescList>FC Frasco Verificar (NO VIENE)</sc.DescList>
                  <sc.DescList>5 Verificar (NO VIENE)</sc.DescList>
                  <sc.DescList>{`${product.deliveryTime} días`}</sc.DescList>
                  <sc.DescList>{product.quantity}</sc.DescList>
                  <sc.DescList>{`$ ${new Intl.NumberFormat("de-DE").format(
                    product.unitValue
                  )}`}</sc.DescList>
                  <sc.DescList>19% Verificar (NO VIENE)</sc.DescList>
                  <sc.DescList>{`${product.discount} %`}</sc.DescList>
                  <sc.DescList>
                    {`$ ${new Intl.NumberFormat("de-DE").format(
                      product.totalValue
                    )}`}
                  </sc.DescList>
                  {/* DELETE PURCHASE PRODUC ORDER */}
                  <sc.DescList>
                    <sc.IconContainer
                      onClick={() =>
                        handleDeletePurchaseOrderProduct(
                          product.purchaseOrderProductId
                        )
                      }
                    >
                      <FaTrashAlt />
                    </sc.IconContainer>
                  </sc.DescList>
                </sc.ListaContainer>
              ))}
            </sc.TableContainer>
            <sc.FooterOptionsContainer>
              {orderDetail?.status === "PENDIENTE" && (
                <>
                  <sc.BtnOption
                    background="#FF5A5A"
                    onClick={() =>
                      handleChangeStatusOrder(orderDetail.id, "RECHAZADA")
                    }
                  >
                    Rechazar
                  </sc.BtnOption>
                  <sc.BtnOption
                    background="#86E97F"
                    onClick={() =>
                      handleChangeStatusOrder(
                        orderDetail.id,
                        orderDetail.status
                      )
                    }
                  >
                    Aprobar
                  </sc.BtnOption>
                </>
              )}
              {orderDetail?.status === "APROBADA" && (
                <>
                  <sc.BtnOption
                    background="#86E97F"
                    onClick={() =>
                      handleChangeStatusOrder(
                        orderDetail.id,
                        orderDetail.status
                      )
                    }
                  >
                    Enviar
                  </sc.BtnOption>
                </>
              )}
            </sc.FooterOptionsContainer>
          </sc.DetailsContainer>
        </>
      ) : (
        <LoaderContainer>
          <GridLoader color={"#CDCFFE"} size={50} />
        </LoaderContainer>
      )}
    </OrdenesContainer>
  );
};

export default DetailsOrders;
