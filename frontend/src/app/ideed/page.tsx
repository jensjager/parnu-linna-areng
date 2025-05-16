"use client";
import React, { useState } from "react";

type Idee = {
  nimi: string;
  email: string;
  pealkiri: string;
  kirjeldus: string;
  sektorId?: number;  // Make sectorId optional since it will be assigned by the admin
};

export default function IdeedPage() {
  const [form, setForm] = useState<Idee>({
    nimi: "",
    email: "",
    pealkiri: "",
    kirjeldus: "",
    // No sektorId here as it will be assigned by admin
  });
  const [saadetud, setSaadetud] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  // Constants for mock data when API is unavailable
  const MOCK_SECTORS = [
    { id: 1, nimi: 'Majandus' },
    { id: 2, nimi: 'Keskkond' },
    { id: 3, nimi: 'Transport' },
    { id: 4, nimi: 'Haridus' },
    { id: 5, nimi: 'Kultuur' },
    { id: 6, nimi: 'Muu' }
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    setForm({ ...form, [e.target.name]: value });
  };  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // First try the real backend API
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
      const response = await fetch(`${API_BASE_URL}/ideed`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Idee saatmine ebaõnnestus");
      }      setSaadetud(true);
      setForm({
        nimi: "",
        email: "",
        pealkiri: "",
        kirjeldus: "",
      });
    } catch (err) {
      console.error("Error submitting idea:", err);
      
      // Fallback to Next.js API (if you have one) or show a warning
      try {
        const nextApiResponse = await fetch("/api/ideed", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        
        if (nextApiResponse.ok) {
          setSaadetud(true);
          setForm({
            nimi: "",
            email: "",
            pealkiri: "",
            kirjeldus: "",
          });
        } else {
          // Both APIs failed, show a mock success for demo purposes
          if (window.confirm("Serveriühendus puudub. Kas soovid näha demo versiooni?")) {
            setSaadetud(true);
            setForm({
              nimi: "",
              email: "",
              pealkiri: "",
              kirjeldus: "",
            });
          } else {
            setError("Idee saatmine ebaõnnestus. Palun proovi hiljem uuesti.");
          }
        }
      } catch (fallbackErr) {
        // Both APIs failed, show error
        setError("Idee saatmine ebaõnnestus. Palun proovi hiljem uuesti.");
      }
    } finally {
      setSubmitting(false);
    }
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
          disabled={submitting}
          className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold ${
            submitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {submitting ? "Saadan..." : "Saada idee"}
        </button>
        {error && (
          <div className="mt-4 text-red-600 font-medium">{error}</div>
        )}
        {saadetud && (
          <div className="mt-4 text-green-700 font-medium">
            Aitäh! Sinu idee on saadetud.
          </div>
        )}
      </form>
    </main>
  );
}
