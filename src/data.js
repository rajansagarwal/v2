

const nodes = [
  {
    id: "6",
    name: "Branch Permission",
    icon: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
  },
  {
    id: "1",
    name: "Project",
    icon: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
  },
  {
    id: "4",
    name: "Pull Request - User Info",
    icon: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
  },
  {
    id: "2",
    name: "Repository",
    icon: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
  },
  {
    id: "3",
    name: "Pull Request",
    icon: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
  },
  {
    id: "5",
    name: "Branch",
    icon: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
  },
  {
    id: "7",
    name: "User",
    icon: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
  },
  {
    id: "8",
    name: "Group",
    icon: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
  },
  {
    id: "9",
    name: "Permission",
    icon: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
  },
  {
    id: "10",
    name: "t1",
    icon: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
  },
  {
    id: "11",
    name: "c2cpu",
    icon: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
  }
];

const links = [
  {
    key: "6:2:53:1",
    name: "Dependency",
    source: "6",
    target: "2"
  },
  {
    key: "6:5:52:1",
    name: "Dependency",
    source: "6",
    target: "5"
  },
  {
    key: "6:7:54:1",
    name: "Dependency",
    source: "6",
    target: "7"
  },
  {
    key: "6:8:55:1",
    name: "Dependency",
    source: "6",
    target: "8"
  },
  {
    key: "6:5:0:0",
    name: "__inherited__",
    source: "6",
    target: "5"
  },
  {
    key: "1:1:101:1",
    name: "Dependency",
    source: "1",
    target: "1"
  },
  {
    key: "4:5:44:1",
    name: "Dependency",
    source: "4",
    target: "5"
  },
  {
    key: "4:5:45:1",
    name: "Dependency",
    source: "4",
    target: "5"
  },
  {
    key: "4:4:46:1",
    name: "Dependency",
    source: "4",
    target: "4"
  },
  {
    key: "4:4:47:1",
    name: "Dependency",
    source: "4",
    target: "4"
  },
  {
    key: "4:4:48:1",
    name: "Dependency",
    source: "4",
    target: "4"
  },
  {
    key: "4:2:49:1",
    name: "Dependency",
    source: "4",
    target: "2"
  },
  {
    key: "4:3:0:0",
    name: "__inherited__",
    source: "4",
    target: "3"
  },
  {
    key: "2:1:37:1",
    name: "Dependency",
    source: "2",
    target: "1"
  },
  {
    key: "3:5:38:1",
    name: "Dependency",
    source: "3",
    target: "5"
  },
  {
    key: "3:5:39:1",
    name: "Dependency",
    source: "3",
    target: "5"
  },
  {
    key: "3:4:40:1",
    name: "Dependency",
    source: "3",
    target: "4"
  },
  {
    key: "3:4:41:1",
    name: "Dependency",
    source: "3",
    target: "4"
  },
  {
    key: "3:4:42:1",
    name: "Dependency",
    source: "3",
    target: "4"
  },
  {
    key: "3:2:43:1",
    name: "Dependency",
    source: "3",
    target: "2"
  },
  {
    key: "5:2:50:1",
    name: "Dependency",
    source: "5",
    target: "2"
  },
  {
    key: "7:9:61:1",
    name: "Dependency",
    source: "7",
    target: "9"
  },
  {
    key: "9:1:56:1",
    name: "Dependency",
    source: "9",
    target: "1"
  },
  {
    key: "9:2:57:1",
    name: "Dependency",
    source: "9",
    target: "2"
  },
  {
    key: "9:7:58:5",
    name: "Technical",
    source: "9",
    target: "7"
  },
  {
    key: "9:8:59:2",
    name: "Financial",
    source: "9",
    target: "8"
  },
  {
    key: "9:8:99:5",
    name: "Technical",
    source: "9",
    target: "8"
  },
  {
    key: "9:8:100:3",
    name: "Link",
    source: "9",
    target: "8"
  },
  {
    key: "10:11:88:1",
    name: "Dependency",
    source: "10",
    target: "11"
  },
  {
    key: "10:11:89:1",
    name: "Dependency",
    source: "10",
    target: "11"
  },
  {
    key: "10:11:90:1",
    name: "Dependency",
    source: "10",
    target: "11"
  },
  {
    key: "10:11:91:1",
    name: "Dependency",
    source: "10",
    target: "11"
  },
  {
    key: "10:11:92:1",
    name: "Dependency",
    source: "10",
    target: "11"
  },
  {
    key: "10:11:93:1",
    name: "Dependency",
    source: "10",
    target: "11"
  },
  {
    key: "10:11:94:1",
    name: "Dependency",
    source: "10",
    target: "11"
  },
  {
    key: "10:11:95:1",
    name: "Dependency",
    source: "10",
    target: "11"
  },
  {
    key: "11:10:83:1",
    name: "Dependency",
    source: "11",
    target: "10"
  },
  {
    key: "11:10:96:1",
    name: "Dependency",
    source: "11",
    target: "10"
  },
  {
    key: "11:10:97:1",
    name: "Dependency",
    source: "11",
    target: "10"
  },
  {
    key: "11:10:98:1",
    name: "Dependency",
    source: "11",
    target: "10"
  }
];

export const staticGraphData = {
  nodes,
  links
};
