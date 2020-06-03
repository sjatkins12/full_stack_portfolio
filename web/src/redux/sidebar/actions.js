export const UPDATE_SIDEBAR = "UPDATE_SIDEBAR";

export function setSidebarState(open) {
  return {
    type: UPDATE_SIDEBAR,
    open,
  };
}
