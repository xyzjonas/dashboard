export type Bookmark = {
  title: string;
  subtitle?: string;
  icon?: string;
  link: string;
  disabled?: boolean;
};

export type Section = {
  title: string;
  bookmarks: Bookmark[];
  icon?: string;
  maxCols?: number;
  color?: string;
};

export type Links = {
  title: string;
  color?:  string;
  links: {
    label: string;
    link: string;
  }[]
}

export type Configuration = {
  links: Links[];
  sections: Section[];
  maxCols?: number;
};

export const configuration: Configuration = {
  links: [],
  sections: [
    {
      title: "apps",
      icon: "public",
      maxCols: 1,
      color: "#3876BF",
      bookmarks: [
        {
          title: "Household HQ",
          link: "https://home.bohunky.xyz/",
          icon: "payments",
        },
        {
          title: "Chef",
          link: "https://chef.bohunky.xyz/",
          icon: "restaurant_menu",
        },
        {
          title: "Chef #2",
          link: "https://chef-nuxt.bohunky.xyz/",
          icon: "restaurant_menu",
        },
        {
          title: "Torrentbox",
          link: "https://torrent.bohunky.xyz",
          icon: "si-utorrent",
        },
        {
          title: "Homeassistant",
          link: "https://homeassistant.bohunky.xyz",
          icon: "si-homeassistant",
        },
        {
          title: "qBittorrent",
          link: "https://torrent.bohunky.xyz",
          icon: "file_download",
          disabled: true,
        },
        {
          title: "Vehicles",
          link: "https://cars.bohunky.xyz",
          icon: "directions_car",
        },
        {
          title: "Monica",
          link: "https://monica.bohunky.xyz",
          icon: "si-monica",
        },
        {
          title: "Files",
          link: "https://filebrowser.bohunky.xyz",
          icon: "folder_open",
        },
        {
          title: "Music",
          link: "https://music.bohunky.xyz",
          icon: "music_note",
        },
        {
          title: "Miniflux",
          link: "https://miniflux.bohunky.xyz/",
          icon: "si-rss",
          disabled: true,
        },
      ],
    },
    {
      title: "home",
      icon: "home",
      maxCols: 1,
      color: "#79AC78",
      bookmarks: [
        {
          title: "Emby",
          link: "https://emby.home.local",
          icon: "si-emby",
        },
        {
          title: "Jellyfin",
          link: "https://jellyfin.home.local",
          icon: "si-jellyfin",
        },
        {
          title: "Chef",
          link: "https://chef.home.local",
          icon: "restaurant_menu",
          disabled: true,
        },
        {
          title: "Homeassistant",
          link: "http://homeassistant.home.local:8123",
          icon: "si-homeassistant",
        },
        {
          title: "qBittorrent",
          link: "https://qbittorrent.home.local/",
          icon: "file_download",
          disabled: true,
        },
        {
          title: "Mediasorter",
          link: "https://mediasorter.home.local",
          icon: "recycling",
        },
        {
          title: "Navidrome",
          link: "https://music.home.local",
          icon: "music_note",
        },
        {
          title: "Filebrowser",
          link: "https://filebrowser.home.local",
          icon: "folder",
        },
      ],
    },
    {
      title: "infra",
      icon: "dns",
      color: "#ea4335",
      bookmarks: [
        {
          title: "PiHole",
          link: "http://pihole.home.local/admin",
          icon: "si-pihole",
        },
        {
          title: "Portainer.public",
          link: "https://portainer.bohunky.xyz",
          icon: "si-docker",
        },
        {
          title: "Portainer.local",
          link: "https://dazhbog.home.local:9443",
          icon: "si-docker",
        },
        {
          title: "Dazhbog",
          link: "https://dazhbog.home.local:9090",
          icon: "si-fedora",
        },
      ]
    },
  ],
};
