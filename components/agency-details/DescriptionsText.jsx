import DOMPurify from "isomorphic-dompurify";

const DescriptionsText = ({ firma }) => {
  // let contentOne = "";
  // let contentTwo = "";
  // // Ensure the parameter is destructured if called as a prop
  // contentOne = DOMPurify.sanitize(firma?.articleContentFirst);
  // if (firma?.articleContentSecond) {
  //   contentTwo = DOMPurify.sanitize(firma?.articleContentSecond);
  // }
  const createMarkup = () => {
    return { __html: DOMPurify.sanitize(firma?.articleContentFirst) || "" }; // Adding a fallback and optional chaining
  };
  const createMarkupSecond = () => {
    return { __html: DOMPurify.sanitize(firma?.articleContentSecond) || "" }; // Adding a fallback and optional chaining
  };

  return (
    <>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
      {firma?.articleContentSecond?.length > 0 && (
        <div dangerouslySetInnerHTML={createMarkupSecond()}></div>
      )}
    </>
  );
};

export default DescriptionsText;
