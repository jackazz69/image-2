'use client'

//import { Template } from '../components/Template';
//import { ImageCard } from '../components/Image';
import { Template, ImageCard } from '@/componente';
import { ImageService, useImageService } from '@/resource/service';
import { Image } from '@/resource/image';
import { useState } from 'react';

export default function Galeria() {
  
  const useService = useImageService();
  const[images, setImages] = useState<ImageService[]>([]);
 
  const image1 = 'https://media.lombardodier.com/image/upload/f_auto,w_385/v1730138818/locom/_legacy/news/2021/May/20210521/Nature_LOcom.jpg'
  const image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNKV44LgLqcCIVKoS56GMzSJWre1EH2pY10uJK6EZFw&s=10'
  
  const [codigoImage, setCodigoImage] = useState<number>(2);
  const [urlImage, setUrlImage] = useState<string>();

  async function searchImages() {
    const result = await useService.buscar();
    setImages(result);
    console.table(result);
  }

  return (
   
      <Template>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={searchImages}>
          Mudar Imagem
        </button>
          <section className="grid grid-cols-3 gap-4  p-4">
            
          </section>
          
       
        
      </Template>
   
  )
}
