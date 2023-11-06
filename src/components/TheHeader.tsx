import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonNote } from '@ionic/react';
import './TheHeader.css';
import { locationOutline, cartOutline, notificationsOutline } from 'ionicons/icons';

export interface TheHeaderProps {
  title: String,
}

const TheHeader: React.FC<TheHeaderProps> = (props) => {

  return (<>
    <IonHeader class="ion-no-border">
      <IonToolbar>
        <div slot="start">
          <IonTitle>{props.title}</IonTitle>
          <div id="location">
            <IonIcon icon={locationOutline}></IonIcon>
            <IonNote>Rosslyn</IonNote>
          </div>
        </div>
        <IonButtons id="icons" slot="end">
          <IonButton>
            <IonIcon icon={notificationsOutline}></IonIcon>
          </IonButton>
          <IonButton>
            <IonIcon icon={cartOutline}></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  </>
  );
};

export default TheHeader;
