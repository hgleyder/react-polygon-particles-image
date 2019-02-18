import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import {bubble} from './particles/bubble';

class ParticleHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style, backgroundImage, particlesAmount, particlesColor, particlesSize, particlesPolygonSides, particlesSpeed,
      title, subtitle, titleStyle, subtitleStyle, headerHeight, headerWidth, onHeaderClick,
    } = this.props;
    
    return (
      <Wrapper style={style} headerHeight={headerHeight} headerWidth={headerWidth}>
        <HeaderImage image={backgroundImage}>
        <Particles
          width={headerWidth}
          height={headerHeight}
          params={bubble(particlesAmount, particlesSize, particlesColor, particlesPolygonSides, particlesSpeed)}
        />
        </HeaderImage>
        <TextContainer headerHeight={headerHeight} style={{cursor: onHeaderClick && 'pointer'}} onClick={onHeaderClick}>
          <Title style={titleStyle}>{title}</Title>
          <Subtitle style={subtitleStyle}>{subtitle}</Subtitle>
        </TextContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: ${props => props.headerHeight};
  width: ${props => props.headerWidth};
`;

const HeaderImage = styled.div`
 background-image: url(${props => props.image});
 width: ${props => props.width};
 min-height: 10rem;
 height: auto;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  bottom: 20rem;
  height: ${props => props.headerHeight};
  text-align: center;
  width: 100%;
  margin: auto 0;
`;

const Title = styled.div`
  font-size: 3.5rem;
`

const Subtitle = styled.div`
  font-size: 2rem;
`

ParticleHeader.propTypes = {
  style: PropTypes.object,
  backgroundImage: PropTypes.string,
  particlesAmount: PropTypes.number,
  particlesSize: PropTypes.number,
  particlesColor: PropTypes.string,
  particlesPolygonSides: PropTypes.number,
  particlesSpeed: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleStyle: PropTypes.object,
  subtitleStyle: PropTypes.object,
  headerWidth: PropTypes.string,
  headerHeight: PropTypes.string,
  onHeaderClick: PropTypes.func,
};

ParticleHeader.defaultProps = {
  style: {},
  backgroundImage: '',
  particlesAmount: 20,
  particlesSize: 10,
  particlesColor: '#ffffff',
  particlesPolygonSides: 3,
  particlesSpeed: 10,
  title: '',
  subtitle: '',
  titleStyle: {},
  subtitleStyle: {},
  headerWidth: '100%',
  headerHeight: '20rem',
  onHeaderClick: null,
};

export default ParticleHeader;
