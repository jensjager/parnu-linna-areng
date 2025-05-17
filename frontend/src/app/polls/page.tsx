"use client";
import React, { useEffect, useState } from "react";

type Poll = {
  id: string;
  question: string;
  description: string;
  options: { id: string; text: string; votes: number }[];
};

export default function PollsPage() {
  const [pollid, setPollid] = useState<Poll[]>([]);
  const [valitud, setValitud] = useState<{ [pollId: string]: string }>({});  useEffect(() => {
    async function fetchPolls() {
      try {
        // Add cache-busting parameter to prevent browser caching
        const response = await fetch("http://localhost:3000/api/ideed?t=" + new Date().getTime());
        if (!response.ok) {
          throw new Error('Failed to fetch polls');
        }
        const responseData = await response.json();
        
        // Check the structure of the response
        const dataArray = responseData.data || responseData || [];
        
        if (!Array.isArray(dataArray)) {
          console.error("Expected array of polls, got:", responseData);
          return;
        }
  
        const transformed: Poll[] = dataArray.map((item: any) => ({
          id: String(item.id),
          question: item.pealkiri || "",
          description: item.kirjeldus || "",
          options: [
            { id: "yes", text: "Poolt", votes: item.poolt || 0 },
            { id: "no", text: "Vastu", votes: item.vastu || 0 },
          ],
        }));
  
        setPollid(transformed);
      } catch (err) {
        console.error("Vigane andmete laadimine:", err);
      }
    }
  
    fetchPolls();
  }, []);  const hääleta = async (pollId: string, optionId: string) => {
    // Find the current poll
    const currentPoll = pollid.find(p => p.id === pollId);
    if (!currentPoll) return;

    // Get previous selection if any
    const oldSelection = valitud[pollId];

    // Update UI optimistically
    setPollid((prev) =>
      prev.map((poll) => {
        if (poll.id !== pollId) return poll;

        return {
          ...poll,
          options: poll.options.map((opt) => {
            if (opt.id === optionId) {
              return { ...opt, votes: opt.votes + 1 };
            } else if (opt.id === oldSelection) {
              return { ...opt, votes: Math.max(0, opt.votes - 1) };
            }
            return opt;
          }),
        };
      })
    );

    // Update state of selections
    setValitud((prev) => ({ ...prev, [pollId]: optionId }));
    
    // Calculate new vote counts
    let pooltVotes = 0;
    let vastuVotes = 0;
    
    if (optionId === 'yes') {
      pooltVotes = 1;
      if (oldSelection === 'no') {
        vastuVotes = -1;
      }
    } else if (optionId === 'no') {
      vastuVotes = 1;
      if (oldSelection === 'yes') {
        pooltVotes = -1;
      }
    }
    
    // Send vote to backend
    try {
      await fetch(`http://localhost:4000/api/ideed/${pollId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          poolt: pooltVotes,
          vastu: vastuVotes
        }),
      });
    } catch (error) {
      console.error("Error updating vote:", error);
    }
  };

  const eemaldaHääletus = async (pollId: string) => {
    const previousVote = valitud[pollId];
    if (!previousVote) return;

    // Update UI optimistically
    setPollid((prev) =>
      prev.map((poll) =>
        poll.id === pollId
          ? {
              ...poll,
              options: poll.options.map((opt) =>
                opt.id === previousVote
                  ? { ...opt, votes: Math.max(0, opt.votes - 1) }
                  : opt
              ),
            }
          : poll
      )
    );

    // Update state of selections
    setValitud((prev) => {
      const updated = { ...prev };
      delete updated[pollId];
      return updated;
    });

    // Send vote removal to backend
    try {
      await fetch(`http://localhost:4000/api/ideed/${pollId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          [previousVote === 'yes' ? 'poolt' : 'vastu']: -1
        }),
      });
    } catch (error) {
      console.error("Error removing vote:", error);
    }
  };

  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Kogukonna küsitlused</h1>
      {pollid.map((poll) => (
        <div key={poll.id} className="mb-8 p-6 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{poll.question}</h2>
          <p className="text-gray-600 mb-4">{poll.description}</p>
          <ul>
            {poll.options.map((opt) => {
              const isSelected = valitud[poll.id] === opt.id;
              return (
                <li key={opt.id} className="mb-2 flex items-center">
                  <button
                    className={`mr-3 px-4 py-2 rounded font-medium
                      ${
                        opt.id === "yes"
                          ? isSelected
                            ? "bg-green-600 text-white"
                            : "bg-green-100 text-green-700 hover:bg-green-200"
                          : opt.id === "no"
                          ? isSelected
                            ? "bg-red-600 text-white"
                            : "bg-red-100 text-red-700 hover:bg-red-200"
                          : ""
                      }
                    `}
                    onClick={() => hääleta(poll.id, opt.id)}
                  >
                    {opt.text}
                  </button>
                  <span className="text-gray-700">{opt.votes} häält</span>
                </li>
              );
            })}
          </ul>

          {valitud[poll.id] && (
            <div className="mt-2 text-green-700 font-medium">
              Hääletus salvestatud:{" "}
              {
                poll.options.find((o) => o.id === valitud[poll.id])?.text
              }
              <button
                className="block mt-1 text-sm text-red-600 underline hover:text-red-800"
                onClick={() => eemaldaHääletus(poll.id)}
              >
                Eemalda hääletus
              </button>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
