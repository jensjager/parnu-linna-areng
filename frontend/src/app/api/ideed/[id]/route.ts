// This is a mock endpoint to simulate the update process without actually updating the database
// It stores data in memory so it will persist during the session

import { NextResponse } from 'next/server';

// In-memory storage for ideas - import from the parent route if it exists
let ideasStore: Record<string, any> = {};
let mockIdeas: any[] = [];
try {
  const parentRoute = require('../route');
  if (parentRoute.ideasStore) {
    ideasStore = parentRoute.ideasStore;
  }
  // Try to get the mock ideas from the parent route
  if (parentRoute.mockIdeas) {
    mockIdeas = parentRoute.mockIdeas;
  }
} catch (error) {
  console.error('Could not import ideas store from parent route, creating new store');
  ideasStore = {};
  mockIdeas = [];
}

// Export for other routes to use
export { ideasStore };

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();
    const id = params.id;
    const numericId = parseInt(id);
    
    // Find existing data from mock or memory
    let existingIdea = ideasStore[id];
    
    // If not in memory, check mock data
    if (!existingIdea) {
      const mockIdea = mockIdeas.find(idea => idea.id === numericId);
      if (mockIdea) {
        existingIdea = { ...mockIdea };
      }
    }
    
    // Merge the updated data with existing data (or empty object if not found)
    ideasStore[id] = {
      ...(existingIdea || {}),
      ...data,
      id: numericId,
      // Only update timestamp if it's a new entry
      created_at: existingIdea?.created_at || new Date().toISOString(),
      // Preserve fields not in the update
      omanik: data.omanik || existingIdea?.omanik || "Admin",
      poolt: data.poolt !== undefined ? data.poolt : existingIdea?.poolt || 0,
      vastu: data.vastu !== undefined ? data.vastu : existingIdea?.vastu || 0,
      email: data.email || existingIdea?.email || "admin@example.com",
      // Make sure valdkond is preserved
      valdkond: data.valdkond || existingIdea?.valdkond || "Muu"
    };
    
    console.log(`Updated idea ${id} in memory:`, ideasStore[id]);
    
    // Return the updated idea
    return NextResponse.json(ideasStore[id]);} catch (error) {
    console.error(`Error updating idea ${params.id}:`, error);
    return NextResponse.json({ error: 'Failed to update idea' }, { status: 500 });
  }
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const numericId = parseInt(id);
    
    // If we have this idea in memory, return it
    if (ideasStore[id]) {
      return NextResponse.json(ideasStore[id]);
    }
    
    // Check if the idea exists in the mock data
    const mockIdea = mockIdeas.find(idea => idea.id === numericId);
    if (mockIdea) {
      return NextResponse.json(mockIdea);
    }
    
    // If not found anywhere, return a default idea
    return NextResponse.json({
      id: numericId,
      created_at: new Date().toISOString(),
      pealkiri: "Idea Title",
      kirjeldus: "Idea Description",
      omanik: "Jaanus",
      hääletusel: false,
      poolt: 0,
      vastu: 0,
      email: "jaanus@gmail.com",
      valdkond: "Looduskeskkond"
    });
  } catch (error) {
    console.error(`Error getting idea ${params.id}:`, error);
    return NextResponse.json({ error: 'Failed to get idea' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    
    // Delete the idea from memory if it exists
    if (ideasStore[id]) {
      console.log(`Deleting idea ${id} from memory`);
      delete ideasStore[id];
      return NextResponse.json({ success: true, message: 'Idea deleted successfully' });
    } else {
      // Even if it doesn't exist, return success for testing
      return NextResponse.json({ success: true, message: 'Idea not found but operation successful' });
    }
  } catch (error) {
    console.error(`Error deleting idea ${params.id}:`, error);
    return NextResponse.json({ error: 'Failed to delete idea' }, { status: 500 });
  }
}
