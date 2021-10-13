import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminPage = () => (
  <Admin
    authProvider={authProvider}
    dashboard={Dashboard}
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UserList} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
  </Admin>
);

export default AdminPage;
