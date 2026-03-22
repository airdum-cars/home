import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  // Replace with the actual WhatsApp number and message
  const phoneNumber = "7011209823";
  const message = "Hello Airdum Enterprises, I'm interested in your car accessories!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="35"
        height="35"
        fill="#ffffff"
      >
        <path d="M12.031 0C5.394 0 0 5.392 0 12.028c0 2.122.552 4.195 1.597 6.014L.015 23.998l6.108-1.602a11.966 11.966 0 005.908 1.558h.005c6.634 0 12.03-5.394 12.03-12.03S18.665 0 12.031 0zm0 21.936a9.924 9.924 0 01-5.066-1.385l-.363-.215-3.765.986.999-3.668-.236-.376A9.926 9.926 0 012.015 12.03c0-5.523 4.494-10.016 10.017-10.016 2.677 0 5.195 1.042 7.087 2.936a10.024 10.024 0 012.936 7.086c-.001 5.522-4.495 10.016-10.017 10.016l-.007-.001zm5.503-7.518c-.302-.151-1.786-.882-2.063-.982-.278-.102-.48-.152-.682.152-.202.302-.782.982-.958 1.183-.177.202-.355.227-.657.076-1.428-.711-2.55-1.503-3.52-3.15-.202-.345.201-.318.647-.978.101-.151.05-.278 0-.43-.05-.152-.682-1.644-.934-2.253-.245-.591-.497-.512-.682-.521h-.581c-.202 0-.53.076-.808.379-.278.303-1.06 1.036-1.06 2.527s1.085 2.931 1.237 3.133c.151.202 2.136 3.262 5.176 4.57 2.053.882 2.872.84 3.963.708 1.196-.145 3.033-1.24 3.463-2.438.43-1.198.43-2.227.302-2.438-.126-.212-.48-.339-.783-.49z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
