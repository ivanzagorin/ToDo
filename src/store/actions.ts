import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { State } from "./state";

export enum ActionTypes {
  GetTodoItems = "GET_ITEMS",
}

type ActionAuguments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.GetTodoItems](context: ActionAuguments): void;
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetTodoItems]({ commit }) {
    commit(MutationType.SetItems, [
      {
        id: 1,
        text: "Test",
        completed: false,
      },
    ]);
  },
};