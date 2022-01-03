import { LoaderContainer } from "@components/Inventario/styles";
import { ISuggestionsResult } from "@redux/features/orders/interfaces";
import { addToShoppingList } from "@redux/features/orders/ordersSlice";
import { putIgnoreSuggestions } from "@redux/features/orders/services";
import { RootState } from "@redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import * as sc from "../styles";
const SugeridosTable = () => {
  const dispatch = useDispatch();
  const { suggestions, loading } = useSelector(
    (store: RootState) => store.orders.suggestionsData
  );

  const handleAddToShoopingList = (sugg: ISuggestionsResult) => {
    dispatch(addToShoppingList(sugg));
  };
  return (
    <sc.SugeridosTableContainer>
      {!loading ? (
        suggestions?.results.map((suggestion) => (
          <sc.SegeridosListItem key={suggestion.id}>
            <sc.ItemsOne>
              <sc.DescContainer>
                <h6>Medicamento:</h6>
                <p>{suggestion.product.name}</p>
              </sc.DescContainer>
              <sc.DescContainer>
                <h6>Categoría:</h6>
                <p>{suggestion.product.category.name}</p>
              </sc.DescContainer>
              <sc.DescContainer>
                <h6>Existencias:</h6>
                <p>{suggestion.productStock}</p>
              </sc.DescContainer>
              <sc.DescContainer>
                <h6>Consumo Estimado:</h6>
                <p>{suggestion.objective}</p>
              </sc.DescContainer>
              <sc.DescContainer>
                <h6>Proveedor:</h6>
                <p>{suggestion.contract?.provider.providerName}</p>
              </sc.DescContainer>
            </sc.ItemsOne>
            <sc.ItemsTwo>
              <sc.DescontainerTwo>
                <h6>Sugerencia:</h6>
                <sc.SegerencyNumberBox>
                  {suggestion.suggestion}
                </sc.SegerencyNumberBox>
              </sc.DescontainerTwo>
              <sc.ItemsOne>
                <sc.DescontainerTwo>
                  <h6>Precio:</h6>
                  <p>{`$ ${new Intl.NumberFormat("de-DE").format(
                    suggestion.product.price
                  )}`}</p>
                </sc.DescontainerTwo>
                <sc.DescontainerTwo>
                  <h6>Total:</h6>
                  <p>{`${new Intl.NumberFormat("de-DE").format(
                    suggestion.totalPrice ? suggestion.totalPrice : 0
                  )}`}</p>
                </sc.DescontainerTwo>
              </sc.ItemsOne>
            </sc.ItemsTwo>
            <sc.ItemsTwo>
              <sc.DescontainerTwo>
                <sc.Button
                  add={true}
                  onClick={() => handleAddToShoopingList(suggestion)}
                >
                  Agregar
                </sc.Button>
                <sc.Button
                  add={false}
                  onClick={() => dispatch(putIgnoreSuggestions(suggestion.id))}
                >
                  Ignorar
                </sc.Button>
              </sc.DescontainerTwo>
            </sc.ItemsTwo>
          </sc.SegeridosListItem>
        ))
      ) : (
        <LoaderContainer>
          <GridLoader color={"#CDCFFE"} size={50} />
        </LoaderContainer>
      )}
    </sc.SugeridosTableContainer>
  );
};

export default SugeridosTable;
