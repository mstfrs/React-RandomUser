import React from "react";

const AddUser = ({ useradd }) => {
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">FirstName</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {useradd.map((x) => (
            <tr class="thead-dark">
              <td>
                {x.results[0].name.title} {x.results[0].name.first}{" "}
                {x.results[0].name.last}
              </td>
              <td>{x.results[0].email}</td>
              <td>{x.results[0].phone}</td>
              <td>{x.results[0].dob.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddUser;
