import { modelizeRepositories } from "./modelizers";

export const REQUEST_REPOSITORIES = "REQUEST_REPOSITORIES";
export const UPDATE_REPOSITORIES = "UPDATE_REPOSITORIES";

export function updateRepositories(repositories) {
  return {
    type: UPDATE_REPOSITORIES,
    repositories: modelizeRepositories(repositories),
  };
}

export function requestRepositories() {
  return {
    type: REQUEST_REPOSITORIES,
  };
}
