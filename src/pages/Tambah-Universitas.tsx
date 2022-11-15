import React, { useEffect } from "react";

function Tambah() {

  useEffect(() => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScAzilOtVOe2ES-XXvVihUfq3ynge5RwRegE0XoBAKCkiZdAQ/viewform";
  }, []);

  return (
    <div>
      <h2>Tambah Universitas</h2>
    </div>
  );
}

export default Tambah;