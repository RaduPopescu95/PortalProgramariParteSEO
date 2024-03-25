import Button from "./CommonButton";
import Image from "next/image";

const CallToAction = ({className}) => {
  return (
    <section className={`start-partners cta-container-section-list pb20 ${className}`}>
    <div className="cta-container-list p30 ">
    <div className="row w-100">
      <div className="col-lg-6">
        <div className="start_partner tac-smd">
          <h2>Vrei sa îți promovezi serviciile?</h2>
          <h3>Contactează-ne
       și îți putem oferi o soluție personalizată pentru afacerea ta!
          </h3>
          <h2>Contactează-ne!</h2>
        </div>
        
        <div class="row container-butoane-cta">
        <div className="d-flex justify-content-start gap-3 w-100">
          <Button style={{ minWidth: 'calc(40% - 10px)'}}>Caută medic</Button>
<Button className="btnSecondary" style={{ minWidth: 'calc(40% - 10px)'}}>Înscrie o clinică</Button>
</div>
</div>


      </div>
      {/* End .col */}

      <div className="col-lg-6 d-flex justify-content-start align-items-center">
  <div >
  <Image
          src="/assets/images/callcustomers.svg" 
          alt="Tooth Icon" 
          width={400} // Poti regla dimensiunea dacă este necesar
          height={400} 
          objectFit="cover"
          className="position-absolute image-cta d-none d-lg-block"
          layout="intrinsic" // Această proprietate asigură că dimensiunile specificate sunt respectate
        />
  </div>
</div>
    </div>
  </div>
  </section>
  );
};

export default CallToAction;
