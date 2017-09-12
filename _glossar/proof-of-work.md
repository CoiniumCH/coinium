---
title: Proof-of-Work
author: Simon Erhardt
date: '2017-09-12'
---
Unter Proof-of-Work (zu deutsch Arbeitsbestätigung), kurz PoW, versteht man eine Technik der Informatik, welche den übermässigen Gebrauch eines Dienstes (Denial-of-Service) verhindern soll.

Dies geschieht dadurch, der Nutzer zuerst eine mässig schwere (Mathematik-)Aufgabe lösen muss, deren Ergebnis vom Zielsystem einfach überprüft werden kann. Somit muss der Nutzer zuerst eigene Rechenleistung aufwenden, bevor er Rechenleistung auf dem Zielsystem verbrauchen kann. Da für jedes Anfrage ein neues Rätsel gelöst werden muss, ist das Spamming eines Dienstes so sehr teuer.

Da das Zielsystem nicht unnötig belastet werden soll, muss die Lösung einfach überprüfbar, aber schwer zu finden sein. Dazu eignen sich unteranderem:
 * das Lösen von Differentialgleichungen,
 * Brute-Force-Angriffe auf abgeschwächte kryptographische Primitiven,
 * Operationen auf grossen, dicht besetzten Matrizen, wie das Lösen linearer Gleichungssysteme oder Invertieren.

## Geschichte
Der Proof-of-Work wurde erstmals von Cynthia Dwork und Moni Naor vorgeschlagen. Sie wollten Proof-of-Work einsetzen, um den Versand von Spam-Emails zu verhindern.

Die Idee ist, dass man zuerst ein Rätsel lösen muss, bevor man eine E-Mail einliefern kann. Das verzögert das Einliefern eine E-Mail zwar nur ein kleines bisschen. Aber der Massenversand wird aber zuverlässig verhindert, da hierfür viel Rechenleistung eingesetzt werden muss.

## Varianten

**Protokolle**:

 * Challenge-Response: Der Nutzer bekommt vom Server eine Aufgabe (Challenge), löst sie und schickt sie zurück (Response). Der Server überprüft sie und erlaubt den Zugriff bei Richtigkeit.
 * Lösungsverifikation: Das Problem ist selbsterklärend und omnipräsent. Der Nutzer kann es so direkt lösen und an den Server senden.
 
**Typen von Aufgaben**:

 * Rechenleistungs-basiert: Diese Aufgaben benötigen eine sehr hohe Rechenleistung und können mit mehr Rechenleistung schneller gelöst werden. (Beispiel: Bitcoin)
 * Speicher-basiert: Diese Aufgabe benötigen eine grosse Menge Speicher um gelöst zu werden. Je nach Aufgabe spielt auch die Speicherbandbreite und Latenz eine Rolle (Cache-misses).
 * Netzwerk-basiert: Der Nutzer muss zuerst viele Netzwerkknoten erreichen bevor er eine Anfrage stellen darf.
 
## Verwendung bei Bitcoin
Bei Bitcoin wird Proof-of-Work verwendet um den nächsten Block zu finden. Der Nutzer muss einen Hash zu einer gegebenen Zeichenkette finden, der mit einer gewisse Anzahl Nullen beginnt. Er darf dabei nur eine Zahl, die "Nonce" verändern. Mit der Anzahl benötigter Null-Bits im Hash kann die Schwierigkeit des Rätsels angepasst werden, was bei Bitcoin ca. alle 2 Wochen passiert.
 
