import Link from "next/link";
import Image from "next/image";
import pasiDeUrmat from "@/data/pasiDeUrmat";
import RoundDiv from "../common/RoundDiv";

const PasiDeUrmat = () => {
  return (
    <>
      {pasiDeUrmat.map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4" key={item.id}>
          <div className="properti_city pasi_urmat style2 d-flex">
            {/* Folosește `col-6` pentru a împărți spațiul egal */}
            <div className="col-4 d-flex justify-content-center align-items-center">
            <RoundDiv number={item.id} />
              <Image
                src="/assets/images/pasurmat.svg" 
                alt="Tooth Icon" 
                width={100} // Poti regla dimensiunea dacă este necesar
                height={100} 
                objectFit="cover"
                layout="intrinsic" // Această proprietate asigură că dimensiunile specificate sunt respectate
              />
            </div>
            <div className="col-8 d-flex justify-content-center align-items-center">
              <div>
                <h4>{item.name}</h4>
                <p>{item.body}</p>
              </div>
            </div>
          
  
  
          </div>
        </div>
      ))}
    </>
  );
};

export default PasiDeUrmat;
