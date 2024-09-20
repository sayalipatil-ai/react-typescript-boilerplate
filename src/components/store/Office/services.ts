import { Office } from "./types";

export async function fetchOffices(): Promise<Office[]> {
  try {
    // Mock data for development purposes
    const mockOffices: Office[] = [
      { name: 'Office 1', location: 'New York' },
      { name: 'Office 2', location: 'San Francisco' }
    ];

    // Simulate an API call delay (optional)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return mockOffices;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch offices: ${error.message}`);
    }
    throw new Error(`Failed to fetch offices: ${error}`);
  }
}
