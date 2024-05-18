const SearchData = ({ cereriInscrieri }) => {
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Id</th>
          <th className="dn-lg" scope="col">
            Nume
          </th>
          <th className="dn-lg" scope="col">
            Judet
          </th>
          <th className="dn-lg" scope="col">
            Localitate
          </th>
          <th scope="col">Nume Firma</th>
          <th scope="col">E-mail</th>
          <th scope="col">Trimis</th>
          <th scope="col">Acțiuni</th>
        </tr>
      </thead>
      {/* End thead */}

      <tbody>
        {cereriInscrieri.map((mesaj, index) => (
          <tr key={mesaj.documentId}>
            <th className="title" scope="row">
              #{index + 1}
            </th>
            {/* <td className="dn-lg">
              <span className="flaticon-view"></span>
            </td> */}
            <td className="dn-lg">{mesaj.nume}</td>
            <td>{mesaj.judet}</td>
            <td>{mesaj.localitate}</td>
            <td>{mesaj.numeFirma}</td>
            <td>{mesaj.email}</td>
            <td className="para">
              {mesaj.firstUploadDate} {mesaj.firstUploadTime}
            </td>
            {/* <td className="para">
              {mesaj.firstUploadDate} {mesaj.firstUploadTime}
            </td> */}
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
                {/* <li
                  className="list-inline-item"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Edit"
                >
                  <a href="#">
                    <span className="flaticon-edit"></span>
                  </a>
                </li> */}
                <li
                  className="list-inline-item"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Delete"
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
  );
};

export default SearchData;
