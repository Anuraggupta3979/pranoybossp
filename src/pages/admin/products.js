import * as React from "react";
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  Create,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  ImageField,
  ImageInput,
} from "react-admin";
import { useMediaQuery } from "react-responsive";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const ProductList = (props) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  return (
    <List filters={postFilters} {...props}>
      {/* {!isTabletOrMobileDevice ? ( */}
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <ReferenceField source="categoryId" reference="categories">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="image" />
        <EditButton />
      </Datagrid>
    </List>
  );
  // : (
  //   <SimpleList
  //     primaryText={(record) => record.id}
  //     secondaryText={(record) => record.name}
  //     tertiaryText={(record) => record.description}
  //   />
  // )}

  // );
};

export const ProductEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>
      {/* <ImageInput source="image" label="Images" accept="image/*"> */}
        <ImageField source="image" />
      {/* </ImageInput> */}
    </SimpleForm>
  </Edit>
);

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ImageInput source="image" label="Images" accept="image/*">
        <ImageField source="image" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
