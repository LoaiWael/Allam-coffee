class Drink {
  #drinkName;
  #drinkCategory;
  #mostOrdered;
  #prices;
  #image;
  #ingredients;

  constructor(details) {
    this.#drinkName = details.drinkName;
    this.#drinkCategory = details.drinkCategory;
    this.#mostOrdered = details.mostOrdered;
    this.#prices = details.drinkCategory === 'additions' ? details.price : details.prices;
    this.#image = details.image;
    this.#ingredients = details.ingredients;
  }

  generateMostOrder() {
    if (this.getDetails().mostOrdered === true) {
      let price = '';
      for (let i = 0; i < this.getDetails().prices.length; i++) {
        price += `${this.getDetails().prices[i].price}`;
        if (this.getDetails().prices[i + 1] != undefined)
          price += ' / ';
      }
      return `<figure>
        <img src="${this.getDetails().image}" alt="${this.getDetails().drinkName}" draggable="false">
        <figcaption>${this.getDetails().drinkName}</figcaption>
        <span>${price}</span>
        </figure>`;
    }
    else {
      return '';
    }
  }

  generateFigure(category) {
    if (this.getDetails().drinkCategory === 'additions' && category === 'additions') {
      return `<figure>
                  <img loading="lazy" src="${this.getDetails().image}" alt="${this.getDetails().drinkName}" draggable="false">
                  <figcaption>${this.getDetails().drinkName}</figcaption>
                  <div class="drink-info">
                      <hr>
                      <div class="price-info">
                          <div class="col1"><span>Price:</span></div>
                          <div class="col2"><span>${this.getDetails().prices}</span></div>
                      </div>
                  </div>
              </figure>`;
    }
    else if (this.getDetails().drinkCategory === category) {
      let secondSize = '';
      let secondPrice = '';
      if (this.getDetails().prices[1]) {
        secondSize = `<span>${this.getDetails().prices[1].size}:</span>`;
        secondPrice = `<span>${this.getDetails().prices[1].price}</span>`;
      }

      return `<figure>
          <img loading="lazy" src="${this.getDetails().image}" alt="${this.getDetails().drinkName}" draggable="false">
          <figcaption>${this.getDetails().drinkName}</figcaption>
          <div class="drink-info">
              <hr>
              <div class="price-info">
                  <div class="col1"><span>${this.getDetails().prices[0].size}:</span>${secondSize}</div>
                  <div class="col2"><span>${this.getDetails().prices[0].price}</span>${secondPrice}</div>
              </div>
              <p>${this.getDetails().ingredients || 'معلومات عن المشروب مثل مكوناته'}</p>
          </div>
        </figure>`;
    }
    else {
      return '';
    }
  }

  getDetails() {
    return {
      drinkName: this.#drinkName,
      drinkCategory: this.#drinkCategory,
      mostOrdered: this.#mostOrdered,
      prices: this.#prices,
      image: this.#image,
      ingredients: this.#ingredients
    };
  }
}

export default [
  {
    "drinkName": "كابتشينو",
    "drinkCategory": "hot-drinks",
    "mostOrdered": true,
    "prices": [
      {
        "size": "MD",
        "price": 49
      },
      {
        "size": "L",
        "price": 65
      }
    ],
    "image": "./Menu photos/cappuccino.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "موكــا",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/mocha.jpg",
    "ingredients": null
  },
  {
    "drinkName": "لاتــيــه",
    "drinkCategory": "hot-drinks",
    "mostOrdered": true,
    "prices": [
      {
        "size": "MD",
        "price": 49
      },
      {
        "size": "L",
        "price": 55
      }
    ],
    "image": "./Menu photos/latee.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "لوتس لاتيــه",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 65
      },
      {
        "size": "L",
        "price": 79
      }
    ],
    "image": "./Menu photos/lotus latte.jpg",
    "ingredients": null
  },
  {
    "drinkName": "أمريكانــو",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 45
      },
      {
        "size": "L",
        "price": 50
      }
    ],
    "image": "./Menu photos/amricano.jpg",
    "ingredients": null
  },
  {
    "drinkName": "وايت موكــــا",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/white-mocha.jpg",
    "ingredients": null
  },
  {
    "drinkName": "كراميل ميكاتو",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/Caramel-macchiato-4.jpg",
    "ingredients": null
  },
  {
    "drinkName": "فـــلات وايت",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/flat white.jpg",
    "ingredients": null
  },
  {
    "drinkName": "إسبانش لاتيــه",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/spanish latte.jpg",
    "ingredients": null
  },
  {
    "drinkName": "سولتد كراميل لاتيــه",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/salted caramel latte.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "هوت شوكليــت",
    "drinkCategory": "hot-drinks",
    "mostOrdered": true,
    "prices": [
      {
        "size": "MD",
        "price": 45
      },
      {
        "size": "L",
        "price": 55
      }
    ],
    "image": "./Menu photos/hot chocolate.png",
    "ingredients": null
  },
  {
    "drinkName": "هوت شوكليــت لوتس",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 70
      },
      {
        "size": "L",
        "price": 79
      }
    ],
    "image": "./Menu photos/hot chocolate lotus.jpg",
    "ingredients": null
  },
  {
    "drinkName": "هوت سيـــدر",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 39
      },
      {
        "size": "L",
        "price": 45
      }
    ],
    "image": "./Menu photos/هوت سيدر.jpg",
    "ingredients": null
  },
  {
    "drinkName": "شــــاي",
    "drinkCategory": "hot-drinks",
    "mostOrdered": true,
    "prices": [
      {
        "size": "MD",
        "price": 20
      }
    ],
    "image": "./Menu photos/tea.jpg",
    "ingredients": null
  },
  {
    "drinkName": "شــــاي فليفر",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 25
      }
    ],
    "image": "./Menu photos/flavor tea.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "أعشـــاب",
    "drinkCategory": "hot-drinks",
    "mostOrdered": true,
    "prices": [
      {
        "size": "MD",
        "price": 25
      }
    ],
    "image": "./Menu photos/اعشاب.jpg",
    "ingredients": null
  },
  {
    "drinkName": "إسبــريسو",
    "drinkCategory": "hot-drinks",
    "mostOrdered": true,
    "prices": [
      {
        "size": "S",
        "price": 33
      },
      {
        "size": "D",
        "price": 38
      }
    ],
    "image": "./Menu photos/Espreso.jpg",
    "ingredients": null
  },
  {
    "drinkName": "إسبــريسو علام",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "S",
        "price": 40
      },
      {
        "size": "D",
        "price": 50
      }
    ],
    "image": "./Menu photos/espresso allam.jpg",
    "ingredients": null
  },
  {
    "drinkName": "إسبـــريسو كون بانا",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "S",
        "price": 0
      },
      {
        "size": "D",
        "price": 0
      }
    ],
    "image": "./Menu photos/espresso con pana.jpg",
    "ingredients": null
  },
  {
    "drinkName": "رستــريتــو",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "S",
        "price": 33
      },
      {
        "size": "D",
        "price": 38
      }
    ],
    "image": "./Menu photos/Ristretto-in-a-glass.jpg",
    "ingredients": null
  },
  {
    "drinkName": "ميكـــاتــو",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "S",
        "price": 35
      },
      {
        "size": "D",
        "price": 40
      }
    ],
    "image": "./Menu photos/ميكاتو.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "تركي ســادة",
    "drinkCategory": "hot-drinks",
    "mostOrdered": true,
    "prices": [
      {
        "size": "S",
        "price": 25
      },
      {
        "size": "D",
        "price": 35
      }
    ],
    "image": "./Menu photos/turkish coffee.jpg",
    "ingredients": null
  },
  {
    "drinkName": "تركي محــوج",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "S",
        "price": 25
      },
      {
        "size": "D",
        "price": 40
      }
    ],
    "image": "./Menu photos/تركي محوج.jpg",
    "ingredients": null
  },
  {
    "drinkName": "تركي سينجل اورجين",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "S",
        "price": 30
      },
      {
        "size": "D",
        "price": 35
      }
    ],
    "image": "./Menu photos/تركي سينجل اورجين.jpg",
    "ingredients": null
  },
  {
    "drinkName": "فرنساوي كلاسيك",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "S",
        "price": 40
      }
    ],
    "image": "./Menu photos/French-coffee.jpg",
    "ingredients": null
  },
  {
    "drinkName": "فرنساوي فليـــفر",
    "drinkCategory": "hot-drinks",
    "mostOrdered": false,
    "prices": [
      {
        "size": "S",
        "price": 40
      }
    ],
    "image": "./Menu photos/french flavor.png",
    "ingredients": "بندق - كراميل - شوكولاتة - توت"
  },
  {
    "drinkName": "سموزي خــوخ",
    "drinkCategory": "smoothie",
    "mostOrdered": true,
    "prices": [
      {
        "size": "MD",
        "price": 45
      },
      {
        "size": "L",
        "price": 55
      }
    ],
    "image": "./Menu photos/smoothie peach.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "سموزي مانــجو",
    "drinkCategory": "smoothie",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 45
      },
      {
        "size": "L",
        "price": 55
      }
    ],
    "image": "./Menu photos/mango-smoothie.jpg",
    "ingredients": null
  },
  {
    "drinkName": "سموزي توت أزرق",
    "drinkCategory": "smoothie",
    "mostOrdered": true,
    "prices": [
      {
        "size": "MD",
        "price": 45
      },
      {
        "size": "L",
        "price": 55
      }
    ],
    "image": "./Menu photos/Blueberry-Smoothie.jpg",
    "ingredients": null
  },
  {
    "drinkName": "سموزي ليمون نعناع",
    "drinkCategory": "smoothie",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 45
      },
      {
        "size": "L",
        "price": 55
      }
    ],
    "image": "./Menu photos/smoothie minit lemonade.jpg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه شوكليــت",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 49
      },
      {
        "size": "L",
        "price": 59
      }
    ],
    "image": "./Menu photos/frappe chocolate.jpg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه وايت شوكليت",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 49
      },
      {
        "size": "L",
        "price": 59
      }
    ],
    "image": "./Menu photos/frappe white chocolate.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه نوتيــلا",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 59
      },
      {
        "size": "L",
        "price": 75
      }
    ],
    "image": "./Menu photos/frappe nutella.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه فراولة",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 49
      },
      {
        "size": "L",
        "price": 59
      }
    ],
    "image": "./Menu photos/frappe strawberry.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه خــوخ",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 49
      },
      {
        "size": "L",
        "price": 59
      }
    ],
    "image": "./Menu photos/frappe peach.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه توت أزرق",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 49
      },
      {
        "size": "L",
        "price": 59
      }
    ],
    "image": "./Menu photos/frappe blueberry.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه لــوتس",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 65
      },
      {
        "size": "L",
        "price": 79
      }
    ],
    "image": "./Menu photos/frappe lotus.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه أوريو",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 65
      }
    ],
    "image": "./Menu photos/frappe oreo.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه بنــدق",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 49
      },
      {
        "size": "L",
        "price": 59
      }
    ],
    "image": "./Menu photos/frappe nuts.jpg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه كراميل",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 49
      },
      {
        "size": "L",
        "price": 59
      }
    ],
    "image": "./Menu photos/frappe caramel.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه سولتيد كراميل",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 65
      }
    ],
    "image": "./Menu photos/frappe salted caramel.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه كوفي كراميل",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 59
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/frappe coffee caramel.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه قهــوة",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 65
      }
    ],
    "image": "./Menu photos/frappe coffee.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه موكــا",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 65
      }
    ],
    "image": "./Menu photos/frappe mocha.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه وايت موكا",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 65
      }
    ],
    "image": "./Menu photos/frappe white moca.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه فانيليـا",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 49
      },
      {
        "size": "L",
        "price": 59
      }
    ],
    "image": "./Menu photos/frappe vanilla.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه كوفي بندق",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 65
      }
    ],
    "image": "./Menu photos/frappe nuts.jpg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه كـوكـونت",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 49
      },
      {
        "size": "L",
        "price": 59
      }
    ],
    "image": "./Menu photos/frappe coconut.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فرابيه كوفي كوكونت",
    "drinkCategory": "frappe",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 65
      }
    ],
    "image": "./Menu photos/frappe coffee coconut.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "موخيتو ليمون نعناع",
    "drinkCategory": "mojito",
    "mostOrdered": false,
    "prices": [
      {
        "size": "L",
        "price": 49
      }
    ],
    "image": "./Menu photos/lemon mint mojito.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "موخيتو بلو ليمون",
    "drinkCategory": "mojito",
    "mostOrdered": false,
    "prices": [
      {
        "size": "L",
        "price": 49
      }
    ],
    "image": "./Menu photos/blue-mojito.jpg",
    "ingredients": null
  },
  {
    "drinkName": "موخيتو رمــان",
    "drinkCategory": "mojito",
    "mostOrdered": false,
    "prices": [
      {
        "size": "L",
        "price": 49
      }
    ],
    "image": "./Menu photos/Pomegranate-Mojito-4.jpg",
    "ingredients": null
  },
  {
    "drinkName": "موخيتو توت أزرق",
    "drinkCategory": "mojito",
    "mostOrdered": false,
    "prices": [
      {
        "size": "L",
        "price": 49
      }
    ],
    "image": "./Menu photos/Blueberry mojito.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "موخيتو ريدبــول",
    "drinkCategory": "mojito",
    "mostOrdered": false,
    "prices": [
      {
        "size": "L",
        "price": 79
      }
    ],
    "image": "./Menu photos/redbull mojito.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "أيس كابتشينو",
    "drinkCategory": "ice-coffee",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 49
      },
      {
        "size": "L",
        "price": 65
      }
    ],
    "image": "./Menu photos/ice cappuccino.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "أيس لاتيـــه",
    "drinkCategory": "ice-coffee",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 49
      },
      {
        "size": "L",
        "price": 65
      }
    ],
    "image": "./Menu photos/ice latte.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "أيس موكــــا",
    "drinkCategory": "ice-coffee",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/ice mocha.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "أيس كراميل ميكاتو",
    "drinkCategory": "ice-coffee",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/ice caramel macchiato.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "أيس اسبانيش لاتيــه",
    "drinkCategory": "ice-coffee",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/ice spanish latte.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "أيس أمريكانــو",
    "drinkCategory": "ice-coffee",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 45
      },
      {
        "size": "L",
        "price": 55
      }
    ],
    "image": "./Menu photos/Iced Americano.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "سولتد كراميل لاتيــه",
    "drinkCategory": "ice-coffee",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/ice salted caramel latte.jpg",
    "ingredients": null
  },
  {
    "drinkName": "أيس فــلات وايت",
    "drinkCategory": "ice-coffee",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/ice flat white.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "أيس كـــوفي بندق",
    "drinkCategory": "ice-coffee",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 59
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/ice coffee nuts.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "أيس كـــوفي علام",
    "drinkCategory": "ice-coffee",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 59
      },
      {
        "size": "L",
        "price": 69
      }
    ],
    "image": "./Menu photos/ice coffee allam.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "أيس وايت موكا",
    "drinkCategory": "ice-coffee",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 55
      },
      {
        "size": "L",
        "price": 63
      }
    ],
    "image": "./Menu photos/ice white moca.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "أيس شوكـــليت",
    "drinkCategory": "ice-coffee",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 45
      },
      {
        "size": "L",
        "price": 55
      }
    ],
    "image": "./Menu photos/ice chocolate.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "أيس وايت شوكليت",
    "drinkCategory": "ice-coffee",
    "mostOrdered": false,
    "prices": [
      {
        "size": "MD",
        "price": 45
      },
      {
        "size": "L",
        "price": 55
      }
    ],
    "image": "./Menu photos/ice white chocolate.jpeg",
    "ingredients": null
  },
  {
    "drinkName": "فـــليفر",
    "drinkCategory": "additions",
    "mostOrdered": false,
    "price": 10,
    "image": "./Menu photos/flavors.jpg"
  },
  {
    "drinkName": "صـــوص",
    "drinkCategory": "additions",
    "mostOrdered": false,
    "price": 10,
    "image": "./Menu photos/sause.jpg"
  },
  {
    "drinkName": "لـــبن",
    "drinkCategory": "additions",
    "mostOrdered": false,
    "price": 10,
    "image": "./Menu photos/milk.jpg"
  },
  {
    "drinkName": "إســـبريسو",
    "drinkCategory": "additions",
    "mostOrdered": false,
    "price": 10,
    "image": "./Menu photos/espresso allam.jpg"
  },
  {
    "drinkName": "لــوتس",
    "drinkCategory": "additions",
    "mostOrdered": false,
    "price": 15,
    "image": "./Menu photos/lotus sauce.jpg"
  },
  {
    "drinkName": "لـــبن مكثف",
    "drinkCategory": "additions",
    "mostOrdered": false,
    "price": 15,
    "image": "./Menu photos/heavy cream milk.jpeg"
  },
  {
    "drinkName": "ميــاة صغيرة",
    "drinkCategory": "additions",
    "mostOrdered": false,
    "price": 8,
    "image": "./Menu photos/water.jpeg"
  },
  {
    "drinkName": "ميــاة غازية",
    "drinkCategory": "additions",
    "mostOrdered": false,
    "price": null,
    "image": "./Menu photos/مياة غازية.jpeg"
  }
].map(drink => new Drink(drink));