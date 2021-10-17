import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  EditButton,
  SimpleForm,
  Create,
  TextInput,
  ImageInput,
  ImageField,
} from "react-admin";

const TeamTitle = ({ record }) => {
  return <span>Team member {record ? `"${record.name}"` : ""}</span>;
};

export const TeamList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

export const TeamEdit = (props) => (
  <Edit title={<TeamTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="description" />
      <ImageField source="image" />
    </SimpleForm>
  </Edit>
);

export const TeamCreate = (props) => (
  <Create title={<TeamTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />

      <TextInput source="description" />
      <ImageInput source="image" label="Images" accept="image/*">
        <ImageField source="image" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
