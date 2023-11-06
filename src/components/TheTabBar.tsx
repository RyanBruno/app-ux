import { ReactElement, ReactNode } from 'react';
import './TheTabBar.css';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { triangle, ellipse, bookOutline, homeOutline, walletOutline, giftOutline, personCircleOutline } from 'ionicons/icons';

export interface TheTabBarProps {
  tabs?: Array<{label: string, icon: string, href: string, tab: string}>,
}

const TheTabBar: React.FC<TheTabBarProps> = (props) => {
  const tabs = props.tabs ? props.tabs : [
    {label: "Home", tab: "home", href: "/home", icon: homeOutline},
    {label: "Balance", tab: "balance", href: "/balance", icon: walletOutline},
    {label: "Menu", tab: "menu", href: "/menu", icon: bookOutline},
    {label: "Rewards", tab: "rewards", href: "/rewards", icon: giftOutline},
    {label: "Account", tab: "account", href: "/account", icon: personCircleOutline},
  ];

  return (<>
    <IonTabBar>
      {tabs.map((tab, index) => (
        <IonTabButton tab={tab.tab} href={tab.href} key={index}>
          <IonIcon aria-hidden="true" icon={tab.icon} />
          <IonLabel>{tab.label}</IonLabel>
        </IonTabButton>
      ))}
    </IonTabBar>
  </>
  );
};

export default TheTabBar;
