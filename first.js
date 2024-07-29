//linking to google font

var link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
document.getElementsByTagName("head")[0].appendChild(link);

//linking to css file

var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href ="https://cdn.jsdelivr.net/gh/habibullaharafat23/https-www.ziya.se-@d13687756dad5183ac90e32ad5c922de78602ebb/style.css";
//  link.href = "style.css";
document.getElementsByTagName("head")[0].appendChild(link);

//html elements

var consentdiv = document.createElement("div");

consentdiv.innerHTML = `
<div class=consent-banner-wrapper>
  <div class=consent-content-area>
    <div class="navigation-header">
      <div class="nav-item active-nav consent">
        <h3 class="consent-headlines">Samtycke</h3>
      </div>
      <div class="nav-item details">
        <h3 class="consent-headlines">Detaljer</h3>
      </div>
      <div class="nav-item about">
        <h3 class="consent-headlines">Om Cookies</h3>
      </div>
    </div>
    


    <div class="section-container">
      <div class="section-content active-section-content" id="consentSection">
        <p class="consent-descriptions">Vi använder cookies för att anpassa innehåll och annonser, för att tillhandahålla funktioner för sociala medier och för att analysera vår trafik. Vi delar också information om din användning av vår webbplats med våra sociala medier, annonserings- och analyspartners som kan kombinera den med annan information som du har tillhandahållit dem eller som de har samlat in från din användning av deras tjänster.</p>
      </div>
      <div class="section-content" style="display:none" id="detailsSection">
        <div class="cookie-detail-wrapper necessaryCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Nödvändig</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalNecessaryCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox" checked class="inputDisable" disabled>
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Nödvändiga cookies hjälper till att göra en webbplats användbar genom att möjliggöra grundläggande funktioner som sidnavigering och åtkomst till säkra områden på webbplatsen. Webbplatsen kan inte fungera korrekt utan dessa cookies.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper preferencesCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Inställningar</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalPreferencesCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox" checked>
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Preferenscookies gör det möjligt för en webbplats att komma ihåg information som ändrar hur webbplatsen beter sig eller ser ut, till exempel ditt föredragna språk eller den region du befinner dig i.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper analyticsCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Analytics</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalAnalyticsCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Statistikkakor hjälper webbplatsägare att förstå hur besökare interagerar med webbplatser genom att samla in och rapportera information anonymt.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper marketingCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Marknadsföring</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalMarketingCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Marknadsföringscookies används för att spåra besökare till olika webbplatser. Avsikten är att visa annonser som är relevanta och engagerande för den enskilda användaren och därmed mer värdefulla för publicister och tredjepartsannonsörer.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
      </div>
      <div class="section-content" style="display:none" id="aboutSection">
        <p class="consent-descriptions">
          <span class="sec3Content" style="margin-top:15px">Kakor är små textfiler som kan användas av webbplatser för att göra en användares upplevelse mer effektiv.</span>
          <span class="sec3Content">Lagen säger att vi kan lagra cookies på din enhet om de är strikt nödvändiga för drift av denna webbplats. För alla andra typer av cookies behöver vi ditt samtycke. Detta innebär att cookies som kategoriseras som nödvändiga behandlas baserat på GDPR Artikel 6 (1) (f). Alla andra cookies, det vill säga de från kategorierna preferenser och marknadsföring, behandlas baserat på GDPR Artikel 6 (1) (a) GDPR.</span>

          <span class="sec3Content">Denna webbplats använder olika typer av cookies. Vissa cookies placeras av tredjepartstjänster som visas på våra sidor.</span>
          
        </p>
      </div>
    </div>
    


  </div>

  <div class=consent-action-footer>
    <div class=action-buttons id=consentActionButtons>
      <button action="accept" class="action-btn active" id=acceptConsentButton>ACCEPTERA</button>
      <button action="reject" class="action-btn" id="rejectConsentButton" style="display:none">REJECT</button>
      <button action="preference" class="action-btn" id="preferenceConsentButton">Preferenser</button>
    </div>
  </div>

</div>

<div class=miniConsentBanner>
  <img alt="" src=https://cdn.jsdelivr.net/gh/alifmahmudashik/marketing@marketing/consent-banner/img/cookie-icon.svg width=100%>
</div>
`;

document.body.appendChild(consentdiv);
