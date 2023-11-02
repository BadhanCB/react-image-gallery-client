export type Image = {
  _id: string;
  slNo: number;
  name: string;
  imgData: {
    img: string;
    type: string;
    size: number;
  };
};
