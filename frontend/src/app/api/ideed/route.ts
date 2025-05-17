import { NextResponse } from 'next/server';

// Import the sectors from the sector route
import { sectors } from '../sektorid/route';

// Mock data for ideas (will be used if backend is not available)
const mockIdeas = [
  { id: 1, pealkiri: 'Pärnu ranna laiendamine', kirjeldus: 'Pärnu ranna laiendamine Mere puiestee suunas, et mahutada rohkem külastajaid suvehooajal ja vähendada ülerahvastatust tipphetkedel.', hääletusel: true, created_at: "2025-05-16T22:52:15.152197+00:00", omanik: "Jaanus", poolt: 5, vastu: 1, email: "jaanus@gmail.com", valdkond: "Looduskeskkond" },
  { id: 2, pealkiri: 'Koerte park kesklinna', kirjeldus: 'Rajada kesklinna lähedale täielikult tarastatud koerte jalutusala, kus koerad saaksid vabalt joosta. Parki võiks lisada ka treeningvahendid ja joogikohad.', hääletusel: false, created_at: "2025-05-14T22:52:15.152197+00:00", omanik: "Maris", poolt: 10, vastu: 2, email: "maris@gmail.com", valdkond: "Elukeskkond" },
  { id: 3, pealkiri: 'Uus park linna', kirjeldus: 'Loodus', hääletusel: false, created_at: "2025-05-16T22:52:15.152197+00:00", omanik: "Jaanus", poolt: 0, vastu: 0, email: "jaanus@gmail.com", valdkond: "Looduskeskkond" }
];

// Try to get idea store from [id] route
let ideasStore: Record<string, any> = {};

// Export for other routes to use
export { ideasStore, mockIdeas };

// GET handler for fetching all ideas
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 20;
    const sektorId = searchParams.get('sektorId');
    const searchTerm = searchParams.get('searchTerm');
    
    // Merge stored ideas with mock ideas
    let allIdeas = [...mockIdeas];
    
    // Update mock ideas with any stored versions
    Object.values(ideasStore).forEach((storedIdea: any) => {
      const index = allIdeas.findIndex(idea => idea.id === storedIdea.id);
      if (index >= 0) {
        allIdeas[index] = storedIdea;
      } else {
        allIdeas.push(storedIdea);
      }
    });
      // Filter by sector if specified
    if (sektorId) {
      // Get the sector name from the ID
      const sectorName = sectors.find(s => s.id === parseInt(sektorId))?.nimi;
      if (sectorName) {
        allIdeas = allIdeas.filter(idea => 
          idea.valdkond && idea.valdkond.toLowerCase() === sectorName.toLowerCase()
        );
      }
    }
    
    // Filter by search term if specified
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      allIdeas = allIdeas.filter(idea => 
        idea.pealkiri.toLowerCase().includes(term) || 
        idea.kirjeldus.toLowerCase().includes(term)
      );
    }
    
    // Paginate results
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedIdeas = allIdeas.slice(start, end);
    
    return NextResponse.json({
      data: paginatedIdeas,
      total: allIdeas.length,
      page,
      totalPages: Math.ceil(allIdeas.length / limit)
    });  } catch (error) {
    console.error('Error getting ideas:', error);
    return NextResponse.json({ error: 'Failed to get ideas' }, { status: 500 });
  }
}

// POST handler for creating new ideas
export async function POST(request: Request) {
  try {
    // Get the form data from the request
    const formData = await request.json();
        // Assign a default sector if not provided (the user doesn't select this)
    if (!formData.valdkond) {
      formData.valdkond = 'Muu'; // Default valdkond
    }
    
    // Create a new idea with a unique ID
    const newId = Math.max(0, ...mockIdeas.map(idea => idea.id), ...Object.keys(ideasStore).map(id => parseInt(id))) + 1;
    
    const newIdea = {
      ...formData,
      id: newId,
      created_at: new Date().toISOString(),
      omanik: formData.omanik || "Kodanik",
      poolt: 0,
      vastu: 0,
      email: formData.email || "example@example.com",
      valdkond: formData.valdkond || "Muu"
    };
    
    // Store in memory
    ideasStore[newId] = newIdea;
    
    return NextResponse.json(newIdea, { status: 201 });
  } catch (error) {
    console.error('Error creating idea:', error);
    return NextResponse.json({ error: 'Failed to create idea' }, { status: 500 });
  }
}
