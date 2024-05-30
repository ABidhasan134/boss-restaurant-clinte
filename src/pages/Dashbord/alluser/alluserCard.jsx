import React from "react";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSequer from "../../../hooks/useAxiosSequer";

const AlluserCard = ({ item, index, refetch }) => {
  const axiosSecure = useAxiosSequer();

  const handelDeletUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your user has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handelMakeAdmain = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "yes, Make admain ",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`users/admin/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Update as Admin",
              text: `now ${item.name} is a admin`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      {
      item.role?<p className="text-green-500 font-semibold">Admin</p>:<button
      className="btn text-3xl btn-square hover:text-green-500"
      onClick={() => {
        handelMakeAdmain(item._id);
      }}
    >
      <FaUsers></FaUsers>
    </button>
      }
      <td>
        <button
          className="btn text-2xl hover:bg-red-500"
          onClick={() => handelDeletUser(item._id)}
        >
          <span className="p-2">
            <MdDelete />
          </span>
        </button>
      </td>
    </tr>
  );
};

export default AlluserCard;
