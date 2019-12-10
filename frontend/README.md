Paul Chasseloup - Baptiste Cauvin

Video Loom frontend : https://www.loom.com/share/7ba4da33bee045bfa81207cb3b386166

Nous n'avons pas pu le montrer sur la video loom, mais les 3 widgets du bas (Temperature, Humidité et airpollution) change de couleur en fonction de la valeur récuperée
Temperature à un fond bleu en dessous de 15°C et rouge au dessus
Humidité à un fond vert en dessous de 50 et rouge au dessus
Airpollution à un fond rouge au dessus de 50 et vert en dessous
# Frontend

Ce dossier contiendra la partie frontend de votre projet.

Axes d'améliorations : 
- Storybook n'a pas été bien compris et n'a donc pas été utilisé pour illustrer les différents comportements des widgets
- Petit probleme de background-color, qui ne s'affichait pas sur tout le site, malgré de nombreux essais (mettre background-color dans le fichier.css ne fonctionnais pas pour nous, alors que d'autre personnes nous avaient dit qu'elles avaient réussi comme cela)
- Utilisation des différentes requetes CRUD, nous ne faisons qu'afficher des données dans le front malgré que toutes les requêtes CRUD fonctionne dans le back, le lien entre le front et le back a été très compliqué et au final, il n'y a que l'affichage de données qui fonctionne

## Documentation

Librairies utilisées : recharts (Widget1 et Widget2) et reactstrap, pour ajouter bootstrap et avoir un site responsive
