'use client'

//import { Template } from '../components/Template';
//import { ImageCard } from '../components/Image';
import { Template, ImageCard } from '@/componente';

import { useState } from 'react';



export default function Galeria() {
 
  const image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXosoitInZuRK-ZVmOcUFedyCh0uDzdylvanqRg3zvg&s'
  const image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr2U_j6woiW73KvYUYQQxJs49Y8fOy4BLXktCzaG2EhA&s=10'
  
  const [codigoImage, setCodigoImage] = useState<number>(2);
  const [urlImage, setUrlImage] = useState<string>();

  function mudarImagem() {
    if(codigoImage == 1) {
      setCodigoImage(2);
      setUrlImage(image1)
      } else {
      setCodigoImage(1);
      setUrlImage(image2);
    }


  }

  return (
   
      <Template>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={mudarImagem}>
          Mudar Imagem
        </button>
          <section className="grid grid-cols-3 gap-4  p-4">
          (

          )  

          
            <ImageCard imageName = {'Natureza'}
            imageUrl = {urlImage}
            imageSize = '15 mb'
            uploadDate = '2023-01-01'
            />

            <ImageCard imageName = 'Natureza'
            imageUrl = {urlImage}
            imageSize = '15 mb'
            uploadDate = '2023-01-01'
            />
            <ImageCard imageName = 'Natureza'
            imageUrl = {urlImage}
            imageSize = '15 mb'
            uploadDate = '2023-01-01'
            />
            <ImageCard imageName = 'Natureza'
            imageUrl = {urlImage}
            imageSize = '15 mb'
            uploadDate = '2023-01-01'
            />
          </section>
          
       
        
      </Template>
   
  )
}