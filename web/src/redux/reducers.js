import { combineReducers } from "redux";

import { reducer as github } from "./github";
import { reducer as contactInfo } from "./contactInfo";
import { reducer as sidebar } from "./sidebar";
import { reducer as ai } from "./ai";

export default () => combineReducers({ github, contactInfo, sidebar, ai });
