export const navItems = ["nav.seasonal", "nav.main", "nav.drinks", "nav.desserts"] as const;

export type NavItem = (typeof navItems)[number];
export const categories = [
    "category.Starters",
    "category.Soups",
    "category.Salads",
    "category.Sides",
    "category.Mains"
] as const;
export type Category = (typeof categories)[number];
export type Dish = {
    id: string;
    photo: string | string[];
    nameKey: string;
    descriptionKey: string;
    tag?: string;
    price: number;
};

export const menuData: Record<Category, Dish[]> = {
    "category.Starters": [
        {
            id: "bruschetta",
            photo: [
                "public/assets/dish_photos/bruschetta.png",
                "public/assets/dish_photos/bruschetta.png"
            ],
            nameKey: "menu.bruschetta.name",
            descriptionKey: "menu.bruschetta.description",
            price: 5
        },
        {
            id: "garlic-bread",
            photo: ["public/assets/dish_photos/garlic-bread.png"],
            nameKey: "menu.garlicBread.name",
            descriptionKey: "menu.garlicBread.description",
            tag: "Vg",
            price: 4
        }
    ],

    "category.Soups": [
        {
            id: "tomato-soup",
            photo: ["public/assets/dish_photos/tomato-soup.png"],
            nameKey: "menu.tomatoSoup.name",
            descriptionKey: "menu.tomatoSoup.description",
            price: 6
        },
        {
            id: "mushroom-soup",
            photo: ["public/assets/dish_photos/mushroom-soup.png"],
            nameKey: "menu.mushroomSoup.name",
            descriptionKey: "menu.mushroomSoup.description",
            tag: "Vg",
            price: 6
        }
    ],

    "category.Salads": [
        {
            id: "greek-salad",
            photo: ["public/assets/dish_photos/greek-salad.png"],
            nameKey: "menu.greekSalad.name",
            descriptionKey: "menu.greekSalad.description",
            price: 7
        },
        {
            id: "caesar-salad",
            photo: ["public/assets/dish_photos/caesar-salad.png"],
            nameKey: "menu.caesarSalad.name",
            descriptionKey: "menu.caesarSalad.description",
            price: 8
        }
    ],

    "category.Sides": [
        {
            id: "fries",
            photo: ["public/assets/dish_photos/fries.png"],
            nameKey: "menu.fries.name",
            descriptionKey: "menu.fries.description",
            price: 3
        },
        {
            id: "mashed-potatoes",
            photo: ["public/assets/dish_photos/mashed-potatoes.png"],
            nameKey: "menu.mashedPotatoes.name",
            descriptionKey: "menu.mashedPotatoes.description",
            price: 3
        }
    ],

    "category.Mains": [
        {
            id: "chicken-grill",
            photo: ["public/assets/dish_photos/chicken-grill.png"],
            nameKey: "menu.chickenGrill.name",
            descriptionKey: "menu.chickenGrill.description",
            price: 12
        },
        {
            id: "beef-steak",
            photo: [
                "public/assets/dish_photos/beef-steak.png",
                "public/assets/dish_photos/beef-steak.png"
            ],
            nameKey: "menu.beefSteak.name",
            descriptionKey: "menu.beefSteak.description",
            price: 15
        }
    ]
};
