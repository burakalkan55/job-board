export async function fetchJobs(query: string) {
  const url = `https://www.arbeitnow.com/api/job-board-api`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();

    // Basit filtreleme: pozisyon isminde query geçenleri al
    const filtered = data.data.filter((job: any) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );

    return filtered;
  } catch (error) {
    console.error("API HATASI:", error);
    return [];
  }
}
