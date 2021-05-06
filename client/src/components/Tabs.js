import React from 'react';
import { 
    TabContent, 
    TabPane, 
    Nav, 
    NavItem, 
    NavLink,
    Container
} from 'reactstrap';
import classnames from 'classnames';

import RandomQuote from './RandomQuote'
import AllQuotes from './AllQuotes'

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (

        <Container>
            <Nav tabs>
            <NavItem>
                <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
                >
                Random Quote
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
                >
                All Quotes
                </NavLink>
            </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
                <RandomQuote />
            </TabPane>
            <TabPane tabId="2">
                <AllQuotes />
            </TabPane>
            </TabContent>
        </Container>

    );
  }
}

export default Tabs