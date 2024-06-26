import Image from "next/image";
import find from "../../data/find";

const categorii = [
  {
    id: 1,
    iconPath: "/assets/categorii/proiectare-gradini-si-spatii-verzi.svg",
    siteName: "Proiectare gradini si spatii verzi",
    altName: "Gradini spatii verzi",
  },
  {
    id: 2,
    iconPath: "/assets/categorii/amenajari-gradini-si-spatii-verzi.svg",
    siteName: "Amenajari gradini si spatii verzi",
    altName: "Amenajari Gradini",
  },
  {
    id: 3,
    iconPath: "/assets/categorii/intretinere-gradini-si-spatii-verzi.svg",
    siteName: "Intretinere gradini si spatii verzi",
    altName: "Intretinere Gradini",
  },
  {
    id: 4,
    iconPath: "/assets/categorii/furnizare-si-montaj-sisteme-de-irigatii.svg",
    siteName: "Furnizare si montaj sisteme de irigatii",
    altName: "Sisteme de irigatii",
  },
  {
    id: 5,
    iconPath: "/assets/categorii/comercializare-plante-ornamentale.svg",
    siteName: "Comercializare plante ornamentale",
    altName: "Plante ornamentale",
  },
];

const LookingItem = () => {
  return (
    <ul className="list-unstyled w-100 d-flex flex-row align-items-center">
      {categorii.map((item) => (
        <li
          className="w-75 h-75 d-flex justify-content-center align-items-center mx-2 my-2 px-0"
          key={item.id}
        >
          <div className="icon icon-container py-2 d-flex align-items-center justify-content-center">
            <Image
              src={item.iconPath}
              alt={item.altName}
              width={50}
              height={50}
            />
            <p className="ms-2 text-truncate w-100">{item.siteName}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LookingItem;
