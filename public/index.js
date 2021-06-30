const socialLine = Vue.component("social-line", {
  props: ["src", "alt"],
  template: '<img :src="src" alt="items.alt" class="w-5 h-5 mr-2" />',
  data: function () {
    return {
      nav: 0,
    };
  },
});

new Vue({
  el: "#app",
  components: {},
  data: {
    nav: [
      {
        src: "https://img.icons8.com/ios-glyphs/30/000000/facebook-f.png",
        alt: "facebook",
        link: "https://facebook.com",
      },
      {
        src: "https://img.icons8.com/ios-glyphs/30/000000/twitter.png",
        alt: "twitter",
        link: "https://twitter.com",
      },
      {
        src: "https://img.icons8.com/ios-glyphs/30/000000/linkedin-2.png",
        alt: "linkedin",
        link: "https://linkedin.com",
      },
      {
        src: "https://img.icons8.com/material-sharp/30/000000/pinterest.png",
        alt: "pinterest",
        link: "https://pinterest.com",
      },
    ],
    dropdown: [
      "Fresh Meat",
      "Vegetable",
      "Fruit & Nut Gifts",
      "Fresh Berries",
      "Ocean Foods",
      "Butter & Eggs",
      "Fastfood",
      "Fresh Onion",
      "Papayaya & Crisps",
      "Oatmeal",
      "Fresh Bananas",
    ],
    depClick: true,
    products: [
      {
        link: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Burger",
        alt: "some alt",
      },
      {
        link: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: "Shawarma",
        alt: "some alt",
      },
      {
        link: "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Caesar Salad",
        alt: "some alt",
      },
      {
        link: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Pancakes",
        alt: "some alt",
      },
    ],
    feature: [
      'All',
      'Oranges',
      'Fresh Meat',
      'Vegetable',
      'Fast Food'
    ],
    featProducts:  [
      {
        link: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Burger",
        alt: "some alt",
        price: 150,
      },
      {
        link: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: "Shawarma",
        alt: "some alt",
        price: 75,
      },
      {
        link: "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Caesar Salad",
        alt: "some alt",
        price: 150,
      },
      {
        link: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Pancakes",
        alt: "some alt",
        price: 75,
      },
      {
        link: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Burger",
        alt: "some alt",
        price: 150,
      },
      {
        link: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: "Shawarma",
        alt: "some alt",
        price: 75,
      },
      {
        link: "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Caesar Salad",
        alt: "some alt",
        price: 150,
      },
      {
        link: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Pancakes",
        alt: "some alt",
        price: 75,
      },
    ],
    feature: [
      'All',
      'Oranges',
      'Fresh Meat',
      'Vegetable',
      'Fast Food'
    ]
  },

  methods: {
    handleDepClick: function () {
      this.depClick = !this.depClick;
    },
    handleClick: function () {
      alert("why you do dis?")
    }
  },
});
