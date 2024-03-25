const SearchData = () => {
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Id</th>
          <th className="dn-lg" scope="col">
            Stare
          </th>
          <th className="dn-lg" scope="col">
            Nume
          </th>
          <th scope="col">E-mail</th>
          <th scope="col">Trimis</th>
          <th scope="col">Văzut</th>
          <th scope="col">Acțiuni</th>
        </tr>
      </thead>
      {/* End thead */}

      <tbody>
        <tr>
          <th className="title" scope="row">
            #1
          </th>
          <td className="dn-lg">
            <span className="flaticon-view"></span>
          </td>
          <td className="dn-lg">Glen</td>
          <td>test@email.com</td>
          <td className="para">08/08/2023 23:09</td>
          <td className="para">08/08/2023 23:09</td>
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
        {/* End tr */}
      </tbody>
      {/* End tbody */}
    </table>
  );
};

export default SearchData;
