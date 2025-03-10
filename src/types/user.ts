export type user = {
  id: string;
  name: string;
  avatar: string;
  bot: boolean;
  state: number;
};

//export type myInfo = user & {"guilds": guild[]};

export type myInfo = {
  id: string;
  name: string;
  avatar: string;
  bot: boolean;
  state: number;
  guilds: {
    id: string;
    name: string;
    topic: string;
    icon: string;
    owner_id: string;
    users: {
      id: string;
      name: string;
      avatar: string;
      bot: boolean; //<-miss
      state: number;
    }[];
    channels: {
      id: string;
      channel_name: string;
      channel_topics: string;
      channel_type: string;
      channel_position: number;
      creator_id: string;
    }[];
  }[];
};
