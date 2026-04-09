import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

// Helper to get image URLs easily
export const getImageUrl = (record, filename) => {
  return pb.files.getUrl(record, filename);
};