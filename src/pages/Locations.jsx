import { useEffect } from 'react';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { getLocations } from '../services/apiLocations';

function Locations() {
  useEffect(function () {
    getLocations().then((data) => console.log(data));
  }, []);
  return (
    <Row type='horizontal'>
      <Heading as='h1'>All Locations</Heading>
      <Row>{/* <CabinTable /> */}</Row>
    </Row>
  );
}

export default Locations;
