---
title: Tangle
author: Simon Erhardt
date: '2017-09-07'
---

Beim Tangle sind die neuesten Transaktionen „verantwortlich“ für die Validierung von älteren Transaktionen. Jede Tangle-Transaktion hat zwei Eltern-Transaktionen bzw. -Nodes (Parent-Nodes), welche sie validieren muss. Durch die Eltern kann man jede Transaktion zurückverfolgen bis zur so genannten Genesis-Transaktion. Die Genesis-Nodes (Mindestens zwei, „Adam und Eva“) sind die aller ersten Nodes, auf welche am Schluss JEDE Node verweisen muss. Die Tangle-Node-Liste wird dezentral und gesplittet gespeichert. Es wird nicht jede Transaktion bis zu den Genesis-Nodes zurückverfolgt, sondern nur bis zu einer bestimmten Anzahl schon validierter Nodes. Somit ist das System beliebig skalierbar, da man „immer“ nur (zum Beispiel) 100 Transaktionen zurückverfolgen muss, anstatt immer mindestens eine mehr als vorher, was bei einer Milliarde Nodes dann doch ein bisschen aufwändig wäre. Falls ein Verdacht auf Betrug besteht, kann man trotzdem jede Transaktion bis zur Genesis zurückverfolgen.