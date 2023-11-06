import { ReactElement, ReactNode } from 'react';
import './TheContiner.css';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { triangle, ellipse, square } from 'ionicons/icons';
import TheTabBar, { TheTabBarProps } from './TheTabBar';

interface TheContainerProps {
  children: ReactNode;
}

const TheContainer: React.FC<TheContainerProps> = (props) => {
  return (<>
    <IonTabs>
      {props.children}
      <IonTabBar slot="bottom">
        <TheTabBar tabs={[
          {label: "Tab 1", tab: "tab1", href: "/tab1", icon: triangle},
        ]} />
      </IonTabBar>
    </IonTabs>
  </>
  );
};

export default TheContainer;
