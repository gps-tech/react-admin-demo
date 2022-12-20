import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource name="users" list={UserList} recordRepresentation="name" />
  </Admin>
);

export default App;

// "Optimistic Rendering And Undo"
