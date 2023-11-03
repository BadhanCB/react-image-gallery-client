export type Image = {
  _id: string;
  id: number;
  name: string;
  imgData: {
    img: string;
    type: string;
    size: number;
  };
};
