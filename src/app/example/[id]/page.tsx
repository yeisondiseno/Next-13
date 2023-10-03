import React from 'react';
import Image from 'next/image';
// services
import CharacterServices from '@/modules/character/services/characterServices';
// styles
import './example.scss';

const CharacterPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const characters = await CharacterServices.getCharacterById({ id });

  // data
  const { name, image, origin } = characters;

  return (
    <main className='p-character container'>
      <h1>{name}</h1>
      <section className='p-character--body'>
        <Image
          src={image}
          alt={`${name} - image`}
          width={300}
          height={300}
          loading='lazy'
          sizes='(max-width: 768px) 100vw'
        />
        <div>
          <h2>Origin: {origin?.name}</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            ullam libero corporis? Non, nostrum dolores voluptatem, porro
            sapiente tempora nisi quos, enim dignissimos illo corporis? Harum
            tempore voluptatibus architecto sint.
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            ullam libero corporis? Non, nostrum dolores voluptatem, porro
            sapiente tempora nisi quos, enim dignissimos illo corporis? Harum
            tempore voluptatibus architecto sint.
          </p>
        </div>
      </section>
    </main>
  );
};

export default CharacterPage;
