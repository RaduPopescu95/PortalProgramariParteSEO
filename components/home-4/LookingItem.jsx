import Image from 'next/image';
import find from "../../data/find";

const LookingItem = () => {
  return (
    <ul className="list-unstyled w-100 d-flex flex-row align-items-center"> {/* Asigură că lista se întinde pe toată lățimea și centrează elementele vertical */}
      {find.map((item) => (
        <li className="w-100 d-flex justify-content-center align-items-center mx-2 my-2 px-0" key={item.id}> {/* Asigură că fiecare li este centrat pe orizontală */}
          <div className="icon icon-container py-2 d-flex align-items-center justify-content-center">
            <Image
              src="/assets/images/tooth.svg" // Calea relativă la directorul public
              alt="Tooth Icon" // Adaugă un text alternativ pentru accesibilitate
              width={50} // Specifică lățimea dorită
              height={50} // Specifică înălțimea dorită
            />
            <p className="ms-2">{item.title}</p> {/* Adaugă spațiere între imagine și text */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LookingItem;
