"use client";

import {
  handleDeleteFirestoreData,
  handleGetFirestore,
} from "@/utils/firestoreUtils";
import Link from "next/link";
import { useEffect, useState } from "react";
import DeleteDialog from "../dialogs/DeleteDialog";

const SearchData = ({ location }) => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleGetData = async () => {
    let data = await handleGetFirestore(location);
    console.log("Data....", data);
    setData([...data]);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const handleDeleteClick = (itemId) => {
    setSelectedItemId(itemId); // Salvează ID-ul elementului selectat
    setShowModal(true); // Afișează modalul
  };

  // Închide modalul fără a șterge
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Logica de ștergere a elementului
  const handleConfirmDelete = async () => {
    console.log("Deleting item with ID:", selectedItemId);
    console.log("location.....:", location);
    let updatedData = await handleDeleteFirestoreData(
      `${location}/${selectedItemId}`,
      true,
      location
    );
    // Aici adaugi logica pentru a șterge elementul din sursa ta de date
    setData(updatedData);
    setShowModal(false); // Închide modalul după ștergere
  };

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Stare</th>
            <th scope="col">Categorie/Judet/Localitate</th>

            <th scope="col">Nume</th>
            <th scope="col">Adaugate</th>
            <th scope="col">Editat</th>

            <th scope="col">Acțiuni</th>
          </tr>
        </thead>
        {/* End thead */}

        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <th className="title" scope="row">
                  #{item.id && item.id}
                </th>

                <td className="para">{item.stare && item.stare}</td>
                <td className="para">
                  {item.categorie && item.categorie}/{item.judet && item.judet}/
                  {item.localitate && item.localitate}
                </td>
                <td className="para">{item.siteName && item.siteName}</td>

                <td className="para">
                  {" "}
                  {item.firstUploadDate && item.firstUploadTime
                    ? `${item.firstUploadDate} ${item.firstUploadTime}`
                    : null}
                </td>
                <td className="para">
                  {" "}
                  {item.EditDate && item.Edittime
                    ? `${item.EditDate} ${item.Edittime}`
                    : null}
                </td>
                <td>
                  <ul className="view_edit_delete_list mb0">
                    <li
                      className="list-inline-item"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="View"
                    >
                      <a href="#">
                        <span className="flaticon-view"></span>
                      </a>
                    </li>
                    <Link
                      href={{
                        pathname: `adauga-${location.toLowerCase()}/${item.id}`,
                        query: {
                          id: item.id,
                        },
                      }}
                      as={`adauga-${location.toLowerCase()}/${item.id}`}
                      legacyBehavior
                    >
                      <li
                        className="list-inline-item"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit"
                      >
                        <a href="#">
                          <span className="flaticon-edit"></span>
                        </a>
                      </li>
                    </Link>
                    <li
                      className="list-inline-item"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDeleteClick(item.documentId);
                      }}
                    >
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          handleDeleteClick(item.documentId);
                        }}
                      >
                        <span className="flaticon-garbage"></span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            ))}

          {/* End tr */}
        </tbody>
        {/* End tbody */}
      </table>
      {/* Modalul de confirmare ștergere */}
      {showModal && (
        <DeleteDialog
          handleConfirmDelete={handleConfirmDelete}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default SearchData;
