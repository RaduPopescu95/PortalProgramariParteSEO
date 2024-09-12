import ContactWithAgent from "./ContactWithAgent";

const SidebarListings = ({ firma }) => {
  return (
    <div className="sidebar_listing_grid1">
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <h4 className="fz40 ml5">Înscrie clinică</h4>
          <p className="fz20 ml5">
            Inscrie clinica Inscrie-te pe cel mai vizitat portal din domeniul
            Medical. Beneficiaza de o promovare full service care iti va aduce
            mai multi clienti!
          </p>
          <p className="fz20 ml5">
            Acest formular colecteaza numele, telefonul si e-mailul tau pentru a
            te putea informa in legatura cu oferta solicitata. Prin trimiterea
            acestuia, esti de acord cu conditiile impuse in raport cu Politica
            de Confidentialitate.
          </p>
          <ContactWithAgent firma={firma} />
        </div>
      </div>
      {/* End filter and search area */}
    </div>
  );
};

export default SidebarListings;
