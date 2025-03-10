import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from './dataProvider';

import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './Dashboard';

export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>

   <Resource name="patrimoine" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} show={ShowGuesser} icon={UserIcon}  />
  </Admin>
);