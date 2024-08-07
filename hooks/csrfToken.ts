export const generateCSRFToken = () => {
  const token = Math.random().toString(36).substring(2);
  return token;
};

export const storeCSRFToken = (token: string) => {
  try {
    localStorage.setItem('csrfToken', token);
  } catch (e) {
    console.error(e);
  }
};

// Retrieve the CSRF token from localStorage
export const getCSRFToken = () => {
  try {
    const token = localStorage.getItem('csrfToken');
    return token;
  } catch {
    return null;
  }
};
