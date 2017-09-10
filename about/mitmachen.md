---
title: Mitmachen
---

<a rel="nofollow" href="https://github.com/CoiniumCH/coinium"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"></a>

# Mitmachen

Coinium ist ein Open-Source Projekt und wir freuen uns jederzeit über Pull-Requests. Sämtlicher Code, der zum Erstellen dieser Webseite notwendig ist, kann auf [Github](https://github.com/CoiniumCH/coinium) gefunden werden. 

Wenn du bei diesem Projekt mitmachst, erklärst du dich damit einverstanden, dass deine Arbeit unter die **Creative Commons 4.0 Attribution Share-Alike International** gestellt wird. Arbeit, welche dieser Lizenz nicht genügt können wir leider nicht annehmen.

## Lizenz

Dieses Projekt verwendet die **Creative Commons 4.0 Attribution Share-Alike International**-Lizenz. 

[Weitere Informationen](/about/)

## Entwicklerdokumentation

Dieses Projekt verwendet [Jekyll](http://jekyllrb.com) zum Erstellen statischer Webseiten. Dort findest sich auch eine gute Dokumentation.
 
Sämtliche Änderungen werden automatisch von [Travis CI](https://travis-ci.org) gebaut und je nach Branch direkt ausgerollt.

### Vorraussetzung/Abhängigkeiten
 * Ruby 2.3
 * Nodejs 6 und NPM
 * Gulp (npm install -g gulp)

### Vorbereitung Entwicklungsumgebung
 * `npm install # NodeJS Abhängigkeiten installieren`
 * `bundle install # Ruby Abhängikeiten installieren`
 * `gulp watch # JavaScript und Styles builden`
 * `bundle exec jekyll serve # Jekyll Server starten`
 * Browser öffnen und nach [localhost:4000](http://localhost:4000) navigieren
 
### Komponenten

Diese Webseite benutzt diverse Komponenten und Frameworks:

 * [jQuery](http://jquery.com) 2
 * [Popper.js](https://popper.js.org) 1
 * Twitter [Bootstrap](http://getbootstrap.com) 4

### Besondere Verzeichnisse
 * **img**: Hier werden Bilder abgelegt.
 * **_waehrung**: In diesem Verzeichnisse werden neue Währungen angelegt.
 * **_glossar**: Hier können Glossareinträge abgelegt werden.
 * **_posts**: Hier kommen Blogposts hin, bitte beachte das Dateiformat.
 
### Besondere Templates
 * **_includes/nav.html**: Hauptnavigation
 * **_includes/wiki_nav.html**: Hier liegt die Wiki-Navigation.
 * **_layouts/wiki_entry.html**: Darstellung eines Wiki-Artikels.
 * **_layouts/waehrung.html**: Darstellung einer Währungsseite.
 
### Blogpost erstellen

 1. [Repository forken](https://github.com/CoiniumCH/coinium/fork)
 2. Im Fork eine neue Datei erstellen: '_posts/JJJJ-MM-DD-titel.md' (z.B. 2017-09-07-geruechte-tether-nicht-gedeckt)
 3. Den Inhalt von 'vorlagen/blogpost.md' in diese Datei kopieren und Inhalte ersetzen.
 4. Wenn ihr fertig seid, dürft ihr nun einen Pull-Request gegen "CoiniumCH/coinium:master" oder "CoiniumCH/coinium:develop" (Wenn ihr euch nicht sicher seit.) machen.
 5. Wir schauen uns den Pull-Request schnellst möglich an und integrieren ihn in den master-Branch und schalten ihn somit online.