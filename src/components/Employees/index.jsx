import { useEffect, useState } from "react";
import "./index.css";
import {
  formatSalary,
  formatDistance,
  formatDate,
} from "../../utils/formatters";

const Employees = ({ media }) => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sai Kumar",
      salary: 40000,
      gender: "Male",
      distance: 3000,
      updatedTime: formatDate(),
    },
  ]);

  const addEmployee = () => {
    const newEmployee = {
      id: Date.now(),
      name: "New Employee",
      salary: 10000,
      gender: "Male",
      distance: 0,
      updatedTime: formatDate(),
    };

    setEmployees([...employees, newEmployee]);
  };

  const updateEmployee = (id, field, value) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === id) {
        return {
          ...employee,
          [field]: value,
          updatedTime: formatDate(),
        };
      }

      return employee;
    });

    setEmployees(updatedEmployees);
  };

  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee record?",
    );

    if (confirmDelete) {
      const filteredEmployees = employees.filter(
        (employee) => employee.id !== id,
      );

      setEmployees(filteredEmployees);
    }
  };

  const copyEmployee = (employee) => {
    const confirmCopy = window.confirm(
      "Are you sure you want to copy this employee record?",
    );

    if (confirmCopy) {
      const copiedEmployee = {
        ...employee,
        id: Date.now(),
        updatedTime: formatDate(),
      };

      setEmployees([...employees, copiedEmployee]);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) => ({
          ...employee,
          distance: employee.distance + 80,
          updatedTime: formatDate(),
        })),
      );
    }, 120000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div
      className="employees-section"
      style={{
        backgroundImage: media ? `url(${media})` : "none",
      }}
    >
      <h2>Employee Management</h2>

      <button onClick={addEmployee}>Add Employee</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Gender</th>
            <th>Distance</th>
            <th>Updated Time</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <input
                  value={employee.name}
                  onChange={(e) =>
                    updateEmployee(employee.id, "name", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  className={employee.salary > 50000 ? "red-text" : ""}
                  type="number"
                  value={employee.salary}
                  onChange={(e) =>
                    updateEmployee(employee.id, "salary", e.target.value)
                  }
                />

                <p className="paragraph">{formatSalary(employee.salary)}</p>
              </td>

              <td>
                <select
                  className={employee.gender === "Male" ? "blue-text" : "pink-text"}
                  value={employee.gender}
                  onChange={(e) =>
                    updateEmployee(employee.id, "gender", e.target.value)
                  }
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </td>

              <td className={employee.distance > 2000 ? "red-text" : ""}>
                {formatDistance(employee.distance)}
              </td>

              <td>{employee.updatedTime}</td>

              <td>
                <button onClick={() => copyEmployee(employee)}>Copy</button>

                <button onClick={() => deleteEmployee(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
