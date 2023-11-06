import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import TheTabBar from '../components/TheTabBar';
import TheHeader from '../components/TheHeader';
import { logoIonic } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <TheHeader
        title="Hello"
      />
      <IonContent fullscreen>
        <IonCard color="success">
          <IonCardHeader>
            <IonCardTitle>Loyalty Rewards</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>......</IonCardContent>
        </IonCard>
        <IonCard color="primary">
          <IonCardHeader>
            <IonCardTitle>Order Ahead</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>......</IonCardContent>
        </IonCard>
        <IonList>
          <IonListHeader>
            <IonLabel>Categories</IonLabel>
            <IonButton>See All</IonButton>
          </IonListHeader>
          <IonItem lines={"none"}>
            <IonLabel>Specials</IonLabel>
            <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
          </IonItem>
          <IonItem lines={"none"}>
            <IonLabel>Most Popular</IonLabel>
            <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
          </IonItem>
        </IonList>

      </IonContent>
      <TheTabBar />
    </IonPage>
  );
};

export default Home;
