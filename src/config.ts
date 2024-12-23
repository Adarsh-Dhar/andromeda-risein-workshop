import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
  coinDenom: "uandr",
  name: "CrowdTube",
  chainId: "elgafar-1",
  createdDate: "2024-12-23T09:06:49.085Z",
  modifiedDate: "2024-12-23T09:06:49.085Z",
  id: "andromeda",
  collections: [
    {
      crowdfund:
        "andr12m3jnuns8fry3mtmz4tvdw5590qz5tfex4x3esj8gx8gpm6d0dqqmv3arh",
      cw721: "andr1qdrr9tpstkczga4nk7pqaphrgzpke88ufvxxe633ls0nucuqsxcqgtz777",
      name: "CrowdTube",
      type: ICollectionType.CROWDFUND,
      id: "embeddables-crowdfund-1",
    },
  ],
};

export default CONFIG;