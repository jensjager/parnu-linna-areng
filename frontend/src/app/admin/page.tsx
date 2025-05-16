"use client";

import { useState, useEffect } from 'react';

// Define the Idea type
interface Idea {
  id: number;
  pealkiri: string;
  kirjeldus: string;
  hääletusel: boolean;
  sektorId: number;
}

// Define the sectors
interface Sektor {
  id: number;
  nimi: string;
}

/**
 * API Call Required:
 * GET /api/sektorid
 * Fetches all sectors from the database
 * Returns array of Sektor objects: { id: number, nimi: string }[]
 */
const sektorid: Sektor[] = [
  { id: 1, nimi: "Rahvastiku areng" },
  { id: 2, nimi: "Looduskeskkond" },
  { id: 3, nimi: "Kultuur" },
  { id: 4, nimi: "Sport" },
  { id: 5, nimi: "Ettevõtlus" },
  { id: 6, nimi: "Elukeskkond" },
  { id: 7, nimi: "Avalikud teenused" },
  { id: 8, nimi: "Haridus" },
  { id: 9, nimi: "Muu"}
];

// Estonian city development idea names
const ideePealkirjad = [
  "Koerapark Endla tänavale",
  "Ujuv promenaad Pärnu jõele",
  "Tasuta WiFi kõikidesse parkidesse",
  "Uued matemaatikaõpikud algkoolidele",
  "Pärnu jõeäärne kergliiklustee",
  "Raeküla raamatukogu renoveerimine",
  "Vanalinna tänavate uus valgustus",
  "Sõudeklubi varustuse uuendamine",
  "Eakate päevakeskuse laiendamine",
  "Mai linnaosa mänguväljakute uuendamine",
  "Linnaliinibusside elektrifitseerimine",
  "Kesklinna uus avalik tualett",
  "Ettevõtlusinkubaatori rajamine",
  "Ranna-ala korrashoid ja laiendamine",
  "Kaasava eelarve rakendamine",
  "Koolinoorte ettevõtlusprogramm",
  "Linna äärealal elavate eakate transpordivõimaluste parandamine",
  "Pärnu jõe kallaste korrastamine",
  "Linnavalitsusega suhtlemise digitaliseerimise projekt",
  "Terviseradade laiendamine ja uuendamine",
  "Rattalaenutuse süsteemi rajamine",
  "Lasteaedade mänguväljakute kaasajastamine",
  "Linna üürikorterite programm noortele peredele",
  "Turismiinfopunkti uuendamine kesklinnas",
  "Loomade varjupaiga laiendamine ja renoveerimine",
  "Pärnu Keskraamatukogu digitaliseerimisprojekt",
  "Linna perearstikeskuse renoveerimine",
  "Noorte loovkeskuse asutamine",
  "Majaomanike fassaaditoetuse programm",
  "Pärnu muusikakooli pilli soetustoetus",
  "Erivajadustega inimeste ligipääsu parandamine avalikele hoonetele",
  "Avalike spordiplatside väljaehitamine",
  "Haigla juurdeehituse planeerimine",
  "Pärnu jõe äärne puhkeala",
  "Päikeseenergia paneelid koolikatustele",
  "Kesklinna taimeaianduse projekt",
  "Võrgustik istutatavate puude ja põõsaste jaoks",
  "Kogukonna aiandusprojektid",
  "Turismi toetamine madalhooajal",
  "Noorte programmeerimise ja tehnoloogia programm"
];

// Mock data for ideas - this would be replaced with actual API data
/**
 * API Call Required:
 * GET /api/ideed?page={pageNumber}&limit={limit}
 * Fetches paginated list of ideas from database
 * Optional query parameters: sektorId, hääletusel
 * Returns: { data: Idea[], total: number, page: number, totalPages: number }
 */
const mockIdeas: Idea[] = Array.from({ length: 45 }, (_, i) => ({
  id: i + 1,
  pealkiri: ideePealkirjad[i] || `Idee ${i + 1}`,
  kirjeldus: `See on idee number ${i + 1} kirjeldus. Siin on rohkem infot idee kohta.`,
  hääletusel: Math.random() > 0.5,
  sektorId: Math.floor(Math.random() * 6) + 1
}));
 /**
 * Admin authentication is handled using environment variables
 * Required env variables:
 * - NEXT_PUBLIC_ADMIN_PASSWORD: The password for admin access
 * 
 * These should be stored in .env.local file which is not committed to the repository
 * For production, set these values in your hosting platform's environment variables
 */

export default function Arengukava() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // State for ideas management
  const [ideas, setIdeas] = useState<Idea[]>(mockIdeas);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [editedIdea, setEditedIdea] = useState<Idea | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<number | null>(null);
  const ideasPerPage = 20;
  /**
   * API Integration Required:
   * 1. On component mount, fetch sectors with GET /api/sektorid
   * 2. On component mount or when page changes, fetch ideas with GET /api/ideed?page={currentPage}&limit={ideasPerPage}
   * 
   * Example implementation:
   * useEffect(() => {
   *   async function fetchData() {
   *     try {
   *       const response = await fetch(`/api/ideed?page=${currentPage}&limit=${ideasPerPage}`);
   *       const data = await response.json();
   *       setIdeas(data.data);
   *     } catch (error) {
   *       console.error("Error fetching ideas:", error);
   *     }
   *   }
   *   
   *   fetchData();
   * }, [currentPage]);
   */

  // Filter ideas based on search term and selected sector
  const filteredIdeas = ideas.filter((idea) => {
    // Apply search filter
    const matchesSearch = searchTerm === '' || 
      idea.pealkiri.toLowerCase().includes(searchTerm.toLowerCase()) || 
      idea.kirjeldus.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply sector filter
    const matchesSector = selectedSector === null || idea.sektorId === selectedSector;
    
    // Return true if the idea matches both filters
    return matchesSearch && matchesSector;
  });

  // Get current ideas based on pagination
  const indexOfLastIdea = currentPage * ideasPerPage;
  const indexOfFirstIdea = indexOfLastIdea - ideasPerPage;
  const currentIdeas = filteredIdeas.slice(indexOfFirstIdea, indexOfLastIdea);
  // Handle opening the idea editor popup
  const handleIdeaClick = (idea: Idea) => {
    setSelectedIdea(idea);
    setEditedIdea({ ...idea });
    
    /**
     * API Call Required:
     * GET /api/ideed/{idea.id}
     * Fetches detailed information for a specific idea
     * Returns: Idea object with all fields
     * 
     * This would be useful if the list view doesn't contain all the data needed
     * for editing (e.g., longer description fields, metadata, etc.)
     */
  };

  const handleClosePopup = () => {
    setSelectedIdea(null);
    setEditedIdea(null);
  };
  const handleSaveIdea = () => {
    if (!editedIdea) return;
      setIdeas(ideas.map(idea => 
      idea.id === editedIdea.id ? editedIdea : idea
    ));
    
    /**
     * API Call Required:
     * PUT /api/ideed/{editedIdea.id}
     * Updates an idea in the database
     * Request body: Idea object with updated fields
     * Returns: Updated Idea object
     * 
     * Example implementation:
     * try {
     *   const response = await fetch(`/api/ideed/${editedIdea.id}`, {
     *     method: 'PUT',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify(editedIdea)
     *   });
     *   
     *   if (!response.ok) {
     *     throw new Error('Failed to update idea');
     *   }
     *   
     *   const updatedIdea = await response.json();
     *   // Update the local state
     *   setIdeas(ideas.map(idea => idea.id === updatedIdea.id ? updatedIdea : idea));
     * } catch (error) {
     *   console.error("Error updating idea:", error);
     *   // Show error message to user
     * }
     */
    
    handleClosePopup();
  };    const handleSubmit = (e: React.FormEvent) => {    
    e.preventDefault();
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
    
    if (password === adminPassword) {
      setAuthenticated(true);
      setError('');
      
      /**
       * API Call Required:
       * POST /api/auth/login
       * Authenticates admin user
       * Request body: { password: string }
       * Returns: { token: string, user: { id: number, role: string } }
       * 
       * The token should be stored (localStorage or httpOnly cookie) and
       * included in subsequent API requests for authentication.
       * 
       * Example implementation:
       * try {
       *   const response = await fetch('/api/auth/login', {
       *     method: 'POST',
       *     headers: { 'Content-Type': 'application/json' },
       *     body: JSON.stringify({ password })
       *   });
       *   
       *   if (!response.ok) {
       *     throw new Error('Authentication failed');
       *   }
       *   
       *   const { token } = await response.json();
       *   localStorage.setItem('adminToken', token);
       *   setAuthenticated(true);
       *   setError('');
       * } catch (error) {
       *   setError('Vale parool, palun proovi uuesti.');
       *   setPassword('');
       * }
       */
    } else {
      setError('Vale parool, palun proovi uuesti.');
      setPassword('');
    }
  };

  if (!authenticated) {
    return (
      <div className="grid place-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">        
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-black">Admin ligipääs</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Sisesta parool:
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div>              <button
                type="submit"
                className="w-full px-4 py-2 text-black bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sisene
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-black">Ideedehaldur</h1>
        
        {/* Search and Filter Controls */}
        <div className="w-full flex flex-col sm:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input 
                type="search" 
                className="block w-full p-3 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-white"
                placeholder="Otsi ideid..." 
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page when searching
                }}
              />
            </div>
          </div>
          
          {/* Sector Filter */}
          <div className="w-full sm:w-64">
            <select
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg bg-white"
              value={selectedSector === null ? '' : selectedSector}
              onChange={(e) => {
                const value = e.target.value === '' ? null : Number(e.target.value);
                setSelectedSector(value);
                setCurrentPage(1); // Reset to first page when filtering
              }}
            >
              <option value="">Kõik sektorid</option>
              {sektorid.map(sektor => (
                <option key={sektor.id} value={sektor.id}>
                  {sektor.nimi}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Ideas Grid */}
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-black">Ideed</h2>          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
            {currentIdeas.length > 0 ? (
              currentIdeas.map((idea) => (
                <div 
                  key={idea.id}
                  onClick={() => handleIdeaClick(idea)}
                  className="bg-white p-4 rounded-md shadow cursor-pointer hover:shadow-md transition-shadow border border-gray-200"
                >
                  <h3 className="font-medium text-black line-clamp-2 h-12">{idea.pealkiri}</h3>
                  <div className="flex flex-col gap-1 mt-2">
                    <div className="flex items-center">
                      <div className={`h-3 w-3 rounded-full mr-2 ${idea.hääletusel ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className="text-sm text-gray-600">{idea.hääletusel ? 'Hääletusel' : 'Ei ole hääletusel'}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">Sektor:</span> {sektorid.find(s => s.id === idea.sektorId)?.nimi}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-black text-lg">Ei leitud ühtegi sobivat ideed</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSector(null);
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-black rounded-md hover:bg-blue-700"
                >
                  Lähtesta otsingufiltrid
                </button>
              </div>
            )}
          </div>{/* Pagination */}
          <div className="flex justify-center mt-6">
            {filteredIdeas.length > 0 ? (
              <>
                {Array.from({ length: Math.ceil(filteredIdeas.length / ideasPerPage) }, (_, i) => (
                  <button 
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    disabled={currentPage === i + 1}
                    className="px-4 py-2 mx-1 bg-white text-black border border-gray-300 rounded-md disabled:opacity-50"
                  >
                    {i + 1}
                  </button>
                ))}
              </>
            ) : (
              <p className="text-white">Ei leitud ühtegi sobivat ideed</p>
            )}
            {/**
             * Pagination API Integration:
             * The API should return total count and total pages
             * Then generate pagination buttons dynamically:
             * 
             * {Array.from({ length: totalPages }, (_, i) => (
             *   <button
             *     key={i + 1}
             *     onClick={() => setCurrentPage(i + 1)}
             *     disabled={currentPage === i + 1}
             *     className="px-4 py-2 mx-1 bg-white text-black border border-gray-300 rounded-md disabled:opacity-50"
             *   >
             *     {i + 1}
             *   </button>
             * ))}
             */}
          </div>
        </div>
        
        {/* Idea Editor Popup */}
        {selectedIdea && editedIdea && (          <div 
            className="fixed inset-0 backdrop-blur-[2px] flex items-center justify-center z-50 pointer-events-auto"
            onClick={handleClosePopup}
          >
            <div 
              className="bg-white rounded-lg p-8 w-full max-w-xl relative border-2 border-black shadow-xl"
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Close Button */}
              <button 
                onClick={handleClosePopup}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h2 className="text-2xl font-bold mb-6 text-black">Muuda ideed #{editedIdea.id}</h2>
                {/* Title Input */}
              <div className="mb-4">
                <label htmlFor="pealkiri" className="block text-sm font-medium text-black mb-1">
                  Pealkiri:
                </label>
                <input
                  id="pealkiri"
                  type="text"
                  value={editedIdea.pealkiri}
                  onChange={(e) => setEditedIdea({...editedIdea, pealkiri: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
                />
              </div>
              
              {/* Sector Selector */}
              <div className="mb-4">
                <label htmlFor="sektor" className="block text-sm font-medium text-black mb-1">
                  Sektor:
                </label>
                <select
                  id="sektor"
                  value={editedIdea.sektorId}
                  onChange={(e) => setEditedIdea({...editedIdea, sektorId: Number(e.target.value)})}
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
                >
                  {sektorid.map(sektor => (
                    <option key={sektor.id} value={sektor.id}>
                      {sektor.nimi}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Description Input */}
              <div className="mb-4">
                <label htmlFor="kirjeldus" className="block text-sm font-medium text-black mb-1">
                  Kirjeldus:
                </label>
                <textarea
                  id="kirjeldus"
                  value={editedIdea.kirjeldus}
                  onChange={(e) => setEditedIdea({...editedIdea, kirjeldus: e.target.value})}
                  rows={5}
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
                />
              </div>
              
              {/* Toggle for "hääletusel" */}
              <div className="mb-6 flex items-center">
                <input
                  id="hääletusel"
                  type="checkbox"
                  checked={editedIdea.hääletusel}
                  onChange={(e) => setEditedIdea({...editedIdea, hääletusel: e.target.checked})}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="hääletusel" className="ml-2 block text-sm text-black">
                  Hääletusel
                </label>
              </div>
              
              {/* Save Button */}
              <button
                onClick={handleSaveIdea}
                className="w-full py-2 bg-blue-600 text-black rounded-md hover:bg-blue-700 transition-colors"
              >
                Salvesta
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
