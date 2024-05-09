"use client";

import {
  handleDeleteFirestoreData,
  handleDeleteFirestoreSubcollectionData,
  handleGetFirestore,
  handleGetSubcollections,
} from "@/utils/firestoreUtils";
import Link from "next/link";
import { useEffect, useState } from "react";
import DeleteDialog from "../dialogs/DeleteDialog";

const SearchData = ({ location }) => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleGetData = async () => {
    console.log("Start....");
    let data = await handleGetSubcollections("Localitati");
    console.log("Data....here...", data);
    setData([...data]);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const handleDeleteClick = (item) => {
    console.log("item...", item);
    setSelectedItem(item); // Salvează ID-ul elementului selectat
    setShowModal(true); // Afișează modalul
  };

  // Închide modalul fără a șterge
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Logica de ștergere a elementului
  const handleConfirmDelete = async () => {
    console.log("Deleting item with ID:", selectedItem);
    let updatedData = await handleDeleteFirestoreSubcollectionData(
      `Judete/${selectedItem.collectionId}/Localitati/${selectedItem.documentId}`,
      true,
      location,
      selectedItem
    );
    // // Aici adaugi logica pentru a șterge elementul din sursa ta de date
    console.log("updatedData.....:", updatedData);
    setData(updatedData);
    setShowModal(false); // Închide modalul după ștergere
  };

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Judet</th>
            <th scope="col">Nume</th>

            <th scope="col">Adaugat</th>
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

                <td className="para">{item.judet && item.judet}</td>
                <td className="para">{item.siteName && item.siteName}</td>

                <td className="para">
                  {item.firstUploadDate && item.firstUploadDate}{" "}
                  {item.firstUploadTime && item.firstUploadTime}
                </td>
                <td className="para">
                  {item.EditDate && item.EditDate}{" "}
                  {item.Edittime && item.Edittime}{" "}
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
                        pathname: `adauga-${location.toLowerCase()}/${
                          item.documentId
                        }`,
                        query: {
                          id: item.id,
                        },
                      }}
                      as={`adauga-${location.toLowerCase()}/${item.documentId}`}
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
                        handleDeleteClick(item);
                      }}
                    >
                      <a href="#">
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
