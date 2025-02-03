// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  // 他の設定情報
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage }
