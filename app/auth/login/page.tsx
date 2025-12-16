"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (form.password !== form.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    // TODO: send data to API route
    console.log(form);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">Register</h1>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <input
          type="text"
          name="fullname"
          placeholder="Full name"
          value={form.fullname}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm password"
          value={form.confirm_password}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:opacity-90"
        >
          Create account
        </button>
      </form>
    </div>
  );
}
