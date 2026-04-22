import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import PageBanner from "./common/PageBanner";
import portImg from "../assets/port.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// ✅ Updated InputField (added value + onChange)
const InputField = ({
  label,
  type = "text",
  placeholder,
  isTextArea,
  colSpan = "md:col-span-1",
  value,
  onChange,
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`space-y-3 ${colSpan}`}
  >
    <label className="text-[10px] uppercase font-black tracking-[0.3em] text-brand-primary">
      {label}
    </label>

    {isTextArea ? (
      <textarea
        rows="4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-white border border-gray-200 px-6 py-4 
        focus:border-brand-primary transition-all outline-none text-brand-dark resize-none font-medium placeholder:text-gray-300"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-white border border-gray-200 px-6 py-4 
        focus:border-brand-primary transition-all outline-none text-brand-dark font-medium placeholder:text-gray-300"
      />
    )}
  </motion.div>
);

const ContactPage = () => {
  // ✅ Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // ✅ Handle Input Change
  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {
      name: "",
      phone: "",
      email: "",
    };

    setSuccessMessage("");
    setErrorMessage("");

    // ✅ NAME VALIDATION
    if (!formData.name) {
      newErrors.name = "Full name is required";
    } else if (formData.name.length > 30) {
      newErrors.name = "Name must be less than 30 characters";
    }

    // ✅ PHONE VALIDATION
    const phoneRegex = /^[0-9]+$/;

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Only numbers allowed";
    } else if (formData.phone.length < 8 || formData.phone.length > 12) {
      newErrors.phone = "Phone must be 8–12 digits";
    }

    // ✅ EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.phone || newErrors.email) return;

    try {
      const response = await fetch(
        "https://demo.ayfiz.com/ayfiz/api/ayfiz-it/contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: `${formData.subject} - ${formData.message}`,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");

        setTimeout(() => setSuccessMessage(""), 2500);

        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });

        setErrors({
          name: "",
          phone: "",
          email: "",
        });
      } else {
        setErrorMessage(data.message || "Something went wrong");
        setTimeout(() => setErrorMessage(""), 2500);
      }
    } catch (error) {
      setErrorMessage("Failed to submit form");
      setTimeout(() => setErrorMessage(""), 2500);
    }
  };

  const contactInfo = [
    {
      icon: <FiPhone />,
      title: "Voice Terminal",
      details: "+91 85929 10000",
      sub: "Mon-Fri / 09:00 - 18:00",
      link: "tel:+918592910000",
    },
    {
      icon: <FiMail />,
      title: "Digital Dispatch",
      details: "info@mychus.com",
      sub: "Response within 24 business hours",
      link: "mailto:info@mychus.com",
    },
    {
      icon: <FiMapPin />,
      title: "Regional Hub / India",
      details: "Kakkanad, Kochi, Kerala",
      sub: "2nd Floor KC Arcade, Thuthiyoor Rd",
    },
    {
      icon: <FiMapPin />,
      title: "Regional Hub / UAE",
      details: "Deira, Dubai",
      sub: "Bldg No65, Opp. Old Park Hotel",
    },
  ];

  return (
    <main className="bg-white min-h-screen pt-24 overflow-x-hidden relative">
      <PageBanner title="CONTACT" path="Home" />

      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-16 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-px bg-brand-primary"></span>
              <span className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px]">
                Global Infrastructure
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl  [@media(max-width:768px)]:text-5xl font-bold tracking-tighter uppercase leading-[0.9] mb-8"
            >
              Bridge The <br />
              <span className="text-brand-primary italic">Global Gap.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-500 font-medium max-w-2xl border-l-4 border-brand-accent pl-8 leading-relaxed"
            >
              Whether you're scaling logistics or securing global sourcing, our strategic analysts are ready to integrate your requirements.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-8xl mx-auto border-x border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* Left */}
          <div className="lg:col-span-5 bg-gray-50 p-10 lg:p-20 border-r border-gray-200">
            <div className="space-y-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group flex gap-8 items-start transition-all"
                >
                  <div className="text-2xl text-brand-primary group-hover:text-brand-accent transition-colors pt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a href={info.link} className="text-2xl [@media(max-width:768px)]:text-xl font-bold text-brand-dark hover:text-brand-primary transition-all block uppercase tracking-tight">
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-2xl font-bold text-brand-dark uppercase tracking-tight">
                        {info.details}
                      </p>
                    )}
                    <p className="text-gray-400 font-medium text-sm mt-1 uppercase tracking-widest">
                      {info.sub}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-64 w-full bg-gray-200 mt-12 overflow-hidden border border-gray-200"
              >
                <img
                  src={portImg}
                  alt="Logistics"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
                />
                <div className="absolute inset-0 bg-brand-primary/10 transition-all" />
                <div className="absolute bottom-4 left-4 bg-brand-dark text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                  Hub Coordination
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 p-10 lg:p-20 bg-white">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-brand-dark uppercase tracking-tighter mb-4">
                  Initiate Inquiry
                </h2>
                <div className="h-1 w-20 bg-brand-accent" />
              </motion.div>

              {/* ✅ FORM */}
              <form
  onSubmit={handleSubmit}
  className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10"
>
  {/* NAME */}
  <div className="flex flex-col">
    <InputField
      label="Full Name"
      placeholder="ENTER NAME"
      value={formData.name}
      onChange={(e) => {
        handleChange("name")(e);
        if (e.target.value) {
          setErrors((prev) => ({ ...prev, name: "" }));
        }
      }}
    />
    {errors.name && (
      <p className="text-red-500 text-xs mt-2">{errors.name}</p>
    )}
  </div>

  {/* PHONE */}
  <div className="flex flex-col">
    <InputField
      label="Operational Phone"
      type="tel"
      placeholder="+1 (000) 000-0000"
      value={formData.phone}
      onChange={(e) => {
        const value = e.target.value;

        if (/^[0-9]*$/.test(value)) {
          handleChange("phone")(e);

          if (value) {
            setErrors((prev) => ({ ...prev, phone: "" }));
          }
        }
      }}
    />
    {errors.phone && (
      <p className="text-red-500 text-xs mt-2">{errors.phone}</p>
    )}
  </div>

  {/* EMAIL */}
  <div className="flex flex-col">
    <InputField
      label="Email Address"
      type="email"
      placeholder="EMAIL@DOMAIN.COM"
      value={formData.email}
      onChange={(e) => {
        handleChange("email")(e);

        if (e.target.value) {
          setErrors((prev) => ({ ...prev, email: "" }));
        }
      }}
    />
    {errors.email && (
      <p className="text-red-500 text-xs mt-2">{errors.email}</p>
    )}
  </div>

  {/* SUBJECT */}
  <InputField
    label="Inquiry Subject"
    placeholder="LOGISTICS / SOURCING"
    value={formData.subject}
    onChange={handleChange("subject")}
  />

  {/* MESSAGE */}
  <div className="md:col-span-2 flex flex-col">
    <InputField
      label="Mission Requirements"
      placeholder="PROVIDE DETAILED PROJECT SCOPE..."
      isTextArea
      colSpan="md:col-span-2"
      value={formData.message}
      onChange={handleChange("message")}
    />
  </div>

  {/* SUCCESS / ERROR */}
  {successMessage && (
    <p className="md:col-span-2 text-green-600 text-sm text-center">
      {successMessage}
    </p>
  )}

  {errorMessage && (
    <p className="md:col-span-2 text-red-600 text-sm text-center">
      {errorMessage}
    </p>
  )}

  <motion.button
    type="submit"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="md:col-span-2 border-2 border-brand-dark text-brand-dark font-black py-6 
    transition-all duration-300 flex items-center justify-center gap-4 mt-6 
    uppercase tracking-[0.3em] text-xs"
  >
    <span>Transmit Message</span>
    <FiSend className="text-lg" />
  </motion.button>
</form>

              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mt-12 text-center">
                Automated Tracking System Enabled • Privacy Protocol v4.0
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default ContactPage;