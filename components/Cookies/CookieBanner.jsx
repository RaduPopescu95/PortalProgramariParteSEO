"use client";

import { useEffect, useState } from "react";
import { setCookie, hasCookie } from "cookies-next";

const CookieConsentModal = ({ onClose }) => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    if (!hasCookie("localConsent")) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    setShowConsent(false);
    if (onClose) onClose();
  };

  const rejectCookies = () => {
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    setShowConsent(false);
    if (onClose) onClose();
  };

  if (!showConsent) return null;

  return (
    <div className="fixed-bottom custom-alert p-4 bg-light shadow">
      <div className="d-flex justify-content-between align-items-center">
        <div className="me-3">
          <p className="mb-0">
            This website uses cookies to enhance your browsing experience,
            analyze site traffic, and serve better user experiences. By
            continuing to use this site, you consent to our use of cookies.
            Learn more in our{" "}
            <a href="/cookies" className="text-decoration-underline">
              cookie policy
            </a>
            .
          </p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={acceptCookies}>
            Accept all 🍪
          </button>
          <button className="btn btn-secondary" onClick={rejectCookies}>
            Reject all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentModal;
