// Clase licencia.
function licenciaGPL(iconoGPLv3) {
 this.iconoGPLv3 = iconoGPLv3;

 this.mostrar = function() { // Mostrar licencia.
  var texto = new Array();
  texto[0] = 'Copyright 2012 Sergio Lindo';
  texto[1] = '';
  texto[2] = 'Sobrevivir is free software: you can redistribute it and/or modify';
  texto[3] = 'it under the terms of the GNU General Public License as published by';
  texto[4] = 'the Free Software Foundation, either version 3 of the License, or';
  texto[5] = '(at your option) any later version.';
  texto[6] = '';
  texto[7] = 'Sobrevivir is distributed in the hope that it will be useful,';
  texto[8] = 'but WITHOUT ANY WARRANTY; without even the implied warranty of';
  texto[9] = 'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the';
  texto[10] = 'GNU General Public License for more details.';
  texto[11] = '';
  texto[12] = 'You should have received a copy of the GNU General Public License';
  texto[13] = 'along with Sobrevivir.  If not, see <http://www.gnu.org/licenses/>.';
  texto[14] = '';

  screen.fillStyle = '#FFFFFF';
  screen.fillRect(0, 0, gameScreen.width, gameScreen.height);

  screen.font = "normal 14px verdana";
  screen.fillStyle = '#000000';
  screen.textBaseline = 'top';

  screen.drawImage(this.iconoGPLv3, 200, 2);
  var i;
  for(i = 0; i < texto.length; i++) {
   screen.fillText(texto[i], 200, 60+i*20);
  }

  screen.fillStyle = '#000099'; 
  screen.fillText('Pulsa una tecla para continuar.', 200, 60+i*20);
 };
}

