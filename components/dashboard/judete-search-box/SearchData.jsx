"use client";

import {
  getFirestoreCollectionLength,
  handleDeleteFirestoreData,
  handleGetFirestore,
} from "@/utils/firestoreUtils";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import DeleteDialog from "../dialogs/DeleteDialog";
import CommonLoader from "@/components/common/CommonLoader";

const SearchData = ({ judete }) => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [loading, setLoading] = useState(false);
  let location = "Judete";

  // const handleGetData = async () => {
  //   setLoading(true);
  //   let data = await handleGetFirestore(location);
  //   console.log("Data....", data);

  //   // Inițializează updatedData ca un array gol
  //   let updatedData = [];

  //   for (let item of data) {
  //     const subcollectionPath = `Judete/${item.documentId}/Localitati`;

  //     const collectionLength = await getFirestoreCollectionLength(
  //       subcollectionPath
  //     );
  //     console.log("here...");

  //     // Creează un nou obiect cu informațiile existente și adaugă numărul de localități
  //     const updatedItem = { ...item, localitatiCount: collectionLength };
  //     updatedData.push(updatedItem);
  //   }

  //   // Utilizează updatedData pentru a actualiza starea, nu data inițială
  //   setData(updatedData);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   handleGetData();
  // }, []);

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
      {loading && <CommonLoader />}
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nr. localitati</th>

            <th scope="col">Nume</th>

            <th scope="col">Acțiuni</th>
          </tr>
        </thead>
        {/* End thead */}

        <tbody>
          {judete &&
            judete.map((item, index) => (
              <tr key={index}>
                <th className="title" scope="row">
                  #{item.id && item.id}
                </th>

                <td className="para">
                  {item.localitatiCount && item.localitatiCount}
                </td>

                <td className="para">{item.siteName && item.siteName}</td>

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
