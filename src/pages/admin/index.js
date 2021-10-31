import * as React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./Dashboard";
// import authProvider from "./authProvider";
import { ProductList, ProductCreate, ProductEdit } from "./products";
import { myDataProvider } from "./dataProvider";

const AdminPage = () => (
  <Admin
    // authProvider={authProvider}
    dashboard={Dashboard}
    dataProvider={myDataProvider}
  >
    <Resource
      name="product"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
    />
  </Admin>
);

export default AdminPage;
