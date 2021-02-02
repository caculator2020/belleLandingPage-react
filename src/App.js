import {
  EtapeWrapper,
  EtapeRow,
  EtapeCol,
  EtapeImg,
  EtapeBtn,
  EtapeSubHeader,
  EtapeTitle,
  EtapeDesc,
  LinkBtn,
} from "./components/EtapeWrapper";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner>
        <Banner.Image
          srcDesk="./assets/images/banner_1.png"
          srcMobile="./assets/images/banner_1_mobile.png"
        />
        <Banner.Title>
          30 ans,
          <br className="break-mobile" />
          c'est la course&nbsp;!
        </Banner.Title>
        <Banner.Description>
          Ne laissez pas les premi&egrave;res rides
          <br className="break-desktop" />
          avoir votre peau.
        </Banner.Description>
      </Banner>
      <EtapeWrapper>
        <EtapeRow className="Etape-30ans-row1">
          <EtapeCol>
            <EtapeImg src="./assets/images/etape_1.png" />
          </EtapeCol>
          <EtapeCol>
            <EtapeBtn>&eacute;tape 1</EtapeBtn>
            <EtapeSubHeader>Double Serum</EtapeSubHeader>
            <EtapeTitle>
              L&rsquo;&eacute;tape
              <br className="break-mobile" />
              incontournable
            </EtapeTitle>
            <EtapeDesc>
              Deux s&eacute;rums en un
              <br />
              et 21 extraits de plantes
              <br />
              pour cibler tous les signes
              <br />
              de l&rsquo;&acirc;ge et raviver l&rsquo;&eacute;clat
              <br />
              de la peau tout en lui apportant
              <br />
              hydratation et confort.
              <br />
              <strong>Son plus ?</strong> Il renforce l&rsquo;efficacit&eacute;
              <br />
              des soins appliqu&eacute;s ensuite.
            </EtapeDesc>
            <LinkBtn
              title="JE CRAQUE"
              href="https://www.nocibe.fr/clarins-double-serum-traitement-complet-anti-age-intensif-30ml-flacon-pompe-s218552?q=double+serum"
            >
              JE CRAQUE
            </LinkBtn>
          </EtapeCol>
          <EtapeCol>
            <EtapeImg src="./assets/images/etape_2.png" />
            <EtapeImg src="./assets/images/etape_2_mobile.png" />
          </EtapeCol>
        </EtapeRow>
        <EtapeRow className="Etape-30ans-row2">
          <EtapeCol>
            <EtapeBtn>&eacute;tape 2</EtapeBtn>
            <EtapeSubHeader>Multi Active Jour</EtapeSubHeader>
            <EtapeTitle>HYDRATER &amp; D&Eacute;FATIGUER</EtapeTitle>
            <EtapeDesc>
              Att&eacute;nue visiblement les premi&egrave;res
              <br />
              rides, booste l&rsquo;&eacute;clat, hydrate et
              <br />
              prolonge la jeunesse de la peau.
              <br />
              Complexe anti-pollution.
            </EtapeDesc>
            <LinkBtn
              title="J&rsquo;HYDRATE"
              src="https://www.nocibe.fr/clarins-multi-active-jour-creme-toutes-peaux-50ml-pot-s206832?q=multi+active+jour"
            >
              J&rsquo;HYDRATE
            </LinkBtn>
          </EtapeCol>
          <EtapeCol>
            <EtapeImg src="./assets/images/etape_3.png">
              <img
                src="./assets/images/etape_4.png"
                alt="spoon"
                className="Etape-30ans-row2-img-spoon"
              />
            </EtapeImg>
          </EtapeCol>
          <EtapeCol>
            <EtapeBtn>&eacute;tape 3</EtapeBtn>
            <EtapeSubHeader>Multi Active Nuit</EtapeSubHeader>
            <EtapeTitle>
              HYDRATER &amp; R&Eacute;G&Eacute;N&Eacute;RER
            </EtapeTitle>
            <EtapeDesc>
              Pour une peau lisse
              <br />
              et tonique au r&eacute;veil&nbsp;!
            </EtapeDesc>
            <LinkBtn
              title="JE CRAQUE"
              href="https://www.nocibe.fr/clarins-multi-active-nuit-creme-legere-50ml-pot-s206836?q=multi+active+nuit+normal"
            >
              JE CRAQUE
            </LinkBtn>
          </EtapeCol>
        </EtapeRow>
      </EtapeWrapper>
      <Banner>
        <Banner.Image
          srcDesk="./assets/images/banner_2.png"
          srcMobile="./assets/images/banner_2_mobile.png"
        />
        <Banner.Title>
          40 ans,
          <br className="break-mobile" />
          le nouveau 20 ans.
        </Banner.Title>
        <Banner.Description>
          Donnez du ressort
          <br className="break-mobile" />
          &agrave; votre peau.
        </Banner.Description>
      </Banner>
      <EtapeWrapper>
        <EtapeRow className="Etape-40ans-row1">
          <EtapeCol>
            <EtapeRow>
              <EtapeImg src="./assets/images/etape_88_percent.png" />
              <EtapeDesc>
                des femmes* d&eacute;clarent
                <br className="break-desktop" />
                que Double <br className="break-mobile" />
                Serum
                <br className="break-desktop" />
                d&eacute;cuple l&rsquo;efficacit&eacute;
                <br className="break-mobile" />
                de
                <br className="break-desktop" />
                leur cr&egrave;me
                <br className="break-desktop" />
                Extra-Firming.
              </EtapeDesc>
            </EtapeRow>
            <p className="Etape-descGrayText">
              *Test de satisfaction &ndash; 103 femmes
              <br className="break-desktop" />
              - 28 jours : 14 jours
              <br className="break-mobile" />
              Extra-Firming
              <br className="break-desktop" />
              Jour Toutes peaux + 14 jours duo
              <br className="break-desktop" />
              Extra-Firming <br className="break-mobile" />
              Jour Toutes peaux +<br className="break-desktop" />
              Double Serum
            </p>
          </EtapeCol>
          <EtapeCol>
            <EtapeRow>
              <EtapeCol>
                <EtapeImg src="./assets/images/etape_5.png" />
                <EtapeImg src="./assets/images/etape_2_mobile.png" />
              </EtapeCol>
              <EtapeCol>
                <EtapeBtn>&eacute;tape 1</EtapeBtn>
                <EtapeSubHeader>Double Serum</EtapeSubHeader>
                <EtapeTitle>
                  L&rsquo;&eacute;tape
                  <br className="break-mobile" />
                  incontournable
                </EtapeTitle>
                <EtapeDesc>
                  Deux s&eacute;rums en un
                  <br className="break-mobile" />
                  et 21 extraits de plantes
                  <br className="break-desktop" />
                  <br className="break-mobile" />
                  pour cibler tous les
                  <br className="break-mobile" />
                  signes de l&rsquo;&acirc;ge
                  <br className="break-desktop" />
                  et raviver
                  <br className="break-mobile" />
                  l&rsquo;&eacute;clat de la peau tout
                  <br className="break-mobile" />
                  en lui
                  <br className="break-desktop" />
                  apportant
                  <br className="break-mobile" />
                  hydratation et confort.
                  <br className="break-desktop" />
                  <br className="break-mobile" />
                  <strong>Son plus ?</strong>s Il renforce
                  <br className="break-mobile" />
                  l&rsquo;efficacit&eacute; des soins
                  <br className="break-desktop" />
                  <br className="break-mobile" />
                  appliqu&eacute;s ensuite.
                </EtapeDesc>
                <LinkBtn
                  title="Double Serum"
                  href="https://www.nocibe.fr/clarins-double-serum-traitement-complet-anti-age-intensif-30ml-flacon-pompe-s218552?q=double+serum"
                >
                  JE CRAQUE
                </LinkBtn>
              </EtapeCol>
            </EtapeRow>
          </EtapeCol>
        </EtapeRow>
        <div className="Etape-row Etape-40ans-row2">
          <div className="Etape-col">
            <div className="Etape-btn-red">&eacute;tape 2</div>
            <div className="Etape-subHeader">Extra Firming Jour</div>
            <div className="Etape-title">RAFFERMIR &amp; LISSER</div>
            <p className="Etape-desc">
              Raffermit, lisse instantan&eacute;ment,
              <br />
              r&eacute;duit les rides.
              <br />
              Complexe anti-pollution.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              title="Extra Firming Jour"
              href="https://www.nocibe.fr/clarins-extra-firming-jour-creme-fermete-anti-rides-toutes-peaux-50ml-pot-s223138?q=extra+firming+jour+toutes+peaux"
              className="Etape-btn-black"
            >
              JE RAFFERMIS
            </a>
          </div>
          <div className="Etape-col">
            <div className="Etape-img">
              <img alt="etape" src="./assets/images/etape_6.png" />
            </div>
          </div>
          <div className="Etape-col">
            <div className="Etape-img">
              <img alt="etape" src="assets/images/etape_7.png" />
            </div>
            <div className="Etape-btn-red">&eacute;tape 3</div>
            <div className="Etape-subHeader">Extra Firming Nuit</div>
            <div className="Etape-title">
              RAFFERMIR &amp; R&Eacute;G&Eacute;N&Eacute;RER
            </div>
            <p className="Etape-desc">
              Raffermit, r&eacute;g&eacute;n&egrave;re,
              <br />
              r&eacute;duit les rides.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              title="Extra Firming Nuit"
              href="https://www.nocibe.fr/clarins-extra-firming-nuit-creme-regenerante-anti-rides-toutes-peaux-50ml-pot-s223141?q=extra+firming+nuit"
              className="Etape-btn-black"
            >
              JE REFFERMIS
            </a>
          </div>
        </div>
      </EtapeWrapper>
      <Banner>
        <Banner.Image
          srcDesk="./assets/images/banner_3.png"
          srcMobile="./assets/images/banner_3_mobile.png"
        />
        <Banner.Title>
          50 ans, belle
          <br className="break-mobile" />
          dans votre &acirc;ge.
        </Banner.Title>
        <Banner.Description>
          Op&eacute;ration densit&eacute;
          <br className="break-mobile" />
          &amp; fermet&eacute;.
        </Banner.Description>
      </Banner>
      <EtapeWrapper>
        <EtapeRow className="Etape-40ans-row1">
          <EtapeCol>
            <EtapeRow>
              <EtapeImg src="./assets/images/etape_91_percent.png" />
              <EtapeDesc>
                des femmes* d&eacute;clarent
                <br className="break-desktop" />
                que Double
                <br className="break-mobile" />
                Serum
                <br className="break-desktop" />
                d&eacute;cuple l&rsquo;efficacit&eacute;
                <br className="break-mobile" />
                de
                <br className="break-desktop" />
                leur cr&egrave;me Haute
                <br className="break-desktop" />
                Exigence.
              </EtapeDesc>
            </EtapeRow>
            <p className="Etape-descGrayText">
              *Test de satisfaction &ndash; 113 femmes - 28
              <br className="break-desktop" />
              jours : 14 jours Haute
              <br className="break-mobile" />
              Exigence Jour Toutes
              <br className="break-desktop" />
              peaux
              <br className="break-desktop" />
              + 14 jours duo Haute Exigence Jour
              <br className="break-mobile" />
              Toutes
              <br className="break-desktop" />
              peaux + Double Serum
            </p>
          </EtapeCol>
          <EtapeCol>
            <EtapeRow>
              <EtapeCol>
                <EtapeImg src="./assets/images/etape_5.png" />
                <EtapeImg src="./assets/images/etape_2_mobile.png" />
              </EtapeCol>
              <EtapeCol>
                <EtapeBtn>&eacute;tape 1</EtapeBtn>
                <EtapeSubHeader>Double Serum</EtapeSubHeader>
                <EtapeTitle>L&rsquo;&eacute;tape incontournable</EtapeTitle>
                <EtapeDesc>
                  Deux s&eacute;rums en un et 21 extraits de plantes
                  <br />
                  pour cibler tous les signes de l&rsquo;&acirc;ge
                  <br />
                  et raviver l&rsquo;&eacute;clat de la peau tout en lui
                  <br />
                  apportant hydratation et confort.
                  <br />
                  <strong>Son plus ?</strong>s Il
                  renforcel&rsquo;efficacit&eacute; des soins
                  <br />
                  appliqu&eacute;s ensuite.
                </EtapeDesc>
                <LinkBtn
                  title="Double Serum"
                  href="https://www.nocibe.fr/clarins-creme-haute-exigence-jour-multi-intensive-peaux-tres-seches-50ml-pot-s185437?q=multi+intensive+jour"
                >
                  JE CRAQUE
                </LinkBtn>
              </EtapeCol>
            </EtapeRow>
          </EtapeCol>
        </EtapeRow>
        <EtapeRow className="Etape-50ans-row2 Etape-40ans-row2">
          <EtapeCol>
            <EtapeBtn>&eacute;tape 2</EtapeBtn>
            <EtapeSubHeader>Haute Exigence Jour</EtapeSubHeader>
            <EtapeTitle>REDENSIFIER & LISSER</EtapeTitle>
            <EtapeDesc className="Etape-desc">
              Pr&eacute;vient les taches,
              <br />
              illumine le teint.
              <br />
              Complexe anti-pollution.
            </EtapeDesc>
            <LinkBtn
              title="Haute Exigence Jour"
              href="https://www.nocibe.fr/clarins-multi-intensive-creme-haute-exigence-nuit-toutes-peaux-50ml-pot-s196408"
            >
              JE REDENSIFIE
            </LinkBtn>
          </EtapeCol>
          <EtapeCol>
            <EtapeImg src="./assets/images/etape_8.png" />
          </EtapeCol>
          <EtapeCol>
            <EtapeImg src="assets/images/etape_9.png" />
            <EtapeBtn>&eacute;tape 3</EtapeBtn>
            <EtapeSubHeader>Haute Exigence Nuit</EtapeSubHeader>
            <EtapeTitle className="Etape-title">
              RAFFERMIR &amp; R&Eacute;G&Eacute;N&Eacute;RER
            </EtapeTitle>
            <EtapeDesc className="Etape-desc">
              Raffermit, r&eacute;g&eacute;n&egrave;re,
              <br />
              r&eacute;duit les rides.
            </EtapeDesc>
            <LinkBtn
              title="Haute Exigence Nuit"
              href="https://www.nocibe.fr/clarins-creme-haute-exigence-jour-multi-intensive-peaux-tres-seches-50ml-pot-s185437?q=multi+intensive+jour"
            >
              JE REFFERMIS
            </LinkBtn>
          </EtapeCol>
        </EtapeRow>
      </EtapeWrapper>
      <Banner>
        <Banner.Image
          srcDesk="./assets/images/banner_4.png"
          srcMobile="./assets/images/banner_4_mobile.png"
        />
        <Banner.Title>
          60 ans, dynamique
          <br className="break-mobile" />
          et assum&eacute;e !
        </Banner.Title>
        <Banner.Description>
          Op&eacute;ration nutrition
          <br className="break-mobile" />
          &amp; lumi&egrave;re.
        </Banner.Description>
      </Banner>
      <EtapeWrapper>
        <EtapeRow className="Etape-60ans-row1">
          <EtapeCol>
            <EtapeBtn>&eacute;tape 1</EtapeBtn>
            <EtapeSubHeader>Double Serum</EtapeSubHeader>
            <EtapeTitle className="Etape-title">
              L&rsquo;&eacute;tape incontournable
            </EtapeTitle>
            <EtapeDesc className="Etape-desc">
              Deux s&eacute;rums en un et 21 extraits de plantes
              <br />
              pour cibler tous les signes de l&rsquo;&acirc;ge
              <br />
              et raviver l&rsquo;&eacute;clat de la peau tout en lui
              <br />
              apportant hydratation et confort.
              <br />
              <strong>Son plus ?</strong>s Il renforce l&rsquo;efficacit&eacute;
              des soins
              <br />
              appliqu&eacute;s ensuite.
            </EtapeDesc>
            <LinkBtn
              title="Double Serum"
              href="https://www.kalista-parfums.com/fr/clarins-serums-boosters/clarins-double-serum-21047.html?search_query=double+serum&results=95"
            >
              Je r&eacute;g&eacute;n&egrave;re
            </LinkBtn>
          </EtapeCol>
          <EtapeCol>
            <EtapeImg src="./assets/images/etape_5.png" />
            <EtapeImg src="./assets/images/etape_2_mobile.png" />
          </EtapeCol>
        </EtapeRow>
        <EtapeRow className="Etape-60ans-row2">
          <EtapeCol>
            <EtapeBtn>&eacute;tape 2</EtapeBtn>
            <EtapeSubHeader>Nutri-Lumi&egrave;re Jour</EtapeSubHeader>
            <EtapeTitle>ILLUMINER & REVITALISER</EtapeTitle>
            <EtapeDesc>
              Nourrit, revitalise et restaure
              <br />
              la luminosit&eacute; de la peau
              <br />
              tout en l'enveloppant de confort.
              <br />
              Complexe anti-pollution.
            </EtapeDesc>
            <LinkBtn
              title="Nutri Jour"
              href="https://www.kalista-parfums.com/fr/nutri-lumiere/clarins-nutri-lumiere-jour-creme-27886.html?search_query=nutri+lumiere+jour&results=125"
            >
              JE REVITALISE
            </LinkBtn>
          </EtapeCol>
          <EtapeCol>
            <EtapeImg src="./assets/images/etape_10.png" />
          </EtapeCol>
          <EtapeCol>
            <EtapeImg src="assets/images/etape_11.png" />
            <EtapeBtn>&eacute;tape 3</EtapeBtn>
            <EtapeSubHeader>Nutri-Lumi&egrave;re Nuit</EtapeSubHeader>
            <EtapeTitle>RECONSTITUER</EtapeTitle>
            <EtapeDesc>
              Compl&eacute;ment id&eacute;al de Nutri-Lumi&egrave;re
              <br />
              Jour, pour une peau nourrie,
              <br />
              revitalis&eacute;e et lumineuse au r&eacute;veil.
            </EtapeDesc>
            <LinkBtn
              title="Reconstituer"
              href="https://www.kalista-parfums.com/fr/nutri-lumiere/clarins-nutri-lumiere-nuit-creme-27888.html?search_query=nutri+lumiere+jour&results=125"
            >
              JE RECONSTITUE
            </LinkBtn>
          </EtapeCol>
        </EtapeRow>
      </EtapeWrapper>
    </>
  );
}

export default App;
