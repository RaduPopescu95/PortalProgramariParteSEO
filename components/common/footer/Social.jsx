const Social = () => {
  const socialContent = [
    { id: 1, liveLink: "https://www.facebook.com/", icon: "fa-facebook" },
    // { id: 2, liveLink: "https://www.twitter.com/", icon: "fa-twitter" },
    { id: 3, liveLink: "https://www.instagram.com/", icon: "fa-instagram" },
    // { id: 4, liveLink: "https://www.pinterest.com/", icon: "fa-pinterest" },
    // { id: 5, liveLink: "https://www.dribbble.com/", icon: "fa-dribbble" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <li className="list-inline-item ml-sm-0 ml10" key={item.id}>
          <a
            href={item.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.icon}
          >
            <i className={`fa ${item.icon} fz40 p-1`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
