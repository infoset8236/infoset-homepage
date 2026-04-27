export interface TagItem {
  id: number;
  img: string;
}
export const tagData: TagItem[] = Array.from({ length: 144 }, (_, i) => ({
  id: i + 1,
  img: `/partners/logo/${i + 1}.`,
}));
