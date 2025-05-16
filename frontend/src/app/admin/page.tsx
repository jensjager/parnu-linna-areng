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

// API base URL - this should point to your backend server
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Mock data for testing when the backend is not available
const MOCK_SECTORS: Sektor[] = [
  { id: 1, nimi: 'Majandus' },
  { id: 2, nimi: 'Keskkond' },
  { id: 3, nimi: 'Transport' },
  { id: 4, nimi: 'Haridus' },
  { id: 5, nimi: 'Kultuur' },
  { id: 6, nimi: 'Muu' }
];

const MOCK_IDEAS: Idea[] = [
  { id: 1, pealkiri: 'Pärnu ranna laiendamine', kirjeldus: 'Pärnu ranna laiendamine Mere puiestee suunas, et mahutada rohkem külastajaid suvehooajal ja vähendada ülerahvastatust tipphetkedel.', hääletusel: true, sektorId: 2 },
  { id: 2, pealkiri: 'Koerte park kesklinna', kirjeldus: 'Rajada kesklinna lähedale täielikult tarastatud koerte jalutusala, kus koerad saaksid vabalt joosta. Parki võiks lisada ka treeningvahendid ja joogikohad.', hääletusel: false, sektorId: 2 },
  { id: 3, pealkiri: 'Rattalaenutus süsteemi laiendamine', kirjeldus: 'Laiendada olemasolevat rattalaenutuse süsteemi, et see kataks ka äärelinnad ja populaarsed turismikohad.', hääletusel: true, sektorId: 3 },
  { id: 4, pealkiri: 'Avalikud WiFi punktid randades', kirjeldus: 'Paigaldada tasuta WiFi levialad kõikidesse Pärnu randadesse, et turistid ja kohalikud saaksid mugavalt internetti kasutada.', hääletusel: false, sektorId: 5 },
  { id: 5, pealkiri: 'Rohkem prügikaste kesklinnas', kirjeldus: 'Paigaldada rohkem prügikaste ja sorteerimiskonteinereid kesklinna piirkonda, eriti suure käidavusega aladele nagu promenaad ja rannapark.', hääletusel: false, sektorId: 2 },
  { id: 6, pealkiri: 'Talvine uisuväljak jõe äärde', kirjeldus: 'Rajada talveperioodiks suur uisuväljak jõe äärde, mis oleks valgustatud ja kus mängiks muusika. See tooks linna talvel rohkem elu.', hääletusel: false, sektorId: 5 },
  { id: 7, pealkiri: 'Elektritõukerataste parkimisalad', kirjeldus: 'Määrata kindlad parkimisalad elektritõukeratastele, et vähendada nende juhuslikku parkimist kõnniteedel ja muudes kohtades, mis takistab jalakäijaid.', hääletusel: true, sektorId: 3 },
  { id: 8, pealkiri: 'Rannapromenaadi pikendamine', kirjeldus: 'Pikendada rannapromenaadi Mai rajooni suunas, et luua ühtne jalutustee piki kogu randa.', hääletusel: true, sektorId: 2 },
  { id: 9, pealkiri: 'Rohkem lasteaedu', kirjeldus: 'Rajada linna juurde vähemalt kaks uut lasteaeda, sest olemasolevad on ülerahvastatud ja kohti ei jätku kõigile soovijatele.', hääletusel: true, sektorId: 4 },
  { id: 10, pealkiri: 'Avalik saun rannas', kirjeldus: 'Ehitada ranna lähedusse avalik saun, mida saaksid kasutada nii kohalikud kui turistid, eriti talveujujad.', hääletusel: false, sektorId: 5 },
  { id: 11, pealkiri: 'Luteri kiriku torni vaateplatvorm', kirjeldus: 'Avada Eliisabeti kiriku torn külastajatele, et pakkuda ilusat vaadet linnale ja merele. See tooks juurde turiste ja täiendavat tulu kirikule.', hääletusel: true, sektorId: 5 },
  { id: 12, pealkiri: 'Linna ettevõtluse toetusprogramm', kirjeldus: 'Luua spetsiaalne toetusprogramm kohalikele väikeettevõtetele, et soodustada uute töökohtade loomist ja äride alustamist.', hääletusel: true, sektorId: 1 }
];

// Empty placeholder until we load from the API
const sektorid: Sektor[] = [];

export default function Arengukava() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // State for ideas management
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [sectors, setSectors] = useState<Sektor[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [editedIdea, setEditedIdea] = useState<Idea | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [totalIdeas, setTotalIdeas] = useState(0);
  const ideasPerPage = 20;
    // Fetch sectors on component mount
  useEffect(() => {
    async function fetchSectors() {
      try {
        const response = await fetch(`${API_BASE_URL}/sektorid`);
        if (!response.ok) {
          throw new Error('Failed to fetch sectors');
        }
        const data = await response.json();
        setSectors(data);
      } catch (error) {
        console.error("Error fetching sectors:", error);
        // Fallback to mock data
        setSectors(MOCK_SECTORS);
      }
    }
    
    fetchSectors();
  }, []);
    // Fetch ideas when page, search term, or selected sector changes
  useEffect(() => {
    if (!authenticated) return; // Don't fetch if not authenticated
    
    async function fetchIdeas() {
      setLoading(true);      try {
        // Build the query URL with parameters
        let url = `${API_BASE_URL}/ideed?page=${currentPage}&limit=${ideasPerPage}`;
        
        if (selectedSector !== null) {
          url += `&sektorId=${selectedSector}`;
        }
        
        if (searchTerm.trim() !== '') {
          url += `&searchTerm=${encodeURIComponent(searchTerm.trim())}`;
        }
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch ideas');
        }
        
        const data = await response.json();
        setIdeas(data.data);
        setTotalPages(data.totalPages);
        setTotalIdeas(data.total);
      } catch (error) {
        console.error("Error fetching ideas:", error);
        // Fallback to mock data
        setIdeas(MOCK_IDEAS);
        setTotalPages(1);
        setTotalIdeas(MOCK_IDEAS.length);
      } finally {
        setLoading(false);
      }
    }
      fetchIdeas();
  }, [currentPage, selectedSector, authenticated, searchTerm]);
  // The search is now handled by the backend
  const filteredIdeas = ideas;
  // Handle opening the idea editor popup
  const handleIdeaClick = async (idea: Idea) => {
    try {
      const response = await fetch(`${API_BASE_URL}/ideed/${idea.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch idea details');
      }
      
      const ideaDetails = await response.json();
      setSelectedIdea(ideaDetails);
      setEditedIdea({ ...ideaDetails });
    } catch (error) {
      console.error("Error fetching idea details:", error);
      // Fallback to the list item data if detailed fetch fails
      setSelectedIdea(idea);
      setEditedIdea({ ...idea });
    }
  };

  const handleClosePopup = () => {
    setSelectedIdea(null);
    setEditedIdea(null);
  };
    const handleSaveIdea = async () => {
    if (!editedIdea) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/ideed/${editedIdea.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedIdea)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update idea');
      }
      
      const updatedIdea = await response.json();
      
      // Update local state
      setIdeas(ideas.map(idea => 
        idea.id === updatedIdea.id ? updatedIdea : idea
      ));
      
      handleClosePopup();
      
      // Show success notification
      showNotification('Idee edukalt uuendatud!', 'success');
    } catch (error) {
      console.error("Error updating idea:", error);
      // Show error message to user
      alert("Viga idee uuendamisel. Palun proovi uuesti.");
    }
  };
  
  // Function to delete an idea
  const handleDeleteIdea = async () => {
    if (!editedIdea) return;
    
    if (!confirm("Kas olete kindel, et soovite selle idee kustutada? Seda toimingut ei saa tagasi võtta.")) {
      return;
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/ideed/${editedIdea.id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete idea');
      }
      
      // Update local state
      setIdeas(ideas.filter(idea => idea.id !== editedIdea.id));
      
      handleClosePopup();
      
      // Force refresh of idea listing
      setCurrentPage(1);
      
      // Show success notification
      showNotification('Idee edukalt kustutatud!', 'success');
    } catch (error) {
      console.error("Error deleting idea:", error);
      alert("Viga idee kustutamisel. Palun proovi uuesti.");
    }
  };
    // Initialize a new empty idea
  const initializeNewIdea = () => {
    const newIdea: Idea = {
      id: 0, // This will be assigned by the database on creation
      pealkiri: '',
      kirjeldus: '',
      hääletusel: false,
      sektorId: 6 // Default to "Muu" (Other) sector
    };
    
    setSelectedIdea(newIdea);
    setEditedIdea(newIdea);
  };
  // Function to create a new idea
  const handleCreateIdea = async () => {
    if (!editedIdea) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/ideed`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedIdea)
      });
      
      if (!response.ok) {
        throw new Error('Failed to create idea');
      }
      
      const createdIdea = await response.json();
      
      // Update local state if it's on the first page
      if (currentPage === 1) {
        setIdeas([createdIdea, ...ideas].slice(0, ideasPerPage));
      } else {
        // If not on first page, navigate to first page to see the new idea
        setCurrentPage(1);
      }
      
      handleClosePopup();
      
      // Show success notification
      showNotification('Idee edukalt loodud!', 'success');
    } catch (error) {
      console.error("Error creating idea:", error);
      
      // When backend is unavailable, create mock data for testing purposes
      if (window.confirm("Ei õnnestunud ideed luua. Võimalik, et server pole kättesaadav. Kas soovid lisada test-idee?")) {
        const mockId = Math.floor(Math.random() * 10000) + 100;
        const mockNewIdea = {
          ...editedIdea,
          id: mockId
        };
        
        setIdeas([mockNewIdea, ...ideas].slice(0, ideasPerPage));
        handleClosePopup();
      } else {
        alert("Viga idee loomisel. Palun proovi uuesti.");
      }
    }
  };
    const handleSubmit = (e: React.FormEvent) => {    
    e.preventDefault();
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123'; // Fallback for development
    
    if (password === adminPassword) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Vale parool, palun proovi uuesti.');
      setPassword('');
    }
  };

  // State for notifications
  const [notification, setNotification] = useState<{message: string; type: 'success' | 'error'} | null>(null);
  
  // Function to show notification
  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });
    // Auto-hide after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };
    // Function to refresh ideas list
  const refreshIdeas = () => {
    setCurrentPage(1);
    fetchIdeasData(1);
  };

  // Function to reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedSector(null);
    setCurrentPage(1);
    // After setting state to null, manually fetch to ensure we get unfiltered data
    setTimeout(() => fetchIdeasData(1), 0);
  };

  // Function to fetch ideas data to reuse in multiple places
  const fetchIdeasData = async (page: number) => {
    setLoading(true);
    try {      // Build the query URL with parameters
      let url = `${API_BASE_URL}/ideed?page=${page}&limit=${ideasPerPage}`;
      
      if (selectedSector !== null) {
        url += `&sektorId=${selectedSector}`;
        console.log('Filtering by sector:', selectedSector);
      }
      
      if (searchTerm.trim() !== '') {
        url += `&searchTerm=${encodeURIComponent(searchTerm.trim())}`;
      }
      
      console.log('Fetching ideas with URL:', url);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch ideas');
      }
      
      const data = await response.json();
      setIdeas(data.data);
      setTotalPages(data.totalPages);
      setTotalIdeas(data.total);
    } catch (error) {
      console.error("Error fetching ideas:", error);
      // Fallback to mock data
      setIdeas(MOCK_IDEAS);
      setTotalPages(1);
      setTotalIdeas(MOCK_IDEAS.length);
    } finally {
      setLoading(false);
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
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
          <div className="w-full sm:w-64">            <select
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg bg-white"
              value={selectedSector === null ? '' : selectedSector}
              onChange={(e) => {
                const value = e.target.value === '' ? null : Number(e.target.value);
                console.log('Selected sector value:', value);
                setSelectedSector(value);
                setCurrentPage(1); // Reset to first page when filtering
              }}
            >
              <option value="">Kõik sektorid</option>
              {sectors.map(sektor => (
                <option key={sektor.id} value={sektor.id}>
                  {sektor.nimi}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Ideas Grid */}
        <div className="w-full">          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-black">Ideed</h2>
            <div className="flex gap-2">
              <button 
                onClick={refreshIdeas}
                className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300"
                title="Värskenda ideid"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button 
                onClick={initializeNewIdea}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Lisa uus idee
              </button>
            </div>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
                {filteredIdeas.length > 0 ? (
                  filteredIdeas.map((idea) => (
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
                          <span className="font-medium">Sektor:</span> {sectors.find(s => s.id === idea.sektorId)?.nimi || 'Määramata'}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (                  <div className="col-span-full text-center py-8">
                    <p className="text-black text-lg">Ei leitud ühtegi sobivat ideed</p>
                    <button 
                      onClick={resetFilters}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Lähtesta otsingufiltrid
                    </button>
                  </div>
                )}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button 
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      disabled={currentPage === i + 1}
                      className="px-4 py-2 mx-1 bg-white text-black border border-gray-300 rounded-md disabled:opacity-50"
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        
        {/* Idea Editor Popup */}
        {selectedIdea && editedIdea && (          <div 
            className="fixed inset-0 backdrop-blur-[2px] flex items-center justify-center z-50 pointer-events-auto"
            onClick={handleClosePopup}
          >            <div 
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
              
              <h2 className="text-2xl font-bold mb-6 text-black">
                {editedIdea.id === 0 ? 'Lisa uus idee' : `Muuda ideed #${editedIdea.id}`}
              </h2>
              
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
                  {sectors.map(sektor => (
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
                onClick={editedIdea.id === 0 ? handleCreateIdea : handleSaveIdea}
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {editedIdea.id === 0 ? 'Lisa uus idee' : 'Salvesta muudatused'}
              </button>
              
              {/* Delete Button - only visible when editing an existing idea */}
              {editedIdea.id !== 0 && (
                <button
                  onClick={handleDeleteIdea}
                  className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors mt-4"
                >
                  Kustuta idee
                </button>
              )}
            </div>
          </div>
        )}
        
        {/* Notification Toast */}
        {notification && (
          <div className={`fixed bottom-4 right-4 mb-4 mr-4 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
            <p className="text-white text-sm font-medium">{notification.message}</p>
          </div>
        )}
      </main>
    </div>
  );
}
