import React from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components';

const tabColors = styled.button`
    border-color:purple;
    background-color:white;
    color:purple;
`



const TabButtons = () => (
  <div>
    <Button basic>Standard</Button>
    <Button basic color='purple'>
      Food
    </Button>
    <Button basic color='pink'>
      Health
    </Button>
    <Button basic color='purple'>
      Security
    </Button>
    <Button basic color='pink'>
      Transportation
    </Button>
    <Button basic color='purple'>
      Debt
    </Button>
  </div>
)

export default TabButtons;