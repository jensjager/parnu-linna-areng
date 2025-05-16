"use client";
import React, { useState } from "react";

type Poll = {
  id: string;
  question: string;
  options: { id: string; text: string; votes: number }[];
};

const algPollid: Poll[] = [
  {
    id: "1",
    question: "Millist uut parki sooviksid Pärnusse?",
    options: [
      { id: "a", text: "Laste mänguväljak", votes: 12 },
      { id: "b", text: "Koerte park", votes: 8 },
      { id: "c", text: "Spordipark", votes: 15 },
    ],
  },
  {
    id: "2",
    question: "Kuidas parandada linna rattateid?",
    options: [
      { id: "a", text: "Rohkem rattateid", votes: 20 },
      { id: "b", text: "Parem valgustus", votes: 10 },
      { id: "c", text: "Rohkem rattahoidjaid", votes: 5 },
    ],
  },
];

export default function PollsPage() {
  const [pollid, setPollid] = useState<Poll[]>(algPollid);
  const [valitud, setValitud] = useState<{ [pollId: string]: string }>({});

  const hääleta = (pollId: string, optionId: string) => {
    if (valitud[pollId]) return; // juba hääletatud
    setPollid((prev) =>
      prev.map((poll) =>
        poll.id === pollId
          ? {
              ...poll,
              options: poll.options.map((opt) =>
                opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
              ),
            }
          : poll
      )
    );
    setValitud((prev) => ({ ...prev, [pollId]: optionId }));
  };

  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Kogukonna küsitlused</h1>
      {pollid.map((poll) => (
        <div key={poll.id} className="mb-8 p-6 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-4">{poll.question}</h2>
          <ul>
            {poll.options.map((opt) => (
              <li key={opt.id} className="mb-2 flex items-center">
                <button
                  className={`mr-3 px-4 py-2 rounded ${
                    valitud[poll.id]
                      ? valitud[poll.id] === opt.id
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                  disabled={!!valitud[poll.id]}
                  onClick={() => hääleta(poll.id, opt.id)}
                >
                  {opt.text}
                </button>
                <span className="text-gray-700">{opt.votes} häält</span>
              </li>
            ))}
          </ul>
          {valitud[poll.id] && (
            <div className="mt-2 text-green-700 font-medium">
              Aitäh hääletamast!
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
