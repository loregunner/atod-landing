"use client";

export default function AtodMap() {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.5342605733114!2d-74.12267690671499!3d4.674330874275628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bf36713a4cf%3A0xb0583545844638ab!2sLaboratorio%20Cajas%20Automaticas%20ATOD%20GARAGE%20SAS!5e0!3m2!1ses-419!2sco!4v1763094017630!5m2!1ses-419!2sco"
        width="100%"
        height="100%"
        style={{ border: 0}}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
