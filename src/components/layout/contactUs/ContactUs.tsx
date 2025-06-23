import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 text-2xl md:text-5xl lg:text-7xl lg:pt-16 pt-8 min-h-[25vh] sm:min-h-[50vh] px-4 lg:px-8 text-white">
      <p className="uppercase font-extrabold pb-4">Contact Us</p>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-x-4">
          <a href="https://instagram.com/nusidp" target="_blank">
            <img
              src="../title/ig_button.png"
              alt="Instagram button"
              className="h-8 md:h-12 lg:h-20 align-start hover:rotate-12 transition-all"
              loading="lazy"
            />
          </a>
          <a
            href="mailto:idp.studentsclub@u.nus.edu"
            target="_blank"
          >
            <img
              src="../title/mail_button.png"
              alt="Mail button"
              className="h-10 md:h-16 lg:h-28 hover:rotate-12 transition-all"
              loading="lazy"
            />
          </a>
          <a href="https://t.me/ideate2025" target="_blank">
            <img
              src="../title/telegram_icon.png"
              alt="Telegarm button"
              className="h-10 md:h-16 lg:h-20 hover:rotate-12 transition-all"
              loading="lazy"
            />
          </a>
        </div>

        <a
          href="mailto:idp.studentsclub@u.nus.edu"
          target="_blank"
          className="mt-2 text-sm lg:text-lg"
        >
          idp.studentsclub@u.nus.edu
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
