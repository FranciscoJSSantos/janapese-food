import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MenuItemComponent } from '../../dialogs/menu-item/menu-item.component';

const foodList = [
  {
    name: 'Rolinho de Queijo',
    img: 'assets/entradas/rolinho_queijo.png',
    description:
      'Crocante por fora, derretido por dentro: Um irresistível rolinho crocante, recheado com queijo derretido que faz cada mordida valer a pena.',
    value: 4.5,
    type: 'japanese',
  },
  {
    name: 'Guioza de Porco',
    img: 'assets/entradas/guioza_porco.png',
    description:
      'Deliciosos pasteizinhos grelhados com recheio de carne de porco temperada, envoltos em uma massa fina e delicada.',
    value: 6.0,
    type: 'chinese',
  },
  {
    name: 'Harumaki de Legumes',
    img: 'assets/entradas/harumaki_legumes.png',
    description:
      'Tradicional rolinho primavera recheado com uma combinação fresca e crocante de legumes salteados.',
    value: 5.0,
    type: 'chinese',
  },
  {
    name: 'Camarão Empanado',
    img: 'assets/entradas/camarao_empanado.png',
    description:
      'Camarões suculentos empanados em uma crocante camada dourada, servidos com molho agridoce.',
    value: 8.5,
    type: 'japanese',
  },

  {
    name: 'Yakisoba',
    img: 'assets/entradas/yakisoba.png',
    description:
      'Um saboroso yakisoba, feito com ingredientes frescos e saborosos, com uma textura crocante e uma sensação de sabor delicioso.',
    value: 7.5,
    type: 'japanese',
  },
  {
    name: 'Suco de Melancia',
    img: 'assets/entradas/suco_melancia.png',
    description:
      'Suco natural de melancia, perfeito para um dia quente, com sua refrescância e doçura equilibrada.',
    value: 5.5,
    type: 'drinks',
  },

  {
    name: 'Refrigerante',
    img: 'assets/entradas/refrigerante.png',
    description:
      'Clássico e refrescante, o refrigerante gelado é a escolha perfeita para acompanhar qualquer refeição.',
    value: 3.0,
    type: 'drinks',
  },
  {
    name: 'Suco de Morango',
    img: 'assets/entradas/suco_morango.png',
    description:
      'Um suco doce e refrescante feito com morangos frescos, perfeito para qualquer ocasião.',
    value: 5.0,
    type: 'drinks',
  },
];

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @ViewChild('carousel') carousel!: ElementRef;
  dialog = inject(MatDialog);

  isDown = false;
  startX!: number;
  scrollLeft!: number;

  cardapioList = [
    {
      name: 'Comida Chinesa',
      img: '/assets/menu/bandeira_china.png',
      type: 'chinese',
    },
    {
      name: 'Comida Japonesa',
      img: '/assets/menu/bandeira_japao.png',
      type: 'japanese',
    },
    {
      name: 'Bebidas',
      img: '/assets/menu/bebidas.png',
      type: 'drinks',
    },
  ];

  foodList = foodList;
  filteredFoodList = [...this.foodList];
  checkFilter(type: string) {
    this.filteredFoodList = this.foodList.filter((food) => food.type === type);
  }
  selectedIndex: number | null = null;

  toggleSelection(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
    if (this.selectedIndex === null) this.filteredFoodList = [...this.foodList];
  }

  onMouseDown(event: MouseEvent) {
    this.isDown = true;
    this.startX = event.pageX - this.carousel.nativeElement.offsetLeft;
    this.scrollLeft = this.carousel.nativeElement.scrollLeft;
  }

  onMouseLeave() {
    this.isDown = false;
  }

  onMouseUp() {
    this.isDown = false;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDown) return;
    event.preventDefault();
    const x = event.pageX - this.carousel.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2; // Ajusta a velocidade do scroll
    this.carousel.nativeElement.scrollLeft = this.scrollLeft - walk;
  }
  openDialog(data: any): void {
    this.dialog.open(MenuItemComponent, {
      data,
    });
  }
}
