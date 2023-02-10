import React from 'react';
//import { useHistory } from 'react-router-dom';
import { BottomNavigation } from '@mui/material';

import FooterStyled from './Footer.styled';

function Footer() {
  //const history = useHistory();
  return (
    <FooterStyled data-testid="footer">
      <BottomNavigation
        sx={ { backgroundColor: '#FAFAFA' } }
      >
      </BottomNavigation>
    </FooterStyled>
  );
}

export default Footer;
