import { AuthAction } from "./authActions";
import { ChatAction } from "./chatActions";
import { GlobalAction } from "./globalActions";

type AppActions = GlobalAction | AuthAction | ChatAction;

export default AppActions;
