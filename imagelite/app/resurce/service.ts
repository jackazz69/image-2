import {Image } from "./image";
 
class ImageService {
   baseURL: String = 'http://localhost:8080/v1/images';

   async buscar (): Promise<Image[]> {
    const response = await fetch(this.baseURL);
    return await response.json();
   }
}

export const userImage = new ImageService();
