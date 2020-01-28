import { useReducer } from "react";
import { getDepartments } from "../services/api";

export default () => {
  const initialState = {
    departments: [],
    errors: "",
    loading: false,
    count: 0
  };

  const GET_DEPARTMENTS = "@DEPARTMENTS/GET_DEPARTMENTS";
  const ERROR = "@DEPARTMENTS/ERROR";
  const LOADING = "@DEPARTMENTS/LOADING";

  const reducer = (state, action) => {
    switch (action.type) {
      case LOADING:
        return { ...state, loading: action.payload };
      case ERROR:
        return { ...state, errors: action.payload };
      case GET_DEPARTMENTS:
        return { ...state, departments: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const loadDepartments = async () => {
    try {
      dispatch({ type: LOADING, payload: true });
      const departments = await getDepartments();
      dispatch({ type: GET_DEPARTMENTS, payload: departments });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    } finally {
      dispatch({ type: LOADING, payload: false });
    }
  };
  return { state, loadDepartments };
};
