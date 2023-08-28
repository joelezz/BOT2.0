# BOT2.0

KASWU Chatbot-ohjelman Dokumentaatio

Tämä dokumentaatio kuvaa chatbot-ohjelmaa, joka on toteutettu Pythonin Flask-webkehystä ja OpenAI GPT-3.5-Turbo -mallia hyödyntäen. Chatbot tarjoaa käyttäjille mahdollisuuden viestiä tekoälybotin kanssa ja saada vastauksia erilaisiin kysymyksiin tai viesteihin. Ohjelma toimii yhteistyössä OpenAI:n API:n kanssa ja mahdollistaa vuorovaikutuksen botin kanssa web-käyttöliittymän kautta.
Teknologiat ja Riippuvuudet

    Flask: Kehys, joka mahdollistaa web-sovelluksen luomisen ja hallinnan.
    Flask-CORS: Lisäosa, joka sallii ristiriippuvuuden käsittelemisen Flask-sovelluksessa.
    OpenAI API: Käytetään tekoälyvastauksien generointiin.
    dotenv: Käytetään ympäristömuuttujien hallintaan.
    uuid: Pythonin kirjasto UUID:n generoimiseen.
    HTML, CSS ja JavaScript: Käytetään käyttöliittymän luomiseen ja interaktiivisuuden toteuttamiseen.

Sovelluksen Rakenne

Ohjelman rakenne voidaan jakaa seuraaviin osiin:

    Backend:
        app.py: Tämä tiedosto sisältää Flask-sovelluksen määrittelyn ja reitit.
        .env: Ympäristömuuttujat tallennetaan tähän tiedostoon.
        data.json: Tiedosto, johon tallennetaan käyttäjien vastaukset.

    Frontend:
        static/: Kansio sisältää staattiset tiedostot, kuten kuvat ja CSS.
        templates/: Kansio sisältää HTML-templatet, jotka muodostavat käyttöliittymän.

    Käyttöliittymä:
        Käyttöliittymä on toteutettu HTML-, CSS- ja JavaScript-tekniikoilla.
        Chatbox tarjoaa käyttäjälle mahdollisuuden viestiä botin kanssa.
        Käyttäjän syöte lähetetään POST-pyynnöllä Flask-sovellukselle.

    Backend-logiikka:
        app.py sisältää Python-koodin, joka käsittelee käyttäjän syötettä.
        Käyttäjän syöte lähetetään OpenAI API:lle, ja botin vastaus palautetaan käyttäjälle.

Asennus ja Käynnistys

    Asenna tarvittavat riippuvuudet suorittamalla komento pip install -r requirements.txt.

    Luo .env-tiedosto ja aseta ympäristömuuttujat GOOGLE_FORMS ja OPENAI_API_KEY.

    Käynnistä sovellus komennolla python app.py.

    Avaa selain ja siirry osoitteeseen http://127.0.0.1:5000/.

Käyttö

    Avaa selain ja siirry osoitteeseen http://127.0.0.1:5000/.
    Chatbox aukeaa oikeassa alakulmassa.
    Kirjoita viesti chatboxiin ja lähetä se painamalla "Send" -painiketta tai Enter-näppäintä.
    Botin vastaus näkyy chatboxissa.

Tekninen Tuki

Jos kohtaat ongelmia ohjelman asentamisessa tai käytössä, ota yhteyttä tekniseen tukeen sähköpostitse osoitteeseen support@example.com.
Yhteenveto

Tämä dokumentaatio antaa yleiskuvan chatbot-ohjelman toiminnasta, rakenteesta ja asennuksesta. Seuraamalla ohjeita voit asentaa ohjelman ja käyttää sitä vuorovaikutukseen tekoälybotin kanssa. Ohjelma tarjoaa helppokäyttöisen käyttöliittymän,
