<p align="center">
  <img width="300" height="300" src="assets/rcep-logo.png">
</p>

# React Calendar Events Preview
Image component with polygon particles

<p align="center">
  <img width="300" src="assets/rcep-prev.gif">
</p>

## Installation
Run the following command:
`npm install --save react-polygon-particles-image`

## Usage

```js
import ParticlesImage from 'react-polygon-particles-image'

const MyComponent = props => (
  <div>
    <ParticlesImage 
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
)

```

## Properties

| Props | Default Values | Descriptions |
| --- | --- | --- |
| style | none | Component container styles |
| events | none | list of events (uuid and date field required) |
| color | 'white' | Text color inside a date marker |
| primaryColor | '#616FC6' | Marker backgroud color |
