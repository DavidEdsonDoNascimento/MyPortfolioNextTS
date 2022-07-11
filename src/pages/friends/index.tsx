import { NextPage } from 'next';
import { PrankController } from '../../controllers/PrankController';
import { FaMailchimp } from 'react-icons/fa';
import { Container } from '@styles/Friends';

const friends: NextPage = () => {

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

  // const runTime = () => {
  //   setTimeout(() => {
  //     PrankController.STATUS.STOP = true;
  //   }, 50000);
  // };

  const surpriseMotherFucker = () => {

    PrankController.count = 0;

    while (!PrankController.STATUS.STOP) {

      setInterval(() => {
        const img = imageCreation();
        console.log(`${img}`);
        document.getElementsByTagName('body')[0].innerHTML += img;
        PrankController.count++;
        console.log(PrankController.count);
        if (PrankController.itsTimeReboot()) {
          // remove as imagens e pula fora do set interval
          const imgs = Array.from(document.getElementsByClassName('image-prank'));
          console.log(imgs);
          imgs.forEach(i => {
            i.remove();
          });
          PrankController.count = 0;
          PrankController.STATUS.STOP = true;
        }
      }, 1000);
    }

  };

  const randomPosition = () => {
    return {
      x: Math.floor(Math.random() * 400),
      y: Math.floor(Math.random() * 500)
    };
  };

  const imageDelete = (id: string) => {
    const image = document.getElementById(id);
    if (image) {
      document.getElementsByTagName('body')[0].removeChild(image);
    }
  };
  const imageCreation = () => {
    const { x, y } = randomPosition();

    return `
      <img
        id='${PrankController.count}'
        className='image-prank'
        src='${images[Math.floor(Math.random() * images.length - 1)]}'
        width='400'
        height='400'
        style='top: ${x}px, left: ${y}px'
        onClick='imageDelete(${PrankController.count.toString()})'
        }}
      />
    `;
  };

  return (
    <Container>
      <div className='wrapper'>
        <div className='content'>
          <p>
            <q>Para que inimigos se no mundo temos seres chamados Julio e Carlos para nos apedrejar por fraude fiscal?</q>
          </p>
          <button onClick={() => alert('em construção...')}>
            <FaMailchimp /> Receber Presente
          </button>
        </div>
      </div>
    </Container>
  );
};

export default friends;
