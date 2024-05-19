class APIService {
  baseUrl = "https://api.escuelajs.co/api/v1";

  // Method to set authorization token
  // Placeholder for setting the token, implement as needed
  setAuthToken(token) {
    localStorage.setItem('token', token);
  }

  // Method to make GET requests
  async get(endpoint, auth = true, params = {}) {
    try {
      const token = await localStorage.getItem('token');
      let url = `${this.baseUrl}/${endpoint}`;
      if (Object.keys(params).length > 0) {
        url += '?' + new URLSearchParams(params).toString();
      }
      const response = await fetch(url, {
        method: "GET",
        headers: auth && token
         ? {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            }
          : { Accept: "application/json", "Content-Type": "application/json" },
      }).then(res => res.json());
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error.response? error.response.data : error.message;
    }
  }

  // Method to make POST requests
  async post(endpoint, auth = true, data = {}) {
    try {
      const token = await localStorage.getItem('token');
      const options = {
        method: "POST",
        headers: auth && token
         ? {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            }
          : { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(`${this.baseUrl}/${endpoint}`, options);
      return response.json();
    } catch (error) {
      console.error('Error posting data:', error);
      throw error.response? error.response.data : error.message;
    }
  }
}

// Export APIService class
module.exports = APIService;
