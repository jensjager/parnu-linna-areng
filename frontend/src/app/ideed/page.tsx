"use client";
import React, { useState } from "react";

type Idee = {
  omanik: string;
  email: string;
  pealkiri: string;
  kirjeldus: string;
  valdkond: string;
};

export default function IdeedPage() {
  const [form, setForm] = useState<Idee>({
    omanik: "",
    email: "",
    pealkiri: "",
    kirjeldus: "",
    valdkond: "",
  });
  const [saadetud, setSaadetud] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("http://localhost:4000/api/ideepost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Serveri tõrge");
      }

      setSaadetud(true);
      setForm({ omanik: "", email: "", pealkiri: "", kirjeldus: "", valdkond: "" });
    } catch (err: any) {
      console.error("Saatmisel tekkis viga:", err);
      setError(err.message || "Saatmine ebaõnnestus");
    }
  };

  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">
        Võta ühendust &amp; Jaga oma ideed
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
          <label className="block mb-1 font-medium" htmlFor="omanik">
            Sinu nimi
          </label>
          <input
            type="text"
            id="omanik"
            name="omanik"
            value={form.omanik}
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
          <label className="block mb-1 font-medium" htmlFor="valdkond">
            Idee valdkond
          </label>
          <select
            id="valdkond"
            name="valdkond"
            value={form.valdkond}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="">-- Vali valdkond --</option>
            <option value="Rahvastiku areng">Rahvastiku areng</option>
            <option value="Looduskeskkond">Looduskeskkond</option>
            <option value="Kultuur">Kultuur</option>
            <option value="Sport">Sport</option>
            <option value="Ettevõtlus">Ettevõtlus</option>
            <option value="Elukeskkond">Elukeskkond</option>
            <option value="Avalikud teenused">Avalikud teenused</option>
            <option value="Haridus">Haridus</option>
            <option value="Muu">Muu</option>
          </select>
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
        {error && (
          <div className="mt-4 text-red-600 font-medium">
            Viga: {error}
          </div>
        )}
      </form>
    </main>
  );
}
