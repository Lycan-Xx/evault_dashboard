export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  return phoneRegex.test(phone);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

export const validateNIN = (nin: string): boolean => {
  return /^\d{11}$/.test(nin);
};

export const validateBVN = (bvn: string): boolean => {
  return /^\d{11}$/.test(bvn);
};