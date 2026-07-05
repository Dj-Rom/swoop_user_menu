export function normalizeAssetPath(path: string): string {
    const cleaned = path.replace(/^\/?public\//, "");
    return `${import.meta.env.BASE_URL}${cleaned}`;
}
const cache = new Set<string>();

export function preloadImages(images: string[]) {
    images.forEach((src) => {
        if (cache.has(src)) return;

        cache.add(src);
        const img = new Image();
        img.src = src;
    });
}
export function getAllImages(menuData: Record<string, any>) {
    const images: string[] = [];

    Object.values(menuData).forEach((category) => {
        category.forEach((dish: any) => {
            if (Array.isArray(dish.photo)) {
                images.push(...dish.photo);
            } else if (dish.photo) {
                images.push(dish.photo);
            }
        });
    });

    return images;
}
