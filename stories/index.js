import React from 'react';
import { storiesOf } from '@storybook/react';
import ParticleHeader from '../src/index';

storiesOf('ParticleHeader', module)
  .add('without props', () => (
    <div>
        <ParticleHeader
            style={{width: '100%'}}
        />
    </div>
  ))
  .add('with props', () => (
    <div>
        <ParticleHeader
            style={{width: '96%', margin: '1rem 2%'}}
            backgroundImage={"https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_1280.jpg"}
            particlesAmount={50}
            particlesSize={20}
            title="Polygon Particles Image"
            subtitle="A React library for Polygon Particles Image creation"
            subtitleStyle={{fontSize: '1.6rem', marginTop: '0.5rem'}}
            onHeaderClick={() => {}}
        />
    </div>
  ));  