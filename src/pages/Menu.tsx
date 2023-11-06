import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './Menu.css';
import TheTabBar from '../components/TheTabBar';
import TheHeader from '../components/TheHeader';
import { logoIonic, searchOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <TheHeader
        title="Hello, Welcome"
      />
      <IonToolbar id="subbar">
        <IonButton slot="start" fill='clear' class="search">
          <IonIcon id="search" icon={searchOutline}></IonIcon>
        </IonButton>
        <div id="overflow-menu">
          <IonButton fill="solid"><h6>Full Menu</h6></IonButton>
          <IonButton fill="clear" color="dark"><h6 id="active">Specials</h6></IonButton>
          <IonButton fill="clear" color="dark"><h6>Coffee</h6></IonButton>
          <IonButton fill="clear" color="dark"><h6>Espresso</h6></IonButton>
          <IonButton fill="clear" color="dark"><h6>Specials</h6></IonButton>
          <IonButton fill="clear" color="dark"><h6>Coffee</h6></IonButton>
          <IonButton fill="clear" color="dark"><h6>Espresso</h6></IonButton>
        </div>
      </IonToolbar>
      <IonContent fullscreen
        scrollEvents={false}
        onIonScroll={(ev) => console.log(ev)}
      >
        <IonList>
          <IonListHeader>
            <IonLabel>Specials</IonLabel>
          </IonListHeader>
          <IonItem lines={"none"}>
            <IonLabel>Pumpkin Spice Latte</IonLabel>
            <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
          </IonItem>
          <IonItem lines={"none"}>
            <IonLabel>Ginger Bread Latte</IonLabel>
            <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
          </IonItem>
          <IonListHeader>
            <IonLabel>Espresso</IonLabel>
          </IonListHeader>
          <IonItem lines={"none"}>
            <IonLabel>Latte</IonLabel>
            <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
          </IonItem>
          <IonItem lines={"none"}>
            <IonLabel>Mocca</IonLabel>
            <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
          </IonItem>
          <IonListHeader>
            <IonLabel>Coffee</IonLabel>
          </IonListHeader>
          <IonItem lines={"none"}>
            <IonLabel>Drip Coffee</IonLabel>
            <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
          </IonItem>
          <IonItem lines={"none"}>
            <IonLabel>Iced Coffee</IonLabel>
            <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
          </IonItem>
          <IonListHeader>
            <IonLabel>Specials</IonLabel>
          </IonListHeader>
          <IonItem lines={"none"}>
            <IonLabel>Pumpkin Spice Latte</IonLabel>
            <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
          </IonItem>
          <IonItem lines={"none"}>
            <IonLabel>Ginger Bread Latte</IonLabel>
            <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
          </IonItem>
          <IonListHeader>
            <IonLabel>Espresso</IonLabel>
          </IonListHeader>
          <IonItem lines={"none"}>
            <IonLabel>Latte</IonLabel>
            <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
          </IonItem>
          <IonItem lines={"none"}>
            <IonLabel>Mocca</IonLabel>
            <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
          </IonItem>
          <IonListHeader>
            <IonLabel>Coffee</IonLabel>
          </IonListHeader>
          <IonItem lines={"none"}>
            <IonLabel>Drip Coffee</IonLabel>
            <IonThumbnail slot="end">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
          </IonItem>
          <IonItem lines={"none"}>
            <IonLabel>Iced Coffee</IonLabel>
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
