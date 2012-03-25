/*

Copyright 2012 Sergio Lindo
This file is part of Sobrevivir.

Sobrevivir is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Sobrevivir is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Sobrevivir.  If not, see <http://www.gnu.org/licenses/>.

*/

// Variables globales.
var gameScreen = document.getElementById('gameScreen'); gameScreen.width = 1005; gameScreen.height = 500;
var screen = gameScreen.getContext('2d');

var fps = 60;

var keyboard = new KeyboardListener(); // gadgets.js
var cargando = new BarraProgeso("#FFFFFF"); // gadgets.js

cargando.x = 100;
cargando.y = 100;
cargando.valor = 100;
cargando.actualizar();
