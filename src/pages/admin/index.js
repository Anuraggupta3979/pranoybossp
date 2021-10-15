import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
// import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import { firestoreProvider } from "./dataProvider";

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminPage = () => (
  <Admin
    authProvider={authProvider}
    dashboard={Dashboard}
    dataProvider={firestoreProvider}
  >
    <Resource name="categories" list={ListGuesser} />
    <Resource
      name="products"
      list={ListGuesser}
      // edit={PostEdit}
      // create={PostCreate}
    />
  </Admin>
);

export default AdminPage;
