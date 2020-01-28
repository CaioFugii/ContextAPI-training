import React, { Fragment } from "react";

import useDepartments from "../hooks/Departments";

const DepartmentsPage = () => {
  const { state, loadDepartments } = useDepartments();

  return (
    <Fragment>
      <ul>
        {state.departments.map(department => (
          <li>{department.name}</li>
        ))}
      </ul>
      <button disabled={state.loading} onClick={loadDepartments}>
        Buscar departamentos
      </button>
      {state.errors && <p>Error!!!</p>};
    </Fragment>
  );
};
export default DepartmentsPage;
