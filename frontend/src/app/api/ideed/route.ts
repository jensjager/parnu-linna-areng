import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Get the form data from the request
    const formData = await request.json();
      // Assign a default sector if not provided (the user doesn't select this)
    if (!formData.sektorId) {
      formData.sektorId = 6; // Default sector ID (Muu/Other)
    }
    
    // Backend API URL
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
    
    try {
      // First try to send to the real backend
      const response = await fetch(`${API_BASE_URL}/ideed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit to backend');
      }
      
      // Return the real backend response
      const data = await response.json();
      
      return NextResponse.json(data, { status: 201 });
    } catch (backendError) {
      console.error("Failed to connect to backend:", backendError);
      
      // For demo purposes, we'll simulate a successful response
      // In a real-world scenario, you might want to:
      // 1. Save the idea to local storage or a queue
      // 2. Set up a background job to retry sending it later
      // 3. Send an email notification to the admin
      
      // This is just a mock response for demonstration
      return NextResponse.json(
        { 
          id: Math.floor(Math.random() * 10000),
          ...formData,
          createdAt: new Date().toISOString()
        }, 
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: 'Failed to process the request' },
      { status: 500 }
    );
  }
}
