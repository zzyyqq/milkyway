import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from "./components/Menu/subMenu"
import Tabs from './components/Tabs/tabs'
import TabItem from './components/Tabs/tabItem'
import Icon from './components/Icon/icon'
library.add(fas)
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon='arrow-down' theme='danger'></Icon>
        <Menu defaultIndex='0'>
          <MenuItem>
            cool link 1
          </MenuItem>
          <MenuItem>
            cool link 2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
        <Tabs defaultIndex={0} >
          <TabItem label="苹果" >tab1
          </TabItem>
          <TabItem label='123'disabled>tab2
          </TabItem>
          <TabItem label="香蕉">tab3
          </TabItem>
        </Tabs>
        <Button autoFocus>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Danger Small</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary Large</Button>
        <Button disabled>Disable Button</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Baidu Link</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Baidu Link</Button>
        <Alert  alertDescription="你妈叫你回家吃饭" alertType={AlertType.Success} closeable alertVisiable></Alert>
      </header>
    </div>
  );
}

export default App;

