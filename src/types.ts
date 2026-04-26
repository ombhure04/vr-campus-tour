
export type Floor = {
  id: string;
  floor_number: number;
  name: string;
  corridor_image: string | null;
  order_index: number;
};

export type Room = {
  id: string;
  floor_id: string;
  name: string;
  type: string;
  side: 'left' | 'right';
  position: number;
  image_360: string | null;
  description: string;
};

export type Facility = {
  id: string;
  name: string;
  type: string;
  image_360: string | null;
  icon: string;
  description: string;
  order_index: number;
};

export type Entrance = {
  id: string;
  name: string;
  image_360: string | null;
  description: string;
  is_main: boolean;
};