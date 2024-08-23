import React, { useState } from 'react'
import { teamMembers } from '../../Utils/Data'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../Utils/Axios.jsx'
function Users() {
  const [users, setUsers] = useState([])

  const get_all_users = async () => {
    try {
      const { data } = await api.get(`get_all_users/`)
      setUsers(data)
    } catch (error) {
      toast.error(error.message)
    }
  }



  const DeleteUser = async (id) => {
    try {
      const data = { id: id }
      const result = await api.post('', data)
      setUsers(users.filter(user => user.id !== id))
      toast.success("User Deleted")
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          {/* start page title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18">Users Lists</h4>
              </div>
            </div>
          </div>
          {/* end page title */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Users</h4>
                  <div className="table-responsive">
                    <table className="table table-editable table-nowrap align-middle table-edits">
                      <thead>
                        <tr style={{ cursor: "pointer" }}>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Gender</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>

                        {teamMembers.map((object) => (
                          <tr data-id={1} style={{ cursor: "pointer" }}>
                            <td data-field="id" style={{ width: 80 }}>
                              {object.id}
                            </td>
                            <td data-field="name">{object.name}</td>
                            <td data-field="age">24</td>
                            <td data-field="gender">{object.title}</td>
                            <td style={{ width: 100 }}>
                              <Link to="#"
                                className="btn btn-outline-secondary btn-sm edit"
                                title="Edit"
                              >
                                <i className="fas fa-pencil-alt" />
                              </Link>
                              <Link onClick={() => { DeleteUser(object.id) }}
                                className="btn btn-outline-danger btn-sm edit"
                                title="delete"
                              >
                                <i className="fas fa-trash" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end col */}
          </div>{" "}
          {/* end row */}
        </div>{" "}
        {/* container-fluid */}
      </div>

    </>
  )
}

export default Users