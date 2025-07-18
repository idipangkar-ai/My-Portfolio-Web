import React, { useState } from "react";

const ContactDetail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    emailValid: true,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setFormData({ ...formData, email: value, emailValid: valid });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="flex justify-center py-10 px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Form Panel */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-white p-6 rounded shadow"
        >
          {!formData.emailValid && (
            <div className="mb-4 bg-red-500 text-white p-3 rounded text-sm">
              Enter a valid email.
            </div>
          )}

          <fieldset className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`mt-1 block w-full border rounded px-3 py-2 ${
                  formData.emailValid ? "border-gray-300" : "border-red-500"
                }`}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                maxLength="255"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <div className="text-xs text-gray-500 text-right mt-1">
                {formData.message.length} / 255
              </div>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </fieldset>
        </form>

        {/* Debug Panel */}
        <div className="w-full md:w-1/2 hidden md:flex items-center justify-start bg-gray-900 text-white p-8 rounded-lg shadow-lg overflow-auto">
          <pre className="whitespace-pre-wrap break-words text-base font-mono text-left leading-relaxed tracking-wide">
            <code className="text-2xl leading-relaxed tracking-wide">
              {JSON.stringify(formData, null, 2)}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
