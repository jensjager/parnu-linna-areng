"use client";
import React, { useState } from "react";

type Idee = {
  nimi: string;
  email: string;
  pealkiri: string;
  kirjeldus: string;
};

export default function IdeedPage() {
  const [form, setForm] = useState<Idee>({
    nimi: "",
    email: "",
    pealkiri: "",
    kirjeldus: "",
  });
  const [saadetud, setSaadetud] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Siin võiks saata andmed serverisse
    setSaadetud(true);
    setForm({
      nimi: "",
      email: "",
      pealkiri: "",
      kirjeldus: "",
    });
  };

  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">
        Võta ühendust & Jaga oma ideed
      </h1>
      <p className="mb-6 text-gray-700">
        Kas sul on ettepanekuid või küsimusi Pärnu linna arendamiseks? Saada
        meile oma idee või võta ühendust!
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded shadow p-6 space-y-4"
      >
        <div>
          <label className="block mb-1 font-medium" htmlFor="nimi">
            Sinu nimi
          </label>
          <input
            type="text"
            id="nimi"
            name="nimi"
            value={form.nimi}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">
            E-post
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="pealkiri">
            Idee pealkiri
          </label>
          <input
            type="text"
            id="pealkiri"
            name="pealkiri"
            value={form.pealkiri}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="kirjeldus">
            Idee kirjeldus
          </label>
          <textarea
            id="kirjeldus"
            name="kirjeldus"
            value={form.kirjeldus}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
        >
          Saada idee
        </button>
        {saadetud && (
          <div className="mt-4 text-green-700 font-medium">
            Aitäh! Sinu idee on saadetud.
          </div>
        )}
      </form>
    </main>
  );
}
