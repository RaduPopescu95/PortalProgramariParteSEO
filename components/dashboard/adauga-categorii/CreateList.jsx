import ArticleEditor from "./QuillForm";
import dentisti from "../../../public/assets/categorii/dentisti.svg";
import cardiologie from "../../../public/assets/categorii/cardiologie.svg";
import gastroenterologie from "../../../public/assets/categorii/gastroenterologie.svg";
import ortopedie from "../../../public/assets/categorii/ortopedie.svg";
import Image from "next/image";

const CreateList = ({ handleInputChange, formValues }) => {
  const categorii = [
    { name: "Dentisti", icon: dentisti },
    { name: "Cardiologie", icon: cardiologie },
    { name: "Gastroenterologie", icon: gastroenterologie },
    { name: "Ortopedie", icon: ortopedie },
  ];

  const handleIconChange = (e) => {
    const { value } = e.target;
    const selectedCategory = categorii.find((cat) => cat.name === value);
    if (selectedCategory) {
      handleInputChange({
        target: {
          name: "iconCategorie",
          value: selectedCategory.name,
        },
      });
      handleInputChange({
        target: {
          name: "iconPath",
          value: selectedCategory.icon,
        },
      });
    }
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Selecteaza Icon</label>
          <div className="icon-grid">
            {categorii.map((cat, index) => (
              <label key={index} className="icon-label">
                <input
                  type="radio"
                  name="iconCategorie"
                  value={cat.name}
                  checked={formValues.iconCategorie === cat.name}
                  onChange={handleIconChange}
                />
                <Image
                  src={cat.icon}
                  width={50} // Specifică lățimea dorită
                  height={50} // Specifică înălțimea dorită
                  alt={cat.name}
                />
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="siteName">Nume</label>
          <input
            type="text"
            className="form-control"
            id="siteName"
            name="siteName"
            value={formValues.siteName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="metaTitle">Meta Title</label>
          <input
            type="text"
            className="form-control"
            id="metaTitle"
            name="metaTitle"
            value={formValues.metaTitle}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="my_profile_setting_textarea">
          <label htmlFor="metaDescription">Meta Description</label>
          <textarea
            className="form-control"
            id="metaDescription"
            name="metaDescription"
            rows="7"
            value={formValues.metaDescription}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default CreateList;
