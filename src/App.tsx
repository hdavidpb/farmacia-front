import Bodegas from "@components/Bodegas/Bodegas";
import Alertas from "@components/CarrosParo/Alertas";
import Carros from "@components/CarrosParo/Carros";
import Inventario from "@components/Inventario/Inventario";
import Movimientos from "@components/Movimientos/Movimientos";
import DetailsOrders from "@components/OrdenesCompra/Details/DetailsOrders";
import { ListaCompras } from "@components/OrdenesCompra/ListaCompras/ListaCompras";
import OrdenesTable from "@components/OrdenesCompra/Ordenes/OrdenesTable";
import OrdenesCompra from "@components/OrdenesCompra/OrdenesCompra";
import FichaTecnica from "@components/Productos/FichaTecnica/FichaTecnica";
import Productos from "@components/Productos/Productos";
import Proveedores from "@components/Proveedores/Proveedores";
import Sidebar from "@components/Sidebar/Sidebar";
import { publicRoutes } from "@routes/routes";
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import * as sc from "./globalStyles";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <sc.FarmaciaContainer>
          <Sidebar />
          <Switch>
            {publicRoutes.map((rest, index) => (
              <Route {...rest} key={index} />
            ))}
            {/* <Route component={Bodegas} path="/farmacia/bodegas" exact />
          <Route
            component={Movimientos}
            path="/farmacia/bodegas/movimientos"
            exact
          />
          <Route
            component={Inventario}
            path="/farmacia/bodegas/inventario"
            exact
          />
          <Route component={Productos} path="/farmacia/productos" exact />
          <Route component={Proveedores} path="/farmacia/proveedores" exact />
          <Route
            component={OrdenesCompra}
            path="/farmacia/ordenes-compra"
            exact
          />
          <Route component={Carros} path="/farmacia/carros-paro/carros" exact />
          <Route
            component={Alertas}
            path="/farmacia/carros-paro/alertas"
            exact
          />
          <Route
            component={ListaCompras}
            path="/farmacia/ordenes-compra/lista-compras"
            exact
          />
          <Route
            component={OrdenesTable}
            path="/farmacia/ordenes-compra/ordenes-table"
            exact
          />
          <Route
            component={DetailsOrders}
            path="/farmacia/ordenes-compra/ordenes-table/detalles/:id"
            exact
          />
          <Route
            component={FichaTecnica}
            path="/farmacia/productos/ficha-tecnica/:id"
            exact
          /> */}
          </Switch>
        </sc.FarmaciaContainer>
      </HashRouter>
    </Provider>
  );
}

export default App;
