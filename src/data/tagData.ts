export interface TagItem {
  id: number;
  img: string;
}
export const tagData: TagItem[] = Array.from({ length: 144 }, (_, i) => ({
  id: i + 1,
  img: `/src/assets/images/partners/logo/${i + 1}.png`,
}));
