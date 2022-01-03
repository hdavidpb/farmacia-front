import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sc from "../styles";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import ButtonsLinks from "../ButtonsLinks";
import { RootState } from "@redux/store";
import { deleteProductFromList } from "@redux/features/orders/ordersSlice";
export const ListaCompras = () => {
  const dispatch = useDispatch();
  const { shoppingList } = useSelector(
    (store: RootState) => store.orders.shoppingData
  );

  return (
    <sc.OrdenesContainer>
      <sc.BackBtnContainer to="/farmacia/ordenes-compra">
        <RiArrowLeftSLine />
        <p>Regresar</p>
      </sc.BackBtnContainer>
      <ButtonsLinks />
      <sc.TitleTable>
        <sc.TitleContainer>
          <sc.IconContainer>
            <HiOutlineShoppingBag />
          </sc.IconContainer>
          <p>Lista de Compra</p>
        </sc.TitleContainer>
      </sc.TitleTable>
      <sc.ComprasContainer>
        {shoppingList.length !== 0 ? (
          shoppingList.map((el) => (
            <sc.ComprasListItems key={el.id}>
              <sc.DescsItem>
                <sc.DescContainer>
                  <h6>Medicamento:</h6>
                  <p>{el.product.name}</p>
                </sc.DescContainer>
                <sc.DescContainer>
                  <h6>Categoría:</h6>
                  <p>{el.product.category.name}</p>
                </sc.DescContainer>
                <sc.DescContainer>
                  <h6>Existencias:</h6>
                  <p>{el.productStock}</p>
                </sc.DescContainer>
                <sc.DescContainer>
                  <h6>Consumo Estimado:</h6>
                  <p>{el.objective}</p>
                </sc.DescContainer>
              </sc.DescsItem>
              <sc.ProveedorItem>
                <sc.ProveedorDescItem>
                  <h6>Proveedor:</h6>
                  <p>{el.contract?.provider.providerName}</p>
                </sc.ProveedorDescItem>
              </sc.ProveedorItem>
              <sc.PiceItemContainer>
                <sc.PriceItemOne>
                  <h6>Precio:</h6>
                  <p>{`$ ${new Intl.NumberFormat("de-DE").format(
                    el.product.price
                  )}`}</p>
                </sc.PriceItemOne>
                <sc.PriceItemOne>
                  <h6>Total:</h6>
                  <p>{`${new Intl.NumberFormat("de-DE").format(
                    el.totalPrice ? el.totalPrice : 0
                  )}`}</p>
                </sc.PriceItemOne>
                <sc.CantidadItem>
                  <h6>Cantidad:</h6>
                  <p>{el.productStock}</p>
                </sc.CantidadItem>
              </sc.PiceItemContainer>
              <sc.PriceItemOne>
                <button onClick={() => dispatch(deleteProductFromList(el.id))}>
                  <FaTrashAlt />
                </button>
              </sc.PriceItemOne>
            </sc.ComprasListItems>
          ))
        ) : (
          <div> Aún no tiene productos en la lista </div>
        )}
      </sc.ComprasContainer>
      <sc.GenerateOrderContainer>
        <h4>Generar Orden</h4>
      </sc.GenerateOrderContainer>
    </sc.OrdenesContainer>
  );
};
