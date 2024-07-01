"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CautaFirmaInput() {
  const [searchKey, setSearchKey] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    router.push(`/clinici?slug=${searchKey}`);
  };
  return (
    <div className="form-group mb25">
      <div className="input-group">
        <input
          type="text"
          className="form-control pr-5"
          placeholder="Nume firma..."
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary position-absolute"
          style={{ right: 0, top: 0, height: "100%", zIndex: 10 }}
          type="button"
          aria-label="cauta firma"
          onClick={handleSearch}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}
