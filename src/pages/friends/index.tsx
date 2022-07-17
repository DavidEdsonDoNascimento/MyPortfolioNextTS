import { NextPage } from 'next';
import { PrankController } from '../../controllers/PrankController';
import { FaMailchimp } from 'react-icons/fa';
import { Container } from '@styles/Friends';
import { useEffect, useState } from 'react';

const friends: NextPage = () => {

  const [isGeneratingIimage, setIsGeneratingIimage] = useState<boolean>(false);
  const [imageDom, setImageDOM] = useState<any>(null);
  const DIMENSIONS = {
    HEIGHT: typeof window !== 'undefined' ? window.screen.height : 400,
    WIDTH: typeof window !== 'undefined' ? window.screen.width : 300,
    IMAGE: 150
  };

  const PATHS = {
    PRANKS: '/imgs/pranks'
  };

  const images = [
    `${PATHS.PRANKS}/latrel1.jpg`,
    `${PATHS.PRANKS}/latrel2.jpeg`,
    `${PATHS.PRANKS}/latrel4.jpg`,
    `${PATHS.PRANKS}/latrel5.jpg`,
    `${PATHS.PRANKS}/latrel6.jpg`,
  ];

  useEffect(() => {
    if (!isGeneratingIimage) {
      clearTimeout(imageDom);
    }
  }, [isGeneratingIimage]);

  const generateImageInDOM = () => {
    return setInterval(() => {

      const content = document.getElementsByClassName('content')[0];

      if (!content) {
        return;
      }

      const divImage = imageCreation();
      const img = divImage.children[0];

      if (!img) {
        return;
      }
      content.appendChild(img);

      PrankController.count++;

      if (PrankController.itsTimeReboot()) {
        // remove as imagens e pula fora do set interval
        const imgs = Array.from(document.getElementsByClassName('image-prank'));
        console.log(imgs);
        imgs.forEach(i => {
          i.remove();
        });

        // habilita o botão novamente
        const btnSurprise = document.getElementById('btn-surprise');

        if (btnSurprise) {
          btnSurprise.removeAttribute('disabled');
        }

        PrankController.count = 0;

        setIsGeneratingIimage(false);

      }
    }, 1000);
  };

  const surpriseMotherFucker = () => {

    setIsGeneratingIimage(true);

    const btnSurprise = document.getElementById('btn-surprise');

    if (btnSurprise) {
      btnSurprise.setAttribute('disabled', 'true');
    }

    PrankController.count = 0;

    setImageDOM(generateImageInDOM());

  };

  // esse x e y deve ser via media query
  const randomPosition = () => {
    return {
      x: Math.floor(Math.random() * (DIMENSIONS.HEIGHT - DIMENSIONS.IMAGE)),
      y: Math.floor(Math.random() * (DIMENSIONS.WIDTH - DIMENSIONS.IMAGE))
    };
  };

  const imageCreation = () => {
    const { x, y } = randomPosition();
    console.log(`x: ${x}px e y: ${y}px`);
    const div = document.createElement('div');

    div.innerHTML = `
      <img
        id='${PrankController.count}'
        class='image-prank'
        src='${images[Math.floor(Math.random() * (images.length - 1))]}'
        width='${DIMENSIONS.IMAGE}px'
        height='${DIMENSIONS.IMAGE}px'
        style='top: ${x}px; left: ${y}px; position: absolute; border-radius: 25%;'
        onClick='() => {
          const image = document.getElementById(${PrankController.count.toString()});
          const content =  document.getElementsByTagName('content')[0];

          if (image && content) {
            content.removeChild(image);
          }
        }'
        }}
      />
    `;

    return div;
  };

  return (
    <Container>
      <div className='wrapper'>
        <div className='content'>
          <p>
            <q>Para que inimigos se no mundo temos seres chamados Julio e Carlos para nos apedrejar por fraude fiscal?</q>
          </p>
          <button id='btn-surprise' onClick={() => surpriseMotherFucker()}>
            <FaMailchimp /> Receber Presente
          </button>
        </div>
      </div>
    </Container>
  );
};

export default friends;
