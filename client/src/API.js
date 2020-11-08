const API_URL = 'http://localhost:1337';

export async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}

export async function createLogEntry(entry) {
    
    const response = await fetch(`${API_URL}/api/logs`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(entry),
    });

    return response.json();
    
    //   let json;
    //   if (response.headers.get("content-type").includes("text/html")) {
    //     const message = await response.text();
    //     json = {
    //       message,
    //     };
    //   } else {
    //     json = await response.json();
    //   }
    //   if (response.ok) {
    //     return json;
    //   }
    //   const error = new Error(json.message);
    //   error.response = json;
    //   throw error;
}