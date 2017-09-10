---
title: Wallet
author: Simon Erhardt
date: '2017-09-07'
---

Die Wallet ist vergleichbar mit einem Bankkonto. Es ist der Ort, wo die Guthaben deiner Cryptocurrency liegen.

Genauer gesagt, liegen dort die privaten Schlüssel deiner Cryptocurrency. Deshalb ist es auch sehr wichtig, dass keine Unbefugten Zugriff auf deine Wallet bekommen.

## Typen von Wallets

### Full Node
Ein Full-Node speichert, neben deinen Transaktionen, auch alle anderen Transaktionen einer Block-Chain. Er ist in der Lage zweifelsfrei zu verifizieren, ob eine Transaktion stattgefunden hat oder nicht. Mit manchen Full-Nodes ist es möglich, auch die jeweilige Währung zu minen und so die Blockchain zu unterstützen. Dafür muss allerdings die komplette Block-Chain heruntergeladen werden.

**Vorteile:**

 * Alle Transaktionen können verifiziert werden.
 * Je nach Client, Mining direkt integriert.

**Nachteile:**

 * Grosser Speicherbedarf (mehrere 10GB). Komplette Blockchain muss heruntergeladen werden.


### Light Node/Light-Wallet
Ein Light-Node speichert nur seine eigenen Transaktionen. Auch diese verifiziert er nur begrenzt und setzt dazu auf Peers. Diese Peers kennen die komplette Block-Chain und übernehmen die Verifizierung-Arbeit für den Light-Node. Da die Light-Nodes ein Bruchteil des Speichers eines Full-Nodes benötigen, sind sie sehr komfortabel und werden oft eingesetzt.

**Vorteile:**

 * Wenig Speicherbedarf
 * Schnell eingerichtet

**Nachteile:**

 * Abhängigkeit zu anderen Systemen.


### Paperwallet
Bei einer Paperwallet merkt man sich nur den privaten Schlüssel seiner Wallet und die dazugehörige Adresse. Diese zwei Dinge druckt man auf Papier. Da der private Schlüssel offline erzeugt werden kann, ist dieses Verfahren sehr sicher vor Hackern. Die Benutzung eines Paperwallets ist aber umständlich, da der Key zuerst in einen Computer einzugeben ist, bevor man eine Transaktion tätigen kann.

**Vorteile:**

 * Sehr sicher. Kann nicht gehackt werden.

**Nachteile:**

 * Umständlich zu benutzen.
 * Wasser oder andere Umwelteinflüsse können das Wallet zerstören.