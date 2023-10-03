import React from 'react';
// next
import Link from 'next/link';
// services
import CharacterServices from '@/modules/character/services/characterServices';
// components
import { Card, Button } from '@/components/';
// types
import { characterType } from '@/modules/character/types/characterTypes';
// styles
import './example.scss';

const ExamplePage = async () => {
  const characters = await CharacterServices.getCharacters();

  const allCharacters = characters?.results;

  return (
    <main className='container'>
      <h1>Characters</h1>

      <section className='p-example--cards'>
        {allCharacters?.map(({ id, image, name }: characterType) => (
          <Card
            key={id}
            urlImage={image}
            title={name}
            footer={
              <Link href={`/example/${id}`}>
                <Button variant='primary' className='wLarge'>
                  Go to Character
                </Button>
              </Link>
            }
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              vel quos, expedita assumenda nesciunt quae porro eveniet ex maxime
              delectus provident distinctio.
            </p>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default ExamplePage;
